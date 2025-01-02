import ArrowLink from '../components/global/ArrowLink';
import ContactCalloutBar from '../components/global/ContactCalloutBar';
import HeroBanner from '../components/global/HeroImage';
import PageIntro from '../components/global/PageIntro';

const ProjectsPage = () => {
    return (
        <main>
            <div className="page projects-page">
                <div className="projects-hero d-flex justify-content-center align-items-center">
                    <HeroBanner fileTitle="ide-hero" />
                    <h1>Projects</h1>
                </div>

                <PageIntro className="projects-intro">

                    <p>While my professional experience has been my primary focus, I'm actively building my personal portfolio to showcase my skills and passion for web development. Here are a few projects I'm currently developing:</p>

                </PageIntro>


                <div className="projects-content">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-10 col-md-8">

                                <div className="project-info">
                                    <h2>Portfolio Website (This Site)</h2>
                                    <p>Technologies: HTML, SCSS, JavaScript, React, TypeScript, Bootstrap Grid, Git</p>
                                    <p>This clean and functional portfolio website, built with React and hosted on GitHub Pages, highlights my skills and experience.</p>

                                    <ArrowLink href="https://github.com/enielsen0001/enielsen0001.github.io" newTab={true}>View on GitHub <span className="sr-only"> opens in a new tab</span> </ArrowLink>
                                </div>

                                <div className="project-info">
                                    <h2>MERN Stack Notes App (Work in Progress)</h2>
                                    <p>Technologies: MongoDB, Mongoose, Express.js, Node.js, JSON Web Tokens (JWT), React, Redux, TypeScript</p>
                                    <p>This full-stack application, built using the MERN stack, allows users to create, edit, and delete notes, providing a simple and efficient way to manage their thoughts and ideas.</p>

                                    <ArrowLink href="https://github.com/enielsen0001/enielsen0001.github.io" newTab={true}>View on GitHub <span className="sr-only"> on GitHub opens in a new tab</span></ArrowLink>
                                </div>

                                <div className="project-info">
                                    <h2>D3.js Data Visualizations</h2>
                                    <p>Technologies: D3.js</p>
                                    <p>These examples demonstrate my ability to transform complex datasets into visually compelling and informative visualizations, ranging from basic charts to intricate network graphs.</p>

                                    <ArrowLink href="https://codepen.io/collection/LYGOBd" newTab={true}>View on CodePen <span className="sr-only">opens in a new tab</span></ArrowLink>
                                </div>

                                <div className="project-info">
                                    <h2>Client Work Examples</h2>
                                    <p>For examples of client work completed during my employment, please feel free to contact me directly</p>

                                    <ArrowLink href="/contact" isRouterLink={true}>Contact me</ArrowLink></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactCalloutBar />
        </main>
    );
};

export default ProjectsPage;