import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioNav from "../../components/PortfolioNav/PortfolioNav";
import Intro from "../../components/Intro/Intro";
import IntroCard from "../../components/IntroCard/IntroCard";
import Footer from "../../components/Footer/Footer";
import introCards from "../../intro-cards.json";
import "./style.css";

export default class Home extends Component {
  state = {
    introCards
  };

  sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm('service_zwxq2o3', 'template_ex8lh6v', e.target, 'user_FV4fCPfLfkyufi2GtjyrI')
      .then((result) => {
        console.log(result.text);
        alert('The eagle has landed! Your message was sent.');
      }, (error) => {
        console.log(error.text);
        alert('Failure to launch! There was an error sending your message.')
      });
  }

  render() {
    return (
      <div id="home">
        <PortfolioNav />
        <Container fluid className="bg-light mb-0">
          <Intro />
        </Container>
        <Container fluid>
          <Row>
            {this.state.introCards.map(card => (
              <Col md={3} className="px-0">
                <IntroCard
                  key={card.id}
                  title={card.title}
                  href={card.href}
                  src={card.src}
                  alt={card.alt}
                />
              </Col>
            ))}
          </Row>
        </Container>
        <div id="contact" className="container mt-4">
          <div className="row">
            <div>
              <h1 id="contact-title" className="display-4 contact-title px-4">Contact me.</h1>
              <p id="contact-text" className="lead mb-0 px-4">Connect with me through GitHub, or LinkedIn or send me a message at <a className="text-link" href="mailto:spencercreer@gmail.com" target="_blank" rel="noreferrer">spencercreer@gmail.com</a> or through the following form.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-4 offset-2">
              <p className="text-center mt-4">
                <a className="text-dark" href="https://github.com/spencercreer" target="_blank" rel="noreferrer"><i
                  className="fa fa-github link-git" style={{ fontSize: "72px" }}></i></a>
              </p>
            </div>
            <div className="col-4">
              <p className="text-center">
                <a className="text-dark" href="https://www.linkedin.com/in/spencer-creer-023246109/" target="_blank" rel="noreferrer"
                  style={{ fontSize: "72px" }}><i className="fa fa-linkedin-square link-in"></i></a>
              </p>
            </div>
          </div>
          <div className="row px-2">
            <form id="contact-form" className="col-md-12 py-2 px-0" onSubmit={this.sendEmail}>
              <input type="hidden" name="contact_number" />
              <div className="form-row mb-1">
                <div className="col">
                  <input type="text" className="form-control" placeholder="First name" name="from_name" required />
                </div>
                <div className="col">
                  <input type="text" className="form-control" placeholder="Last name" name="last-name" required />
                </div>
              </div>
              <div className="form-row mb-1">
                <div className="col">
                  <input type="text" className="form-control" placeholder="Email" name="email" required />
                </div>
              </div>
              <div className="form-row">
                <div className="col">
                  <textarea rows="3" className="form-control" placeholder="Message" name="message" required></textarea>
                </div>
              </div>
              <div className="form-row mx-1 float-right">
                <button type="submit" className="btn btn-dark btn-lg mt-1">Send</button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

