import React from 'react';
import styles from './page-styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ArrowLink from '../components/ArrowLink';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

const ProjectsPage = () => {
    return (
        <div className={`container ${styles['page-content']}`}>

            <h1 className="mb-4">Projects</h1>

            <p>Following an extended period of employment, I am currently seeking new professional challenges and am actively developing my portfolio.</p>

            <div className={styles.proj}>
                <h2>Portfolio website (this site)</h2>
                <p>Featured skills: HTML, SCSS, JavsScript, React, Typescript, Bootstrap</p>
                <p>This is a simple, clean and functional personal portfolio website built with React and hosted on GitHub Pages. It showcases my skills, experience, and projects in a user-friendly and visually appealing manner.</p>

                <ArrowLink href="https://github.com/enielsen0001/enielsen0001.github.io">See Portfolio site <span className="sr-only"> on GitHub</span> <FontAwesomeIcon icon={faGithub} /></ArrowLink>
            </div>
            <div className={styles.proj}>
                <h2>MERN Stack Notes App - <FontAwesomeIcon icon={faScrewdriverWrench} /> WIP</h2>
                <p>Featured skills: MongoDb, Mongoose, Express, Node, JSON Web Tokens (JWT), React</p>
                <p>The 'Hello world' of full stack JS development.</p>
                <p>This is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, and Node.js). It allows users to create, edit, and delete notes, providing a simple and efficient way to organize thoughts and ideas.</p></div>

            <div className={styles.proj}>
                <h2>D3js Examples - <FontAwesomeIcon icon={faScrewdriverWrench} /> WIP</h2>
                <p>Featured skills: React, D3js</p>
                <p>This project is a collection of interactive data visualizations created using D3.js, a powerful JavaScript library for manipulating documents based on data. It demonstrates the versatility of D3.js in creating a wide range of visualizations, from simple charts to complex interactive dashboards.</p></div>
        </div>
    );
};

export default ProjectsPage;