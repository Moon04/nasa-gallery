import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const MainContent = ({ children }) => (
  <Container fluid>
    <Row>
      <Col>{children}</Col>
    </Row>
  </Container>
);
