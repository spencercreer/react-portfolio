import React from 'react';
import PortfolioNav from '../../components/PortfolioNav/PortfolioNav';
import { Jumbotron, Container } from 'react-bootstrap';
import Footer from "../../components/Footer/Footer";
import "./style.css";

export default function Resume() {
    return (
        <div id="resume">
            <PortfolioNav />
            <Jumbotron fluid className="bg-light mb-0">
                <Container>
                    <div className="row">
                        <div className="col-md-9">
                            <h1 className="display-4">Resume</h1>
                            <a className="mb-0" href="mailto:spencercreer@gmail.com" target="_blank" rel="noreferrer"> spencercreer@gmail.com</a>
                            <p className="mb-0">Linked In: <a href="https://www.linkedin.com/in/spencer-creer-023246109/" target="_blank" rel="noreferrer">Spencer Creer</a></p>
                            <p className="mb-0">GitHub: <a href="https://github.com/spencercreer/" target="_blank" rel="noreferrer">spencercreer</a></p>
                            <p className="mb-3"><a className="mb-5" href="./assets/Resume.pdf" target="_blank" rel="noreferrer">PDF Download</a></p>
                        </div>
                        <img id="profile-picture" className="rounded-circle col-md-3 mb-2 p-0 contact-image d-none d-md-block" src="./assets/img/headshot.jpg" alt="Spencer Creer headshot." />
                    </div>
                        <h2 className="resume-heading">Overview</h2>
                        <p>Full-stack software developer and mechanical engineer experienced in creating MERN applications that display data in a useful and efficient way. Lead developer on multiple agile software teams including FR8Star and Currency Pay. Experienced with server and database technologies including Node.js, Express, GraphQL, MySQL, and MongoDB. Top performing sales manager with excellent communication and team working skills.</p>
                        <h2 className="resume-heading">Professional Experience</h2>
                        <div className="row">
                            <i className="col-md-6 mb-0">Sandhills Global, Scottsdale, AZ</i>
                            <i className="col-md-6 mb-0 align-left-sm align-right-lg">November 2021 to current</i>
                        </div>
                        <p className="mb-0"><strong>Software Developer</strong></p>
                        <ul>
                            <li>Migrate the Currency API from DocuSign legacy authentication to JWT OAuth2.0</li>
                            <li>Redesign the FR8Star user profile page using JavaScript, React, MobX, and PostgreSQL</li>
                            <li>Develop WinApp and MVC applications using C# and .NET framework</li>
                        </ul>
                        <div className="row">
                            <i className="col-md-6 mb-0">Trilogy Education Services, Tempe, AZ</i>
                            <i className="col-md-6 mb-0 align-left-sm align-right-lg">November 2021 to current</i>
                        </div>
                        <p className="mb-0"><strong>Senior Full-Stack Development Tutor</strong></p>
                        <ul>
                            <li>Tutor students in programming technologies JavaScript, Node.js, Express, SQL, and React</li>
                            <li>Conduct over 400 hours of tutor sessions debugging code and teaching best coding practices</li>
                        </ul>
                        <div className="row">
                            <i className="col-md-6 mb-0">Moxtek Inc., Orem, UT</i>
                            <i className="col-md-6 mb-0 align-left-sm align-right-lg">July 2019 to November 2021</i>
                        </div>
                        <p className="mb-0"><strong>Application Engineer</strong></p>
                        <ul>
                            <li>Manage the European sales of tube and detector products for the x-ray spectrometry division</li>
                            <li>Maintain company website and improve its search engine optimization (SEO) using WordPress</li>
                            <li>Oversee the return material authorizations and communicate with existing customers</li>
                            <li>Quote new opportunities and respond to customer inquiries</li>
                            <li>Wrote an Excel VBA Macro to efficiently track consignment inventory cutting time by two-thirds</li>
                        </ul>
                        <div className="row">
                            <i className="col-md-6 mb-0">Advanced Composites Inc., West Valley, Utah</i>
                            <i className="col-md-6 mb-0 align-left-sm align-right-lg">January 2019 to July 2019</i>
                        </div>
                        <p className="mb-0"><strong>Technical Sales Specialist</strong></p>
                        <ul>
                            <li>Managed sales of composite products in the aerospace, defense, and medical industries</li>
                            <li>Generated new buiness opportunities through customer relations, trade shows, and other sales activities</li>
                            <li>Developed a more efficient shipping and packaging solution cutting cost by approximately $100,000 yearly</li>
                            <li>Worked with engineers to more accurately attach components within tight tolerances</li>
                        </ul>
                        <div className="row">
                            <i className="col-md-8 mb-0">New Star Communications Inc., American Fork, UT</i>
                            <i className="col-md-4 mb-0 align-left-sm align-right-lg">May 2014 to January 2019</i>
                        </div>
                        <p className="mb-0"><strong>Sales Manager</strong></p>
                        <ul>
                            <li>Managed the Cleveland, Ohio office of twenty-seven sales representatives responsible for 1,535 new account acctivations equalling 1.2 million dollars of revenue growth in 2017</li>
                            <li>Responsible for 1,152 personal accounts over four years</li>
                            <li>Top first-year sales representative with a total of 232 personal accounts in 2014</li>
                            <li>Amongst the top five sales represenatives in production and quality four years consecutively</li>
                        </ul>
                        <h2 className="resume-heading">Education</h2>
                        <div className="row">
                            <i className="col-md-6 mb-0">University of Utah</i>
                            <i className="col-md-6 mb-0 align-left-sm align-right-lg">November 2020 to May 2021</i>
                        </div>
                        <p><strong>Full-Stack Web Development Certificate</strong></p>
                        <div className="row">
                            <i className="col-md-6 mb-0">Brigham Young University</i>
                            <i className="col-md-6 mb-0 align-left-sm align-right-lg">January 2012 to December 2018</i>
                        </div>
                        <p className="mb-0"><strong>Mechanical Engineering Bachelors of Science</strong></p>
                        <p>Global Business and Literacy Minor & German Minor</p>
                        <h2 className="resume-heading">Skills and Accomplishments</h2>
                        <ul>
                            <li>Proficient in front-end web development technologies including HTML5, CSS, JavaScript, jQuery, and Bootstrap</li>
                            <li>Proficient in back-end server development technologies including Node.js, Express.js, MySQL, React, and Python</li>
                            <li>Experience with engineering software including NX, Solidworks, C++, Matlab, ANSYS, and LabView</li>
                            <li>Participant on the L3 Technologies Capstone team at Brigham Young University</li>
                            <li>Winner of the Fall 2016 Brigham Young University mechatronics robotics competition</li>
                            <li>Skilled in the processing of composite materials including layup, resin infusion, and filament winding</li>
                            <li>Passed the NCEES Fundamentals of Engineering (FE) exam</li>
                            <li>Familiar with MIL, ITAR, EAR, and AS9100 standards</li>
                            <li>Volunteer service missionary from November 2009 to November 2011 for the Church of Jesus Christ of Latter-day Saints in Munich, Germany</li>
                            <li>Proficient in German language, reading, writing, and speaking</li>
                        </ul>
                </Container>
            </Jumbotron>
            <Footer />
        </div>
    )
}
