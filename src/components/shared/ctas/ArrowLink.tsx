import { ReactNode } from 'react';
import styles from './cta-styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';

type TArrowLinkProps = {
    href: string,
    children: ReactNode,
    className?: string;
}

const ArrowLink = ({ href, children, className }: TArrowLinkProps) => {
    return (
        <a href={href} className={`${styles['arrow-link']} icon-link ${className && className}`}>
            { children }
            {/* <FontAwesomeIcon icon={faArrowRight} /> */}
            <FontAwesomeIcon icon={faAngleRight} />
        </a>
    );
}

export default ArrowLink;