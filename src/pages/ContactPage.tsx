import { useState } from 'react';
import ContactCalloutBar from '../components/global/ContactCalloutBar';
import ContactLinks from '../components/global/ContactLinks';
import PageIntro from '../components/global/PageIntro';

const ContactPage = () => {
    const [showLoader, setShowLoader] = useState(true);
    return (
        <main>
            <div className="page contact-page">
                <div className="contact-hero">
                    <div className="container">
                        <div className="row">
                            <h1>Contact</h1>
                        </div>
                    </div>
                </div>

                <PageIntro className="contact-intro">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed mauris a felis maximus accumsan vitae at nulla. Donec nulla urna, tincidunt feugiat elit ut, luctus sollicitudin justo. Praesent sagittis mi vel dui sollicitudin ultrices. Nunc consequat diam erat, et aliquam mi consequat et. </p>

                    <ContactLinks className='contact-intro__links'/>
                </PageIntro>


                <div className="contact-content">
                    <div className="container">

                        <div className="row">
                            { showLoader && <span className="loader"></span> }

                            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdXWfjyM99yOlm3XR-alKAxEWbS3MSXh4iVIVeyoPa_mnIxYQ/viewform?embedded=true" width="100%" height="950" onLoad={() => { setShowLoader(false)}}>Loading…</iframe>
                        </div>

                    </div>

                </div>

            </div>
        </main>
    );
};

export default ContactPage;