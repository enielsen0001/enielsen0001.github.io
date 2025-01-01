import { useState } from 'react';
import ContactLinks from '../components/global/ContactLinks';
import PageIntro from '../components/global/PageIntro';
import ContactForm from '../components/global/ContactForm';

const ContactPage = () => {
    const [showLoader, setShowLoader] = useState(true);
    return (
        <main>
            <div className="page contact-page">
                <div className="contact-hero">
                    <h1 className="visually-hidden">Hello</h1>
                </div>

                <PageIntro className="contact-intro">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed mauris a felis maximus accumsan vitae at nulla. Donec nulla urna, tincidunt feugiat elit ut, luctus sollicitudin justo. Praesent sagittis mi vel dui sollicitudin ultrices. Nunc consequat diam erat, et aliquam mi consequat et. </p>
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