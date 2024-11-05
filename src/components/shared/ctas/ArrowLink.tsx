import { ReactNode } from 'react';
import styles from './cta-styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

type TArrowLinkProps = {
    href: string,
    children: ReactNode,
    className?: string,
    isRouterLink?: boolean
}

const ArrowLink = ({ href, children, className, isRouterLink = false }: TArrowLinkProps) => {
    if(isRouterLink) {
        return (
            <Link to={href} className={`${styles['arrow-link']} icon-link ${className && className}`}>
                { children }
                {/* <FontAwesomeIcon icon={faArrowRight} /> */}
                <FontAwesomeIcon icon={faAngleRight} />
            </Link>
        );
    } else {
        return (
            <a href={href} className={`${styles['arrow-link']} icon-link ${className && className}`}>
                { children }
                {/* <FontAwesomeIcon icon={faArrowRight} /> */}
                <FontAwesomeIcon icon={faAngleRight} />
            </a>
        );
    }
}

export default ArrowLink;