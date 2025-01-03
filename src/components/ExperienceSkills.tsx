import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import ArrowLink from "./global/ArrowLink";
import Skills from "./Skills";

const ExperienceSkills = () => {
    return (
        <section id="skills-exp" className="skills-exp container">
            <div className="d-md-flex skills-intro-wrap">
            <h2>Skills & <br />Experience</h2>

<div className="skills-exp__intro">
    <p>I'm a front-end developer passionate about building interactive and engaging web experiences. I thrive on translating designs into functional, user-friendly interfaces and find great satisfaction in helping individuals and brands establish a strong online presence.</p>
    <ArrowLink href="/about" isRouterLink={true}>Learn more about me</ArrowLink>
</div>


            </div>
            <div className="row">
                <div className="col-12 col-md-5 col-xl-4 skills-wrap">
                <h3>Skills</h3>
                    <Skills />
                </div>

                <div className="col-12 col-md-1 col-xl-2 skills-exp__divider">
                    <span aria-hidden="true"></span>
                </div>

                <div className="col-12 col-md-6 col-xl-6 exp-wrap">
                    <h3>Exerience</h3>
                    <h4><span>Front-End Developer</span> <span>2/22 - 10/24</span></h4>
                    <p>At CQL, a digital e-commerce agency, I developed and maintained e-commerce solutions for a variety of clients. My work encompassed custom React applications, bespoke Shopify theme development, Salesforce Commerce Cloud implementations using the Storefront Reference Architecture (SFRA), and Demandware maintenance integrated with React frontends. This experience solidified my passion for React development and appreciation for the Shopify platform's capabilities. I'm driven by empowering clients with control over their brand and product experiences.</p>

                    <h4><span>UI Developer</span> <span>2/22 - 10/24</span></h4>
                    <p>At Radancy (formerly TMP), I built a large portfolio of career websites and email templates using a custom CMS, ensuring alignment with client branding and delivering exceptional digital experiences for job seekers. This role provided invaluable experience in creating accessible digital experiences, deepening my commitment to inclusive design. I transformed dozens of creative designs into engaging and accessible online platforms, a process I thoroughly enjoyed.</p>

                    <h4><span>Technical Consultant</span> <span>2/22 - 10/24</span></h4>
                    <p>As a Technical Consultant at Perficient, I contributed to the development of digital prototypes for rapid user testing and iteration. Working in a highly agile environment, I built microsites to model potential enhancements to the enterprise website. Additionally, I customized WordPress themes and implemented analytics solutions.</p>

                    <h4><span>Wordpress Developer</span> <span>2/22 - 10/24</span></h4>
                    <p>At IgLou, I applied my developing front-end skills to installing and customizing WordPress themes. The team provided exceptional support to both customers and colleagues, fostering a learning environment that significantly broadened my understanding of the internet.
                    </p>

                    <a className="rez-link" href="../assets/base-resume-2024_v2.pdf" target="_blank" rel="noopener noreferrer">View resume <span className="visually-hidden">PDF</span> <FontAwesomeIcon icon={faFilePdf} /></a>

                </div>
            </div>
        </section>
    );
}

export default ExperienceSkills;