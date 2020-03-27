import React from "react";
import { Container, Col } from "react-bootstrap";
import styled from "styled-components";

const OrderSharpeningStyles = styled.div`
  #intro {
    /* background: #3feee6; */
    max-width: 100vw;
  }
  h1 {
    font-family: "Permanent Marker", cursive;
    font-size: 40px;
    color: #ff3b3f;
  }
  p {
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    line-height: 30px;
  }
`;

function WaxingIntro() {
  return (
    <OrderSharpeningStyles>
      <Container
        id="intro"
        className="p-5 d-flex justify-content-center align-items-center">
        <Col>gdfv</Col>
      </Container>
    </OrderSharpeningStyles>
  );
}

export default WaxingIntro;
