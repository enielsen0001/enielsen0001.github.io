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

                    <p>While my primary focus has been contributing to professional projects within established teams, I'm now dedicating time to building a more robust personal portfolio to showcase my expanding skillset and explore new creative directions.</p>

                </PageIntro>


                <div className="projects-content">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-10 col-md-8">

                                <div className="project-info">
                                    <h2>Portfolio Website (This Site)</h2>
                                    <p>I built this portfolio website from the ground up using HTML, SCSS, JavaScript,
                                        React, TypeScript, and the Bootstrap Grid. It's hosted on GitHub Pages and
                                        represents my approach to clean, functional, and user-friendly design.</p>

                                    <ArrowLink href="https://github.com/enielsen0001/enielsen0001.github.io"
                                               newTab={true}>View on GitHub <span className="sr-only"> opens in a new tab</span>
                                    </ArrowLink>
                                </div>

                                <div className="project-info">
                                    <h2>Storybook Component Library</h2>
                                    <p>This is a sample Storybook component library I'm using to get the hang of Storybook
                                        and Angular component development.  The components are just for learning and
                                        demonstration, letting me practice building interactive UI elements and working
                                        within Storybook.  They're not quite production-ready, but they're helping me get
                                        familiar with Angular's component architecture and the Storybook workflow.</p>

                                    <ArrowLink href="https://679d444cb4ff7adb6e065201-prdfpanzmd.chromatic.com/"
                                               newTab={true}>View Storybook <span className="sr-only"> opens in a new tab</span>
                                    </ArrowLink>

                                    <ArrowLink href="https://github.com/enielsen0001/angular-storybook-playground"
                                               newTab={true}>View on GitHub <span className="sr-only"> opens in a new tab</span>
                                    </ArrowLink>
                                </div>

                                <div className="project-info">
                                    <h2>D3.js Data Visualizations</h2>
                                    <p>These examples demonstrate my ability to transform complex datasets into visually
                                        compelling and informative visualizations, ranging from basic charts to
                                        intricate network graphs.</p>

                                    <ArrowLink href="https://codepen.io/collection/LYGOBd" newTab={true}>View on
                                        CodePen <span className="sr-only">opens in a new tab</span></ArrowLink>
                                </div>

                                <div className="project-info">
                                    <h2>Client Work Examples</h2>
                                    <p>I'm happy to share examples of my client work! Just reach out, and I'd be glad to
                                        chat.</p>

                                    <ArrowLink href="/contact" isRouterLink={true}>Contact me</ArrowLink></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactCalloutBar/>
        </main>
    );
};

export default ProjectsPage;