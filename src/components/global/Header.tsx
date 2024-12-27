import { Link, NavLink, useLocation } from "react-router-dom";
import NavLinks from "../NavLinks";
import Logo from "./Logo";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "../../AppContext";

const Header = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const { isMenuOpen, setIsMenuOpen } = useAppContext();

    return (
        <header className={`nav nav-header ${isHome ? 'is-homepage' : ''}`}>

            <div className={`container nav-bar`}>
                <Logo className='nav-brand nav-brand-header' />


                <nav>
                    <button
                        className={`menu-toggle ${isMenuOpen ? 'is-open' : ''}`}
                        aria-expanded={!isMenuOpen}
                        aria-controls="header-menu"
                        onClick={() => { setIsMenuOpen(!isMenuOpen) }}
                    >
                        <span className="visually-hidden">Menu</span>

                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <path className="line--1" d="M0 55l14-10c4.7-3.3 9-5 13-5h72" />
                            <path className="line--2" d="M0 50h99" />
                            <path className="line--3" d="M0 45l14 10c4.7 3.3 9 5 13 5h72" />
                        </svg>
                    </button>

                    <div
                        className={`nav-header-menu ${isMenuOpen ? 'show-menu' : ''}`}
                        aira-hidden={!isMenuOpen}
                        id="header-menu"

                    >
                        <NavLinks className='nav-links-header' />
                    </div>
                </nav>
            </div>

        </header>
    )
}

export default Header;

