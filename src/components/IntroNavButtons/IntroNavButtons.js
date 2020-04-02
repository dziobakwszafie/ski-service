import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const IntroNavButtonsStyles = styled.div`
  #intro {
    max-width: 100vw;
  }
  #circle {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: #ff3b3f;
    font-family: "Bangers", cursive;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    @media (max-width: 680px) {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: #ff3b3f;
      font-family: "Bangers", cursive;
      color: black;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
    }
  }
`;

const IntroNavButtons = () => {
  return (
    <IntroNavButtonsStyles>
      <Container
        id="intro"
        className="p-5 d-flex justify-content-center align-items-center"
      >
        <Col>
          <Row className="d-flex">
            <Col className="d-flex justify-content-center">
              <div id="circle">SMAROWANIE</div>
            </Col>
            <Col className="d-flex justify-content-center">
              <div id="circle">OSTRZENIE</div>
            </Col>
          </Row>
        </Col>
      </Container>
    </IntroNavButtonsStyles>
  );
};

export default IntroNavButtons;
