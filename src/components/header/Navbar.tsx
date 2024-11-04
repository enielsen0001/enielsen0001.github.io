import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";

const Navbar = () => {

    //ENTODO fix aria-current and active class
    return (
        <nav className={`bg-dark no-print`}  data-bs-theme="dark">
            <div className={`container ${styles['nav-bar']}`}>
                <Link className={styles['nav-brand']} to="/">Erika Nielsen</Link>

                <div className="justify-content-end" id="navbarNav">
                    <ul className={styles['nav-list']}>
                        <li>
                            <Link to="/">About</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/resume">Resume</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;