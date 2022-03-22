import React from "react";
import { Card, Badge } from "react-bootstrap";

import "./index.css";

const ImgCard = ({ url, title, date, copyright }) => {
  return (
    <Card className="img-card">
      <Card.Img variant="top" src={url} />
      <Card.ImgOverlay>
        <Badge className="float-left">{date}</Badge>
      </Card.ImgOverlay>
      <Card.Body className="d-flex justify-content-between text-start align-items-center">
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{copyright}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default ImgCard;
