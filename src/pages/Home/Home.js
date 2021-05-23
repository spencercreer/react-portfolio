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
            <div className="col-md-9">
              <h1 className="display-4 contact-title">Contact me.</h1>
              <p className="lead mb-0">Connect with me through GitHub, or LinkedIn or send me a message at <a className="text-link" href="mailto:spencercreer@gmail.com" target="_blank">spencercreer@gmail.com</a> or through the following form.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-4 offset-2">
              <p className="text-center mt-4">
                <a className="text-dark" href="https://github.com/spencercreer" target="_blank"><i
                  className="fa fa-github link-git" style={{ fontSize: "72px" }}></i></a>
              </p>
            </div>
            <div className="col-4">
              <p className="text-center">
                <a className="text-dark" href="https://www.linkedin.com/in/spencer-creer-023246109/" target="_blank"
                  style={{ fontSize: "72px" }}><i className="fa fa-linkedin-square link-in"></i></a>
              </p>
            </div>
          </div>
          <div class="row px-2">
            <form id="contact-form" class="col-md-12 py-2 px-0" onSubmit={this.sendEmail}>
              <input type="hidden" name="contact_number" />
              <div class="form-row mb-1">
                <div class="col">
                  <input type="text" class="form-control" placeholder="First name" name="from_name" required />
                </div>
                <div class="col">
                  <input type="text" class="form-control" placeholder="Last name" name="last-name" required />
                </div>
              </div>
              <div class="form-row mb-1">
                <div class="col">
                  <input type="text" class="form-control" placeholder="Email" name="email" required />
                </div>
              </div>
              <div class="form-row">
                <div class="col">
                  <textarea rows="3" class="form-control" placeholder="Message" name="message" required></textarea>
                </div>
              </div>
              <div class="form-row mx-1 float-right">
                <button type="submit" class="btn btn-dark btn-lg mt-1">Send</button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

