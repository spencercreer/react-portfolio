import React, { Component } from 'react';
import { Jumbotron, Container, CardColumns } from 'react-bootstrap';
import PortfolioNav from "../../components/PortfolioNav/PortfolioNav";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";
import Footer from "../../components/Footer/Footer";
import devCards from "../../web-dev-cards.json"


export default class Webdev extends Component {
  state = {
    devCards
  };
  render() {
    return (
      <div id="web-development">
        <PortfolioNav />
        <Jumbotron fluid className="bg-light mb-0">
          <Container>
            <h1 className="display-4">Web Development</h1>
            <p className="lead">I am passionate about making tools that solve problems, improve efficiency, or make life more enjoyable. I have found that a powerful way to do this is through software and web development.</p>
            <p className="lead">This webpage contains links to several web applications that I have created. For more information on each application, and to view my full portfolio, checkout <a className="text-primary link-text" href="https://github.com/spencercreer" target="_blank" rel="noreferrer">my GitHub</a> account.</p>
            <CardColumns>
            {this.state.devCards.map(card => (
              <PortfolioCard
                key={card.id}
                title={card.title}
                src={card.src}
                alt={card.alt}
                description={card.description}
                url={card.url}
                name={card.github.name}
                link={card.github.link}
                icon ={card.github.icon}
              />
            ))}
            </CardColumns>
          </Container>
        </Jumbotron>
        <Footer />
      </div>
    );
  }
}