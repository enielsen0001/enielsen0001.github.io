import React from 'react';
import styles from './page-styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ArrowLink from '../components/ArrowLink';
import { faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

const ProjectsPage = () => {
    return (
        <div className={`container ${styles['page-content']}`}>

            <h1 className="mb-4">Projects</h1>

            <p>Following an extended period of employment, I am currently seeking new professional challenges and am actively developing my portfolio.</p>

            <div className={styles.proj}>
                <h2>Portfolio website (this site)</h2>
                <p>Featured skills: HTML, SCSS, JavsScript, React, TypeScript, Bootstrap</p>
                <p>This is a simple, clean and functional personal portfolio website built with React and hosted on GitHub Pages.</p>

                <ArrowLink href="https://github.com/enielsen0001/enielsen0001.github.io">See Portfolio site <span className="sr-only"> on GitHub</span> <FontAwesomeIcon icon={faGithub} /></ArrowLink>
            </div>
            <div className={styles.proj}>
                <h2>MERN Stack Notes App - <FontAwesomeIcon icon={faScrewdriverWrench} /> WIP</h2>
                <p>Featured skills: MongoDb, Mongoose, Express, Node, JSON Web Tokens (JWT), React, Redux, TypeScript</p>
                <p>The 'Hello world' of full stack JS development.</p>
                <p>This is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, and Node.js). It allows users to create, edit, and delete notes, providing a simple and efficient way to organize thoughts and ideas.</p>

                <ArrowLink href="https://github.com/enielsen0001/enielsen0001.github.io">See notes app <span className="sr-only"> on GitHub</span> <FontAwesomeIcon icon={faGithub} /></ArrowLink>
            </div>

            <div className={styles.proj}>
                <h2>D3.js Examples</h2>
                <p>Featured skills: D3.js</p>
                <p>This project demonstrates my proficiency in D3.js by transforming complex datasets into visually stunning and informative visualizations. From simple bar charts to intricate network graphs, these projects showcase my creative approach to data storytelling.</p></div>

                <ArrowLink href="https://codepen.io/collection/LYGOBd">See examples <span className="sr-only"> on Codepen</span> <FontAwesomeIcon icon={faCodepen} /></ArrowLink>
        </div>
    );
};

export default ProjectsPage;