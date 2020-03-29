import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const SummaryStyles = styled.div`
  #intro2 {
    background-color: #d4a4e4;
  }
  img {
    height: 400px;
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

function Summary() {
  return (
    <SummaryStyles>
      <Container
        id="intro2"
        className="p-5 d-flex justify-content-center align-items-center">
        <Col xs={4}>
          <div>model nart i długość</div>
          <div>uwagi</div>
        </Col>
        <Col xs={4}>
          <div id="circle">ZALOGUJ SIĘ</div>
        </Col>
        <Col xs={4}>
          <div>SUMA:</div>
          <div id="circle">60,-</div>
        </Col>
      </Container>
    </SummaryStyles>
  );
}

export default Summary;
