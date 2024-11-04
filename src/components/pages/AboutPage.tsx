import React from 'react';
import styles from './page-styles.module.scss';

const AboutPage = () => {
    return (
        <div className={`container ${styles['page-content']}`}>

            <div className="row">
                <div className="col-md-8">
                    <h1>Hello.  I'm Erika.</h1>

                    <p>I am a web developer based in the United States.</p>
                    <p>Ten years ago, I was ready for a change. I embarked on a journey into web development, starting with <a href="https://code-you.org/programs/code-louisville/">Code Louisville's</a> pioneering second cohort. There, I completed both frontend and backend (C#) tracks.</p>

                    <p>Today, I'm a dedicated frontend developer who thrives on crafting accessible and responsive digital experiences. I'm passionate about problem-solving and seeing my work come to life on the web</p>

                    <p>As developers, we constantly adapt to new technologies.  My technical expertise spans a wide range of frameworks, from traditional C# Razor to modern platforms like React, SFCC, and Shopify.</p>

                    <div className={styles['about-cta-wrap']}>
                        <a className="btn btn-dark me-2" href="https://www.linkedin.com/in/enielsen0001/">Check me out on LinkedIn</a>
                        <a className="btn btn-dark" href="/projects">See my projects</a>
                    </div>
                </div>
                <div className={`col-md-4`}>
                    <img className={styles['about-img']} src="https://via.placeholder.com/600x600" alt="" />
                </div>
            </div>
        </div>

    );
};

export default AboutPage;