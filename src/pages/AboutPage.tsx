import ArrowLink from '../components/global/ArrowLink';
import ContactCalloutBar from '../components/global/ContactCalloutBar';
import ContactLinks from '../components/global/ContactLinks';
import HeroBanner from '../components/global/HeroImage';
import PageIntro from '../components/global/PageIntro';

const AboutPage = () => {
    return (
        <main>
            <section className='page about-page'>
                <div className="about-hero d-flex align-items-center">
                    <HeroBanner fileTitle="dots-hero" />
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
                    <p>Hey there! I'm a front-end developer in the US with a diverse background and a knack for adapting to new challenges. I love building accessible and responsive digital experiences, and I'm always focused on delivering value to clients and users. My technical skills include JavaScript, TypeScript, React, WordPress, and Shopify—but I'm not afraid to dive into new technologies if it means creating a better experience. I'm a firm believer in lifelong learning and I'm always looking for ways to grow and improve.</p>
                </PageIntro>

                <div className="about-content container">

                    <div className="row justify-content-center">
                        <div className="about-grid col-lg-10">
                            <div className="div1"> <h2>My journey</h2>
                                <p>My journey into web development started about ten years ago when I joined <a href="https://code-you.org/programs/code-louisville/">Code Louisville's</a>&nbsp;second cohort. It was an amazing experience where I learned the ropes of both front-end and back-end development (C#). That foundation has allowed me to grow and contribute to projects in a variety of industries, including healthcare, internet services, talent acquisition, and e-commerce. Now, after a recent company restructuring, I'm excited to find a new team where I can continue to learn and contribute.
                                </p>
                                <ArrowLink href="/#skills-exp" isRouterLink={true}>Learn more about my experience</ArrowLink>
                                <ArrowLink href="/projects" isRouterLink={true}>See my projects</ArrowLink>
                            </div>
                            <div className="div2"> <h2>What motivates me</h2>
                                <p>What really gets me going is helping people, businesses, and brands shine online. I love building things that not only look great but also work smoothly for everyone. I'm passionate about solving problems and crafting top-notch digital experiences that are both intuitive and empowering. It's awesome to create high-performing, scalable solutions that clients are proud to own, and I'm a big believer in writing clean, efficient code that makes teamwork a breeze.</p>
                            </div>
                            <div className="div3"><h2>What I'm looking for</h2>
                                <p>I'm pretty open to whatever exciting opportunities come my way! I really enjoy all aspects of front-end development, especially tackling tough problems and building awesome user interfaces. I'm a big fan of React, and I see huge value in what Shopify can do for businesses. I'm also diving into WordPress and PHP/Laravel to broaden my skillset and explore the world of back-end development. I'm always eager to learn and grow, so I'm looking for a collaborative team where we can share knowledge, build great products, and push the boundaries of what's possible—all in a respectful and supportive environment.</p>
                            </div>
                            <div className="div4"> <h2>Ouside of work</h2>
                                <p>Outside of work, I'm all about trying new things and enjoying life. I love living in a beautiful area with amazing outdoor opportunities, especially during the summer. Whether it's hiking, kayaking, cycling, or just relaxing with a book, I'm always looking for ways to disconnect and recharge. I enjoy the different vibes of each season, from cozy winter nights spent cooking and crafting to sunny summer days exploring with my family and dogs.</p>
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


