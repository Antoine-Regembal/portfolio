import React from "react";
import { Container, Row, Col } from "react-grid-system";

import "./Presentation.css";
import PresentationText from "./PresentationText";

const Presentation = ({ presentationContent, name }) => (
  <div id={presentationContent.sectionId} className="presentation">
    <Container className="presentation__container">
      <Row>
        <Col lg={6} md={12}>
          <PresentationText
            presentationContent={presentationContent}
            name={name}
          />
        </Col>
        <Col lg={6} md={12}>
          <img
            className="presentation__image"
            alt={name}
            src={require("../../Medias/me.jpg")}
          />
        </Col>
      </Row>
    </Container>
  </div>
);

export default Presentation;
