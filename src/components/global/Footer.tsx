import { useLocation } from "react-router-dom";
import NavLinks from "../NavLinks";
import ContactLinks from "./ContactLinks";
import Logo from "./Logo";

const Footer = () => {

    return (
        <footer className={`footer`}>
            <div className={`container d-md-flex justify-content-between`}>
                <Logo className='nav-brand nav-brand-footer' />

                <nav className="">
                    <NavLinks className='nav-links-footer' />
                    <span className="divider"></span>
                    <ContactLinks className="footer-contact-links"/>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;