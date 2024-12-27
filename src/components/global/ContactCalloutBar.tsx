import { Link } from "react-router-dom";

const ContactCalloutBar = () => {
    return (
        <div className="contact-bar">
            <div className="container">
                <div className="row">
                    <div className="d-flex justify-content-center align-items-center">
                        <p>Let's create something <br />amazing together</p>
                        <Link className="primary-cta" to="/contact">contact</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactCalloutBar;