import { Link } from "react-router-dom";

const Logo = ({ className = '' } ) => {
    return (
        <Link className={`${className}`} to="/">
            <img src="./img/logo.png" alt="E | N"/>
        </Link>
    );
}

export default Logo;