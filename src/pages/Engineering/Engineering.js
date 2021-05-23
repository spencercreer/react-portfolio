import React, { Component } from 'react';
import { Jumbotron, Container, CardDeck, Card } from 'react-bootstrap';
import PortfolioNav from "../../components/PortfolioNav/PortfolioNav";
import Footer from "../../components/Footer/Footer";
import engCards from "../../eng-cards.json";


export default class Engineering extends Component {
  state = {
    engCards
  };
  render() {
    return (
      <div id="engineering">
        <PortfolioNav />
        <Jumbotron fluid className="bg-light mb-0">
          <Container>
            <h1 className="display-4">Mechanical Engineering</h1>
            <p className="lead">While at Brigham Young University, I studied the product development process. I enjoy designing, prototyping, and building new products. This is a portfolio of some of my favorite projects I participated in at BYU.</p>
            <CardDeck>
              <Card>
                <Card.Img variant="top" src={engCards[0].src} alt={engCards[0].alt} />
                <Card.Body className="p-0">
                  <a href={engCards[0].url} target="_blank"
                    className="btn btn-dark btn-block btn-lg">{engCards[0].title}</a>
                  <div className="p-3">
                    <Card.Text className="mb-1">{engCards[0].description}
                    </Card.Text>
                    <a className="text-primary link-text" href={engCards[0].github.link} target="_blank"><i className={engCards[0].github.icon}></i> {engCards[0].github.name}</a>
                  </div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={engCards[1].src} alt={engCards[1].alt} />
                <Card.Body className="p-0">
                  <a href={engCards[1].url} target="_blank"
                    className="btn btn-dark btn-block btn-lg">{engCards[1].title}</a>
                  <div className="p-3">
                    <Card.Text className="mb-1">{engCards[1].description}
                    </Card.Text>
                    <a className="text-primary link-text" href={engCards[1].github.link} target="_blank"><i className={engCards[1].github.icon}></i> {engCards[1].github.name}</a>
                  </div>
                </Card.Body>
              </Card>
            </CardDeck>

            <CardDeck>
              <Card>
                <Card.Img variant="top" src={engCards[2].src} alt={engCards[2].alt} />
                <Card.Body className="p-0">
                  <a href={engCards[2].url} target="_blank"
                    className="btn btn-dark btn-block btn-lg">{engCards[2].title}</a>
                  <div className="p-3">
                    <Card.Text className="mb-1">{engCards[2].description}
                    </Card.Text>
                    <a className="text-primary link-text" href={engCards[2].github.link} target="_blank"><i className={engCards[2].github.icon}></i> {engCards[2].github.name}</a>
                  </div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={engCards[3].src} alt={engCards[3].alt} />
                <Card.Body className="p-0">
                  <a href={engCards[3].url} target="_blank"
                    className="btn btn-dark btn-block btn-lg">{engCards[3].title}</a>
                  <div className="p-3">
                    <Card.Text className="mb-1">{engCards[3].description}
                    </Card.Text>
                    <a className="text-primary link-text" href={engCards[3].github.link} target="_blank"><i className={engCards[3].github.icon}></i> {engCards[3].github.name}</a>
                  </div>
                </Card.Body>
              </Card>
            </CardDeck>

          </Container>
        </Jumbotron>
        <Footer />
      </div>
    );
  }
}
