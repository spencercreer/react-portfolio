import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';

export default function Intro() {
    return (
        <Container id="intro" fluid>
            <Row>
                <Col md={8} className="px-4">
                    <h1 id="intro-title" className="display-1 mt-5 mb-3">Hi, I'm Spencer</h1>
                    <p id="intro-text" className="lead pl-2">I am a full-stack web developer and mechanical engineer. I love writing code that displays data in a useful way, and enjoy building tools that make life more enjoyable. I am an avid musician, hiker, and adventurer.</p>
                </Col>
                <Col md={4}>
                    <img className="img-fluid float-right" src="assets/img/profile.png" alt="Spencer with his wife Lyndsey" />
                </Col>
            </Row>
        </Container>
    )
}
