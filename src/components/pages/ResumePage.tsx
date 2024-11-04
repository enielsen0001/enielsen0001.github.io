import React from 'react';
import styles from './page-styles.module.scss';

const ResumePage = () => {
    return (
        <div className={`container ${styles['page-content']}`}>
            <div className="d-flex justify-content-between align-items-start">
                <h1 className="no-print">Resume</h1>
                <button
                    className="no-print btn btn-dark"
                    onClick={() => {
                        window.print();
                        return false;
                    }}>Print</button>
            </div>

            <main>
                <header className="rez-header">
                    <h1>Erika Nielsen</h1>
                    <a href="mailto:enielsen0002@gmail.com">enielsen0002@gmail.com</a>
                    <a href="https://www.linkedin.com/in/enielsen0001">https://www.linkedin.com/in/enielsen0001</a>
                </header>

                <hr />

                <section className="rez-section rez-sum">
                    <h2>Summary</h2>
                    <p>Accomplished Front-End Developer with 8+ years of experience crafting innovative, user-centric web applications. Proficient in React, Redux, TypeScript, Next.js, and modern JavaScript frameworks. Committed to writing clean, efficient, and maintainable code, with a strong focus on accessibility. Seeking a challenging role to contribute to cutting-edge projects and further develop my technical expertise.</p>
                </section>

                <hr />

                <section className="rez-section rez-exp">
                    <h2>Experience</h2>
                    <div className="job">
                        <h3>Front-End Developer, CQL (Feb 2022 - Oct 2024)</h3>

                        <ul>
                            <li>Key developer of a cutting-edge React/Redux/Next.js Typescript web application, prioritizing user experience and business growth</li>
                            <li>Led accessibility initiatives for WCAG compliance, ensuring inclusivity for all users</li>
                            <li>Provided technical support for Demandware platform integration with custom react application</li>
                            <li>Worked to create unique and engaging online store experiences for both Shopify and SFCC by developing custom themes, discount apps, and SFRA storefronts</li>
                        </ul>

                    </div>
                    <div id="radancy" className="job">
                        <h3>UI Developer, Radancy (Jun 2016 - Feb 2022)</h3>

                        <ul>
                            <li>Collaborated with cross-functional teams to develop innovative career websites for global clients</li>
                            <li>Built solutions using HTML, CSS (Sass), JavaScript in a C# Razor environment</li>
                        </ul>

                    </div>
                    <div className="job">
                        <h3>Associate Technical Consultant, Perficient (Jul 2015 - Jun 2016)</h3>

                        <ul>
                            <li>Developed interactive website prototypes using HTML, CSS, JavaScript, and Angular frameworks for consumer testing</li>
                            <li>Successfully implemented and customized a WordPress theme and analytics for a blog</li>
                            <li>Set up and maintained a departmental relational database (Quick Base) for streamlined project tracking</li>
                        </ul>

                    </div>
                    <div className="job">
                        <h3>Web Developer and Tier 1 Tech Support, IgLou (Feb 2015 - Jul 2015)</h3>

                        <ul>
                            <li>Implemented custom WordPress websites tailored to specific client needs and industry standards</li>
                            <li>Provided technical and customer service support for web hosting, CPanel, DSL, and basic networking</li>
                        </ul>

                    </div>
                    <div className="job">
                        <h3>Technical Support Representative, Charter Communications (Jul 2013 - Jan 2014)</h3>
                        <ul>
                            <li>Demonstrated exceptional problem-solving skills and effective communication while providing phone-based customer support for internet and telephony issues</li>
                        </ul>
                    </div>

                    <div className="job">
                        <h3>Technical Support Representative, Charter Communications (Jul 2013 - Jan 2014)</h3>
                        <ul>
                            <li>Demonstrated exceptional problem-solving skills and effective communication while providing phone-based customer support for internet and telephony issues</li>
                        </ul>
                    </div>

                    <div className="job">
                        <h3>Multiple Roles, Whole Foods Market (Sept 2001 - Jul 2013)</h3>

                        <ul>
                            <li>As a Front-End Cashier Supervisor at Whole Foods Market, I supervised and mentored a team of cashiers, ensuring efficient operations and exceptional customer service. I managed daily cash flow and reconciled financial transactions. Additionally, I implemented new policies and procedures to improve store efficiency and customer satisfaction.</li>

                            <li>As a Produce Department Receiver, I received and inspected produce deliveries to ensure quality and freshness. I stocked produce displays, maintained department cleanliness, and assisted customers with product selection and recommendations.</li>

                            <li>Demonstrated strong communication and problem-solving skills and adhered to the company's quality standards and commitment to sustainability.</li>
                        </ul>
                    </div>
                </section>

                <hr />

                <section className="rez-section rez-edu">
                    <h2>Education</h2>
                    <div className="education">
                        <h3>Program in Back-End Development (C#/.NET)</h3>
                        <p>Code Louisville - Louisville, KY</p>
                        <p>July 2016 to December 2016</p>
                    </div>
                    <div className="education">
                        <h3>Program in Front-End Development (HTML, CSS, JavaScript)</h3>
                        <p>Code Louisville - Louisville, KY</p>
                        <p>July 2014 to December 2014</p>
                    </div>
                    <div className="education">
                        <h3>Bachelor of Science in Environmental Technology</h3>
                        <p>North Carolina State University - Raleigh, NC</p>
                        <p>August 2001 to December 2003</p>
                    </div>
                    <div className="education">
                        <h3>Associate's Degree in College Transfer (Science)</h3>
                        <p>Wake Technical Community College - Raleigh, NC</p>
                        <p>August 1999 to June 2001</p>
                    </div>
                </section>

                <hr />

                <section className="rez-section rez-skl">
                    <h2>Skills</h2>
                    <ul>
                        <li>CSS (10 years)</li><li>HTML5 (10 years)</li><li>JavaScript (10 years)</li>
                        <li>SCSS (10 years)</li>
                        <li>UI (10 years)</li>
                        <li>Git (8 years)</li>
                        <li>C# / Razor (6 years)</li>
                        <li>jQuery (6 years)</li>
                        <li>Adobe Photoshop (5 years)</li>
                        <li>Agile (5 years)</li>
                        <li>React (3 years)</li>
                        <li>Redux (3 years)</li><li>Jest (3 years)</li>
                        <li>Typescript (3 years)</li>
                        <li>Contentful (2 years)</li>
                        <li>HTML Email (2 years)</li>
                        <li>Zeplin (2 years)</li>
                        <li>Adobe Illustrator (1 year)</li><li>Enzyme (1 years)</li> <li>Figma (1 year)</li><li>NextJs (1 year)</li>
                        <li>Salesforce Commerce Cloud (1 year)</li>
                        <li>Shopify (1 year)</li>
                    </ul>
                </section>

                <hr />

                <section className="rez-section rez-awd">
                    <h2>Awards</h2>
                    <p>Awards given for sites worked on while at <a href="#radancy">Radancy</a></p>
                    <div className="rez-award">
                        <h3>Outstanding Website - Internet Advertising Competition Awards 2020</h3>
                        <p>UI Developer for Harman International career website</p>
                    </div>
                    <div className="rez-award">
                        <h3>Outstanding Website - Internet Advertising Competition Awards 2020</h3>
                        <p>UI Developer Eli Lilly career website</p>
                    </div>
                    <div className="rez-award">
                        <h3>Best Employment Website, Best Of Show Website - Internet Advertising Competition Awards 2020</h3>
                        <p>UI Developer for Sony Pictures Entertainment career website</p>
                    </div>
                    <div className="rez-award">
                        <h3>Outstanding Website - Internet Advertising Competition Awards 2019</h3>
                        <p>UI Developer for Hackensack Meridian Health career website</p>
                    </div>
                </section>
            </main>


        </div>
    );
};

export default ResumePage;