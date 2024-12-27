import ArrowLink from '../components/global/ArrowLink';
import ContactCalloutBar from '../components/global/ContactCalloutBar';
import ContactLinks from '../components/global/ContactLinks';
import PageIntro from '../components/global/PageIntro';

const AboutPage = () => {
    return (
        <main>
            <section className='page about-page'>
                <div className="container about-hero">
                    <div className="row align-items-center">
                        <div className="col-3 offset-1 offset-md-2">
                            <div className="about-hero__img-frame ">
                                <img src="./img/about-profile.jpg" alt="Erika Nielsen headshot" />
                            </div>
                        </div>

                        <div className="about-hero__content col-7 col-md-5 offset-1">
                            <h1>About me</h1>
                            <p>Erika Nielsen - Front-End Developer</p>
                            <ContactLinks className="about-hero__contact" />
                        </div>
                    </div>
                </div>

                <PageIntro className="about-intro">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed mauris a felis maximus accumsan vitae at nulla. Donec nulla urna, tincidunt feugiat elit ut, luctus sollicitudin justo.</p>

                    <div className="d-flex justify-content-end">
                        <ArrowLink href="/projects" isRouterLink={true} linkType='accent'>Projects</ArrowLink>
                    </div>

                </PageIntro>

                <div className="about-content container">

                    <div className="row justify-content-center">
                        <div className="col-10 col-lg-8">
                            <h2>My journey</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed mauris a felis maximus accumsan vitae at nulla. Donec nulla urna, tincidunt feugiat elit ut, luctus sollicitudin justo. Praesent sagittis mi vel dui sollicitudin ultrices. Nunc consequat diam erat, et aliquam mi consequat et. </p>

                            <h2>What motivates me</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed mauris a felis maximus accumsan vitae at nulla. Donec nulla urna, tincidunt feugiat elit ut, luctus sollicitudin justo. Praesent sagittis mi vel dui sollicitudin ultrices. Nunc consequat diam erat, et aliquam mi consequat et. </p>

                            <h2>What I am looking for</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed mauris a felis maximus accumsan vitae at nulla. Donec nulla urna, tincidunt feugiat elit ut, luctus sollicitudin justo. Praesent sagittis mi vel dui sollicitudin ultrices. Nunc consequat diam erat, et aliquam mi consequat et. </p>

                            <h2>Ouside of work</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed mauris a felis maximus accumsan vitae at nulla. Donec nulla urna, tincidunt feugiat elit ut, luctus sollicitudin justo. Praesent sagittis mi vel dui sollicitudin ultrices. Nunc consequat diam erat, et aliquam mi consequat et. </p>
                        </div>
                    </div>
                </div>

            </section>

            <ContactCalloutBar />
        </main>

    );
};

export default AboutPage;


{/* <div className="row justify-content-center align-items-center flex-column-reverse flex-md-row">
                <div className="col-md-6 col-lg-8">
                    <h1>Hello.  I'm Erika.</h1>

                    <p>I am a web developer based in the United States.</p>
                    <p>Ten years ago, I was ready for a change. I embarked on a journey into web development, starting with <a href="https://code-you.org/programs/code-louisville/">Code Louisville's</a> pioneering second cohort. There, I completed both frontend and backend (C#) tracks.</p>

                    <p>Today, I'm a dedicated frontend developer who thrives on crafting accessible and responsive digital experiences. I'm passionate about problem-solving and seeing my work come to life on the web.</p>

                    <p>As developers, we constantly adapt to new technologies.  My technical expertise spans a wide range of frameworks, from traditional C# Razor to modern platforms like React, SFCC, and Shopify.</p>

                    <div>
                        <ArrowLink href="https://www.linkedin.com/in/enielsen0001/" className="me-4">
                            View profile <span className="sr-only">on LinkedIn</span>  <FontAwesomeIcon icon={faLinkedin} />
                        </ArrowLink>

                        <ArrowLink isRouterLink={true} href="/projects">See my projects</ArrowLink>
                    </div>
                </div>
                <div className="col-8 col-md-6 col-lg-4 mb-4">
                    <img src="/img/profile.png" alt="Headshot of Erika Nielsen" />
                </div>
            </div>
        </div> */}