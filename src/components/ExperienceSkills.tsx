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
    <p>I'm a front-end developer passionate about creating awesome web experiences. I enjoy bringing designs to life and building user-friendly interfaces that help individuals and brands make a strong impact online.</p>
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
                    <p> Working at CQL, a digital e-commerce agency, gave me the chance to work on a wide range of projects for different clients. I built custom React applications, developed unique Shopify themes, implemented Salesforce Commerce Cloud (SFRA) solutions, and maintained Demandware platforms with React front-ends. This experience really cemented my passion for React and showed me the potential of Shopify. I'm driven to help clients own their brand and product experiences online.</p>

                    <h4><span>UI Developer</span> <span>6/16 - 2/22</span></h4>
                    <p>At Radancy (formerly TMP), I built tons of career websites and email templates using their custom CMS. It was all about making sure everything matched the client's branding and gave job seekers a great experience. This role taught me so much about creating accessible digital experiences, which is something I'm really passionate about. I loved taking creative designs and turning them into engaging and accessible online platforms.</p>

                    <h4><span>Technical Consultant</span> <span>7/15 - 6/16</span></h4>
                    <p>As a Technical Consultant at Perficient, I helped build digital prototypes for fast user testing and iteration. I worked in a super agile environment, building microsites to test out potential improvements to the main website. I also got to customize WordPress themes and implement analytics solutions.</p>

                    <h4><span>Wordpress Developer</span> <span>2/15 - 7/15</span></h4>
                    <p>At IgLou, I got to use my growing front-end skills to install and customize WordPress themes. The team there was amazing—super supportive to both customers and each other—and I learned a ton about the internet.
                    </p>

                    <a className="rez-link" href="../assets/WebsiteResume.pdf" target="_blank" rel="noopener noreferrer">View resume <span className="visually-hidden">PDF</span> <FontAwesomeIcon icon={faFilePdf} /></a>

                </div>
            </div>
        </section>
    );
}

export default ExperienceSkills;