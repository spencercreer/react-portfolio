import React from 'react';
import { Card } from 'react-bootstrap';

export default function PortfolioCard(props) {
    return (
      <Card>
      <Card.Img variant="top" src={props.src} alt={props.alt} />
      <Card.Body className="p-0">
        <a href={props.url} target="_blank"
          className="btn btn-dark btn-block btn-lg">{props.title}</a>
        <div className="p-3">
          <Card.Text className="mb-1">{props.description}
          </Card.Text>
          <a className="text-primary link-text" href={props.link} target="_blank"><i className={props.icon}></i> {props.name}</a>
        </div>
      </Card.Body>
      </Card>
    )
}