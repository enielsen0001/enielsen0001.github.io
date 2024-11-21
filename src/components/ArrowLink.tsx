import { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

type TArrowLinkProps = {
    href: string,
    children: ReactNode,
    className?: string,
    isRouterLink?: boolean,
    newTab?: boolean
}

const ArrowLink = ({ href, children, className, isRouterLink = false, newTab = false }: TArrowLinkProps) => {
    if(isRouterLink) {
        return (
            <Link to={href} className={`arrow-link icon-link ${className && className}`}>
                { children }
                <FontAwesomeIcon icon={faAngleRight} />
            </Link>
        );
    } else {
        return (
            <a href={href}
            className={`arrow-link icon-link ${className && className}`}
            {...(newTab && { target: '_blank' })}
            >
                { children }
                <FontAwesomeIcon icon={faAngleRight} />
            </a>
        );
    }
}

export default ArrowLink;