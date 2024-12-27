import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ExperienceSkills = () => {
    return (
        <section className="skills-exp container">
            <div className="row">
                <div className="col-12 col-md-5 col-xl-4 skills-wrap">
                    <h2>Skills & <br/>Experience</h2>
                    <p className="skills-exp__intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed mauris a felis maximus accumsan vitae at nulla. Donec nulla urna, tincidunt feugiat elit ut, luctus sollicitudin justo. Praesent sagittis mi vel dui sollicitudin ultrices. Nunc consequat diam erat, et aliquam mi consequat et. </p>
                    <h3>Skills</h3>
                    <ul className="skill-list">
                        <li className="skill-type skill-type--1">HTML</li>
                        <li className="skill-type skill-type--1">CSS</li>
                        <li className="skill-type skill-type--1">JavaScript</li>
                        <li className="skill-type skill-type--1">TypeScript</li>

                        <li className="skill-type skill-type--2">React</li>
                        <li className="skill-type skill-type--2">Redux</li>

                        <li className="skill-type skill-type--3">Figma</li>

                        <li className="skill-type skill-type--4">foo</li>

                        <li className="skill-type skill-type--5">foo</li>

                    </ul>
                </div>

                <div className="col-12 col-md-1 col-xl-2 skills-exp__divider">
                    <span></span>
                </div>

                <div className="col-12 col-md-6 col-xl-6 exp-wrap">
                    <h3>Exerience</h3>
                    <h4><span>Front-end Developer</span> <span>2/22 - 10/24</span></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed mauris a felis maximus accumsan vitae at nulla. Donec nulla urna, tincidunt feugiat elit ut, luctus sollicitudin justo. Praesent sagittis mi vel dui sollicitudin ultrices. Nunc consequat diam erat, et aliquam mi consequat et. </p>

                    <h4><span>UI Developer</span> <span>2/22 - 10/24</span></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed mauris a felis maximus accumsan vitae at nulla. Donec nulla urna, tincidunt feugiat elit ut, luctus sollicitudin justo. Praesent sagittis mi vel dui sollicitudin ultrices. Nunc consequat diam erat, et aliquam mi consequat et. </p>

                    <h4><span>Technical Consultant</span> <span>2/22 - 10/24</span></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed mauris a felis maximus accumsan vitae at nulla. Donec nulla urna, tincidunt feugiat elit ut, luctus sollicitudin justo. Praesent sagittis mi vel dui sollicitudin ultrices. Nunc consequat diam erat, et aliquam mi consequat et. </p>

                    <h4><span>Wordpress Developer</span> <span>2/22 - 10/24</span></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed mauris a felis maximus accumsan vitae at nulla. Donec nulla urna, tincidunt feugiat elit ut, luctus sollicitudin justo. Praesent sagittis mi vel dui sollicitudin ultrices. Nunc consequat diam erat, et aliquam mi consequat et. </p>

                    <div className="d-flex justify-content-end">
                        <a className="rez-link" href="../assets/base_resume_2024_v2.pdf" target="_blank" rel="noopener noreferrer">View resume <span className="visually-hidden">PDF</span> <FontAwesomeIcon icon={faFilePdf} /></a>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ExperienceSkills;