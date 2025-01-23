import { useState } from 'react';
import PageIntro from '../components/global/PageIntro';
import ContactForm from '../components/global/ContactForm';
import HeroBanner from '../components/global/HeroImage';

const ContactPage = () => {
    const [showLoader, setShowLoader] = useState(true);
    return (
        <main>
            <div className="page contact-page">
                <div className="contact-hero">
                    <HeroBanner fileTitle="hello-hero" />
                    <h1 className="visually-hidden">Hello</h1>
                </div>

                <PageIntro className="contact-intro">
                    <p>Let's connect! I'd love to hear about your project ideas, answer any questions you have about my work, or just chat. Feel free to use the form below to get in touch.</p>
                </PageIntro>


                <div className="contact-content">
                    <div className="container">

                        <div className="row justify-content-center">
                            <ContactForm />
                        </div>

                    </div>

                </div>

            </div>
        </main>
    );
};

export default ContactPage;