import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioNav from '../../components/PortfolioNav/PortfolioNav';
import Footer from "../../components/Footer/Footer";
import "./style.css";

export default function About() {
    return (
        <div id="about">
            <PortfolioNav />

            <Container fluid id="hero-bg" className="px-0">
                <div id="overlay">
                </div>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }} className="mt-5">
                        <div className="mx-5 mb-5">
                            <h1 className="display-4">About Me</h1>
                            <p className="lead">I was born in Castro Valley, California, to Brad and Michele Creer. I am the third of six children. At age seven, my family moved to Utah, where I grew up.</p>
                            <p className="lead">From 2009 to 2011, I performed service for the Church of Jesus Christ of Latter-Day Saints in southern Germany, Austria, and Switzerland.  I learned the German language and gained a love for German culture.</p>
                            <p className="lead">I attended Brigham Young University from 2012 to 2018 and graduated with a bachelor's degree in Mechanical Engineering. I also received a minor in German and a minor in Global Business and Literacy. I have recently graduated from the full-stack web development bootcamp at the University of Utah.
                            </p>
                            <p className="lead">I have spent the majority of my professional career in business and sales roles. From 2014 to 2018, I worked as a sales manager for New Star Communications, a DirecTv dealer. I was the 2014 rookie sales representative of the year and later led top-performing sales teams in Texas, Missouri, and Ohio. After graduating from BYU, I have combined my sales and engineering background in multiple technical sales roles. I currently work as a Sales Engineer for Moxtek, Inc, a manufacturer of advanced nano-optical and X-ray components.
                            </p>
                            <p className="lead">In December 2018, I married my best friend and wife Lyndsey in Gilbert, Arizona. Lyndsey graduated from BYU with a bachelor's of Arts in Philosophy and a minor in logic. She will be going to law school to become a county attorney. We enjoy cooking, exercising, and being outdoors together.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}
