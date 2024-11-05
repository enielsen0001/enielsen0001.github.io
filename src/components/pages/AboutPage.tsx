import React from 'react';
import styles from './page-styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ArrowLink from '../shared/ctas/ArrowLink';

const AboutPage = () => {
    return (
        <div className={`container ${styles['page-content']}`}>

            <div className="row justify-content-center align-items-center flex-column-reverse flex-md-row">
                <div className="col-md-6 col-lg-8">
                    <h1>Hello.  I'm Erika.</h1>

                    <p>I am a web developer based in the United States.</p>
                    <p>Ten years ago, I was ready for a change. I embarked on a journey into web development, starting with <a href="https://code-you.org/programs/code-louisville/">Code Louisville's</a> pioneering second cohort. There, I completed both frontend and backend (C#) tracks.</p>

                    <p>Today, I'm a dedicated frontend developer who thrives on crafting accessible and responsive digital experiences. I'm passionate about problem-solving and seeing my work come to life on the web.</p>

                    <p>As developers, we constantly adapt to new technologies.  My technical expertise spans a wide range of frameworks, from traditional C# Razor to modern platforms like React, SFCC, and Shopify.</p>

                    <div className={styles['about-cta-wrap']}>
                        <ArrowLink href="https://www.linkedin.com/in/enielsen0001/" className="me-4">
                            View profile <span className="sr-only">on LinkedIn</span>  <FontAwesomeIcon icon={faLinkedin} />
                        </ArrowLink>

                        <ArrowLink isRouterLink={true} href="/projects">See my projects</ArrowLink>
                    </div>
                </div>
                <div className="col-8 col-md-6 col-lg-4 mb-4">
                    <img className={styles['about-img']} src="/img/profile.png" alt="Headshot of Erika Nielsen" />
                </div>
            </div>
        </div>

    );
};

export default AboutPage;