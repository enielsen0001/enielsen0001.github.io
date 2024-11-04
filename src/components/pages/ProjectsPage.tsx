import React from 'react';
import styles from './page-styles.module.scss';

const ProjectsPage = () => {
    return (
        <div className={`container ${styles['page-content']}`}>

            <h1 className="mb-4">Projects</h1>

            <p>Following an extended period of employment, I am currently seeking new professional challenges and am actively developing my portfolio.</p>

            <div className="proj">
                <h2>This website</h2>
                <p>Featured skills: HTML, SCSS, JavsScript, React, Typescript, Bootstrap</p>
                <p>This is a simple, clean and functional personal portfolio website built with React and hosted on GitHub Pages. It showcases my skills, experience, and projects in a user-friendly and visually appealing manner.</p>
            </div>
            <div className="proj">
                <h2>MERN Stack Notes App - WIP</h2>
                <p>Featured skills: MongoDb, Mongoose, Express, Node, JSON Web Tokens (JWT), React</p>
                <p>This is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, and Node.js). It allows users to create, edit, and delete notes, providing a simple and efficient way to organize thoughts and ideas.</p></div>

            <div className="proj">
                <h2>D3js Examples - WIP</h2>
                <p>Featured skills: React, D3js</p>
                <p>This project is a collection of interactive data visualizations created using D3.js, a powerful JavaScript library for manipulating documents based on data. It demonstrates the versatility of D3.js in creating a wide range of visualizations, from simple charts to complex interactive dashboards.</p></div>
        </div>
    );
};

export default ProjectsPage;