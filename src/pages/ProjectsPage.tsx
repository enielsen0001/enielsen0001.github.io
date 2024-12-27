import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ArrowLink from '../components/global/ArrowLink';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import ContactCalloutBar from '../components/global/ContactCalloutBar';
import PageIntro from '../components/global/PageIntro';

const ProjectsPage = () => {
    return (
        <main>
            <div className="page projects-page">
                <div className="projects-hero">
                    <div className="container">
                        <div className="row">
                            <h1>Projects</h1>
                        </div>
                    </div>
                </div>

                <PageIntro className="projects-intro">

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed mauris a felis maximus accumsan vitae at nulla. Donec nulla urna, tincidunt feugiat elit ut, luctus sollicitudin justo. Praesent sagittis mi vel dui sollicitudin ultrices. Nunc consequat diam erat, et aliquam mi consequat et. </p>

                    {/* <p>Following an extended period of employment, I am currently seeking new professional challenges and am actively developing my portfolio.</p> */}

                </PageIntro>


                <div className="projects-content">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-10 col-md-8">

                                <div className="project-info">
                                    <h2>Portfolio website (this site)</h2>
                                    <p>Featured skills: HTML, SCSS, JavsScript, React, TypeScript, Bootstrap, Git</p>
                                    <p>This is a simple, clean and functional personal portfolio website built with React and hosted on GitHub Pages.</p>

                                    <ArrowLink href="https://github.com/enielsen0001/enielsen0001.github.io" newTab={true}>See Portfolio site <span className="sr-only"> on GitHub opens in a new tab</span> </ArrowLink>
                                </div>
                                {/*
            <div className="project-info">
                <h2>Shopify custom site - <FontAwesomeIcon icon={faScrewdriverWrench} /> WIP</h2>
                <p>Featured skills: Liquid, GraphQL, JavaScript, HTML, CSS, Git</p>
                <p>A customized Shopify theme and discount app.</p>

                <ArrowLink href="https://github.com/enielsen0001/shopify-test-theme" newTab={true} className="me-4">See theme <span className="sr-only"> on GitHub opens in a new tab</span> <FontAwesomeIcon icon={faGithub} /></ArrowLink>

                <ArrowLink href="https://en002-test-store.myshopify.com/"  newTab={true}>See store <span className="sr-only"> opens in a new tab</span> <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></ArrowLink>
                <p className="mt-1"><em>Please <a href="mailto:enielsen002@gmail.com">contact me</a> for store password</em></p>
            </div> */}

                                <div className="project-info">
                                    <h2>MERN Stack Notes App - <FontAwesomeIcon icon={faScrewdriverWrench} /> WIP</h2>
                                    <p>Featured skills: MongoDb, Mongoose, Express, Node, JSON Web Tokens (JWT), React, Redux, TypeScript</p>
                                    <p>The 'Hello world' of full stack JS development.</p>
                                    <p>This is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, and Node.js). It allows users to create, edit, and delete notes, providing a simple and efficient way to organize thoughts and ideas.</p>

                                    <ArrowLink href="https://github.com/enielsen0001/enielsen0001.github.io" newTab={true}>See notes app <span className="sr-only"> on GitHub opens in a new tab</span></ArrowLink>
                                </div>

                                <div className="project-info">
                                    <h2>D3.js Examples</h2>
                                    <p>Featured skills: D3.js</p>
                                    <p>This project demonstrates my proficiency in D3.js by transforming complex datasets into visually stunning and informative visualizations. From simple bar charts to intricate network graphs, these projects showcase my creative approach to data storytelling.</p>

                                    <ArrowLink href="https://codepen.io/collection/LYGOBd" newTab={true}>See examples <span className="sr-only"> on Codepen opens in a new tab</span></ArrowLink></div>
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