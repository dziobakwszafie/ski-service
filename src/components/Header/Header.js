import React, { PureComponent } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  #intro {
    height: 100vh;
    max-width: 100vw;
  }
  #first {
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
  #second {
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
  h1 {
    font-family: "Bangers", cursive;
    font-size: 120px;
    color: rgba(169, 169, 169, 25%);
  }
  #red-text {
    font-family: "Permanent Marker", cursive;
    font-size: 80px;
    color: #ff3b3f;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    white-space: nowrap;
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
    font-size: 24px;
  }
`;
//add media queries to grey and red text

class Header extends PureComponent {
  render() {
    return (
      <Styles>
        <Container id="intro">
          <Container id="first">
            <Col>
              <Row className="d-flex justify-content-center">
                <h1>NIEŚMIALI ROMANTYCY</h1>
              </Row>
              <Row className="d-flex justify-content-center">
                <h1>RACING TEAM</h1>
              </Row>
              <Row id="red-text">
                <p>SERVICE DEPARTMENT</p>
              </Row>
            </Col>
          </Container>
          <Container className="d-flex" id="second">
            <Col className="d-flex justify-content-center">
              <div id="circle">PO CO TO WSZYSTKO</div>
            </Col>
            <Col className="d-flex justify-content-center">
              <div id="circle">PO CO TO WSZYSTKO</div>
            </Col>
            <Col className="d-flex justify-content-center">
              <div id="circle">PO CO TO WSZYSTKO</div>
            </Col>
          </Container>
        </Container>
      </Styles>
    );
  }
}

export default Header;
