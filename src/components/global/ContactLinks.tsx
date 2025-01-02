import { faLinkedinIn, faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ContactLinks = ({ className = '' }) => {
    return (
        <ul className={`list-reset contact-links ${!!className ? className : ''}`} >
            <li>
                <Link className="contact-link" to="https://www.linkedin.com/in/enielsen0001/">
                    <span className="visually-hidden">Linkedin</span>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </Link>
            </li>    <li>
                <Link className="contact-link" to="https://github.com/enielsen0001">
                    <span className="visually-hidden">GitHub</span>
                    <FontAwesomeIcon icon={faGithubAlt} />
                </Link>
            </li>    <li>
                <Link className="contact-link" to="/#/contact">
                    <span className="visually-hidden">email</span>
                    <FontAwesomeIcon icon={faEnvelope} />
                </Link>
            </li>
        </ul>
    );
}

export default ContactLinks;