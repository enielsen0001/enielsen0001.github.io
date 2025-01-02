import ArrowLink from '../components/global/ArrowLink';
import ContactCalloutBar from '../components/global/ContactCalloutBar';
import ContactLinks from '../components/global/ContactLinks';
import PageIntro from '../components/global/PageIntro';

const AboutPage = () => {
    return (
        <main>
            <section className='page about-page'>
                <div className="about-hero d-flex align-items-center">
                    <div className="container">
                        <div className="row align-items-center">

                            <div className="about-hero__content">
                                <h1>About me</h1>
                                <p>Erika Nielsen - Front-End Developer</p>
                                <ContactLinks className="about-hero__contact" />
                            </div>
                        </div>
                    </div>

                </div>

                <PageIntro className="about-intro">
                    <p>As a dedicated frontend developer based in the United States, I thrive on crafting accessible and responsive digital experiences, passionate about problem-solving and seeing my work come to life on the web. Recognizing the constant evolution of technology in our field, my technical expertise spans a range of technologies, including languages like JavaScript, TypeScript, and C#, modern libraries like React, and platforms like SFCC and Shopify.</p>
                </PageIntro>

                <div className="about-content container">

                    <div className="row justify-content-center">
                        <div className="about-grid col-lg-10">
                            <div className="div1"> <h2>My journey</h2>
                                <p>Ten years ago, seeking a new challenge, I embarked on a path into web development, starting with <a href="https://code-you.org/programs/code-louisville/">Code Louisville's</a>&nbsp;pioneering second cohort where I completed training in both front-end and back-end (C#) technologies. This foundation has allowed me to contribute to projects across diverse sectors, from healthcare and internet services to talent acquisition and e-commerce.  Due to a recent company restructuring, I'm now available to join a new and innovative team.
                                </p>
                                <ArrowLink href="/#skills-exp" isRouterLink={true}>Learn more about my experience</ArrowLink>
                                <ArrowLink href="/projects" isRouterLink={true}>See my projects</ArrowLink>
                            </div>
                            <div className="div2"> <h2>What motivates me</h2>
                                <p>I'm driven by a commitment to crafting high-quality digital experiences, a process I approach with a dedicated passion for problem-solving. This involves a focus on creating intuitive and user-centric experiences that are both delightful and empowering, developing high-performing and scalable solutions that clients can be proud to own, and writing clean, efficient, and easily maintainable code that promotes seamless collaboration within development teams.
                                </p>
                            </div>
                            <div className="div3"><h2>What I'm looking for</h2>
                                <p>I find great satisfaction in various aspects of front-end development, including problem-solving and creating compelling user interfaces. I'm proficient in React and appreciate the business value that Shopify brings to clients. Driven by curiosity and a desire for continuous learning, I'm seeking an opportunity to enhance my skills within a collaborative environment that values knowledge sharing, quality product development, innovation, and a culture of mutual respect.</p>
                            </div>
                            <div className="div4"> <h2>Ouside of work</h2>
                                <p>I value a healthy work-life balance and enjoy disconnecting from screens by exploring the natural beauty of my surroundings. Living in an area with abundant land and water trails, as well as beautiful beaches, provides ample opportunities for outdoor activities. Whether it's hiking, kayaking, cycling, or simply relaxing with a book or podcast, I appreciate the distinct seasons—from cozy winters spent cooking, crafting, and reading, to glorious summers filled with outdoor adventures with my family and dogs.</p>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

            <ContactCalloutBar />
        </main>

    );
};

export default AboutPage;


