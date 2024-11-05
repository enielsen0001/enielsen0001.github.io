import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const path = window.location.pathname;

    //ENTODO fix aria-current and active class
    return (
        <nav className={`bg-dark no-print`}  data-bs-theme="dark">
            <div className={`container nav-bar`}>
                <Link className="nav-brand" to="/">Erika Nielsen</Link>

                <div className="justify-content-end" id="navbarNav">
                    <ul className="nav-list">
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