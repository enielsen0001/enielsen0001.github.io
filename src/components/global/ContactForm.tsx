import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

declare global {
    interface Window {
        grecaptcha?: {
            execute: any; // Make grecaptcha optional
            ready: (callback: () => void) => void;
            render: (container: string | HTMLElement, params: { sitekey: string; callback?: (token: string) => void; 'expired-callback'?: () => void }) => number;
            reset: (widgetId?: number) => void;
            getResponse: (widgetId?: number) => string;
        };
    }
}

const ContactForm: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionMessage, setSubmissionMessage] = useState<string | null>(null);
    const [recaptchaResponse, setRecaptchaResponse] = useState<string | null>(null);
    const [isRecaptchaReady, setIsRecaptchaReady] = useState(false);
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
    const recaptchaRef = useRef<HTMLDivElement>(null);
    const [recaptchaWidgetId, setRecaptchaWidgetId] = useState<number | null>(null);
    const [isSubmissionError, setIsSubmissionError] = useState(false);

    useEffect(() => {
        let widgetId: number | null = null;
        let isMounted = true;

        const loadRecaptchaScript = () => {
            const script = document.createElement('script');
            script.src = `https://www.google.com/recaptcha/api.js`;
            script.async = true;
            script.defer = true;
            script.onerror = () => {
                console.error("Failed to load reCAPTCHA script.");
            }
            script.onload = () => {
                if (window.grecaptcha) {
                    window.grecaptcha.ready(() => {
                        if (recaptchaRef.current && isMounted &&window.grecaptcha) {
                            widgetId = window.grecaptcha.render(recaptchaRef.current, {
                                sitekey: process.env.REACT_APP_GR_SITE_KEY || "",
                                callback: (response: string) => {
                                    setRecaptchaResponse(response);
                                    setIsRecaptchaReady(true);
                                },
                                'expired-callback': () => {
                                    setRecaptchaResponse(null);
                                    setIsRecaptchaReady(false);
                                },
                            });
                            setRecaptchaWidgetId(widgetId);
                        }
                    });
                } else {
                    console.error("grecaptcha not available after script load")
                }
            };

            document.body.appendChild(script);
        };

        loadRecaptchaScript();

        return () => {
            isMounted = false;
            const script = document.querySelector(`script[src*="https://www.google.com/recaptcha/api.js"]`);
            if (script) {
                document.body.removeChild(script);
            }
            if (window.grecaptcha && widgetId !== null) {
                window.grecaptcha.reset(widgetId);
            }
        };
    }, []);

    const executeRecaptcha = async () => {
        if (!window.grecaptcha) {
            console.error("reCAPTCHA not loaded");
            return;
        }

        try {

            if(!!window.grecaptcha) {
                const token = await window.grecaptcha.execute(process.env.REACT_APP_GR_SITE_KEY, { action: 'submit' });
                setRecaptchaToken(token);
            }
        } catch (error) {
            console.error("reCAPTCHA execution failed:", error);
        }
    }

    const validateForm = () => {
        if (!formRef.current) return {};

        const errors: { [key: string]: string } = {};
        const formData = new FormData(formRef.current);

        if (!formData.get('user_name')) {
            errors.fullName = 'Please enter your full name.';
        }
        if (formData.get('user_tel') && !/^[+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(formData.get('user_tel') as string)) {
            errors.phoneNumber = 'Please enter a valid phone number.';
        }
        if (!formData.get('user_email')) {
            errors.email = 'Please enter your email address.';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.get('user_email') as string)) {
            errors.email = 'Please enter a valid email address.';
        }
        if (!formData.get('user_message')) {
            errors.message = 'Please enter your message.';
        }

        return errors;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        setIsSubmitting(true);
        setSubmissionMessage(null);
        setFormErrors({});
        setIsSubmissionError(false);

        const errors = validateForm();
        setFormErrors(errors);

        if (Object.keys(errors).length === 0 && formRef.current && recaptchaResponse) {
            try {
                await emailjs.sendForm(`${process.env.REACT_APP_EM_SERVICE}`, `${process.env.REACT_APP_EM_TEMPLATE}`, formRef.current, {
                    publicKey: `${process.env.REACT_APP_EM_PUBLIC}`,
                    //@ts-ignore
                    'g-recaptcha-response': recaptchaResponse
                });
                console.log('SUCCESS!');
                formRef.current.reset();
                setSubmissionMessage('Message sent successfully!');
                executeRecaptcha();
            } catch (error: any) {
                console.error('FAILED...', error);
                setSubmissionMessage('Failed to send message. Please try again later.');
                setIsSubmissionError(true);
            }
        } else if (!recaptchaResponse) {
            setSubmissionMessage("Please complete the reCAPTCHA.");
            setIsSubmissionError(true);
        }
        setIsSubmitting(false);
    };

    return (
        <form className="contact-form" ref={formRef} onSubmit={handleSubmit} noValidate>
            <input type="hidden" name="from_name" value="Erika Nielsen" />

            <div role="group" aria-labelledby="contactInfo">
                <h2 id="contactInfo">Contact Information</h2>
                <div className={`contact-form-input-group ${formErrors.fullName ? 'input-error' : ''}`}>
                    <label htmlFor="fullName">Full Name<span>*</span>:</label>
                    <input type="text" id="fullName" name="user_name" aria-describedby="fullNameError" aria-invalid={!!formErrors.fullName} />
                    {formErrors.fullName && <div id="fullNameError" className="contact-form-error" role="alert">{formErrors.fullName}</div>}
                </div>
                <div className={`contact-form-input-group ${formErrors.phoneNumber ? 'input-error' : ''}`}>
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input type="tel" id="phoneNumber" name="user_tel" aria-describedby="phoneNumberError" aria-invalid={!!formErrors.phoneNumber} />
                    {formErrors.phoneNumber && <div id="phoneNumberError" className="contact-form-error" role="alert">{formErrors.phoneNumber}</div>}
                </div>
                <div className={`contact-form-input-group ${formErrors.email ? 'input-error' : ''}`}>
                    <label htmlFor="email">Email<span>*</span>:</label>
                    <input type="email" id="email" name="user_email" required aria-describedby="emailError" aria-invalid={!!formErrors.email} />
                    {formErrors.email && <div id="emailError" className="contact-form-error" role="alert">{formErrors.email}</div>}
                </div>
            </div>
            <div className={`contact-form-input-group ${formErrors.message ? 'input-error' : ''}`}>
                <label htmlFor="message">Message<span>*</span>:</label>
                <textarea id="message" name="user_message" rows={10} required aria-describedby="messageError" aria-invalid={!!formErrors.message} />
                {formErrors.message && <div id="messageError" className="contact-form-error" role="alert">{formErrors.message}</div>}
            </div>

            {!recaptchaWidgetId && <div ref={recaptchaRef}></div>}

            <button type="submit" disabled={isSubmitting} className='primary-cta'>
                {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
            {submissionMessage && <div className={`contact-form-submission-msg ${isSubmissionError ? 'submission-error' : ''}`} role="status">{submissionMessage}</div>}
        </form>
    );
};

export default ContactForm;