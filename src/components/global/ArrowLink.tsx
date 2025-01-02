import { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

type TArrowLinkProps = {
    href: string,
    children: ReactNode,
    className?: string,
    isRouterLink?: boolean,
    newTab?: boolean,
    linkType?: "primary" | "accent";
}

const ArrowIcon = () => {
    return (
    <span className="arrow-icon" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 17" aria-hidden="true">
            <path fill="currentColor" d="m14.056 8.5-8.5 8.5-1.695-1.695L10.666 8.5 3.861 1.695 5.556 0l8.5 8.5ZM3.883 5.126.5 8.507l3.353 3.353 3.381-3.382-3.352-3.352Z"/>
        </svg>
    </span>
    );
}

const ArrowLink = ({ href, children, className, isRouterLink = false, newTab = false, linkType = "primary" }: TArrowLinkProps) => {
    if(isRouterLink) {
        return (
            <Link to={href} className={`arrow-link arrow-link--${linkType} ${className ? className : ''}`}>
                { children }
                <ArrowIcon/>
            </Link>
        );
    } else {
        return (
            <a href={href}
            className={`arrow-link arrow-link--${linkType} ${className ? className : ''}`}
            {...(newTab && { target: '_blank' })}
            >
                { children }
                <ArrowIcon/>
            </a>
        );
    }
}

export default ArrowLink;