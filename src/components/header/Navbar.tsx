import { Link, NavLink } from "react-router-dom";
import styles from "./navbar.module.scss";

const Navbar = () => {
    const path = window.location.pathname;

    //ENTODO fix aria-current and active class
    return (
        <nav className={`bg-dark no-print`}  data-bs-theme="dark">
            <div className={`container ${styles['nav-bar']}`}>
                <Link className={styles['nav-brand']} to="/">Erika Nielsen</Link>

                <div className="justify-content-end" id="navbarNav">
                    <ul className={styles['nav-list']}>
                        <li>
                            <NavLink to="/">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects">Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to="/resume">Resume</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;