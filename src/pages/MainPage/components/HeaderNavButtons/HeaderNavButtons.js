import React, { PureComponent } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const HeaderNavButtonsStyles = styled.div`
  #intro {
    max-width: 100vw;
  }
  #second {
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
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
      font-size: 14px;
    }
  }
`;

const HeaderNavButtons = () => {
  return (
    <HeaderNavButtonsStyles>
      <Container id="intro">
        <Container id="second">
          <Row className="d-flex justify-content-between">
            <Col className="d-flex justify-content-center">
              <div id="circle">PO CO TO WSZYSTKO</div>
            </Col>
            <Col className="d-flex justify-content-center">
              <div id="circle">ZAMÓW SERWIS</div>
            </Col>
            <Col className="d-flex justify-content-center">
              <div id="circle">ZALOGUJ SIĘ</div>
            </Col>
          </Row>
        </Container>
      </Container>
    </HeaderNavButtonsStyles>
  );
};

export default HeaderNavButtons;
