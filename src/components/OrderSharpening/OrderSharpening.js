import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import sharp from "./images/sharp.jpg";

const OrderSharpeningStyles = styled.div`
  #intro2 {
    background-color: #e4aee4;
  }
  img {
    height: 400px;
  }
`;

function WaxingIntro() {
  return (
    <OrderSharpeningStyles>
      <Container
        id="intro2"
        className="p-5 d-flex justify-content-center align-items-center">
        <Col>
          <Row>
            <h3>OSTRZENIE</h3>
          </Row>
          <Row>
            <Col xs={4}>
              <img src={sharp} />
            </Col>
            <Col xs={8}>
              <Row>
                <Col>
                  <div>PODSTAWOWE</div>
                </Col>
                <Col>
                  <div>ostrzenie pilnikami stalowymi o 2 gradacjach</div>
                </Col>
                <Col>30,-</Col>
              </Row>
              <Row>
                <Col>
                  <div>RACE</div>
                </Col>
                <Col>
                  <div>
                    ostrzenie pilnikami stalowymi o 2 gradacjach oraz
                    polerowanie pilnikami diamentowymi o 3 gradacjach
                  </div>
                </Col>
                <Col>30,-</Col>
              </Row>
              <Row>
                <Col>
                  <div>PODSTAWOWE</div>
                </Col>
                <Col>
                  <div>2-krotne smarowanie smarem hydrokarbonowym</div>
                </Col>
                <Col>30,-</Col>
              </Row>
              <Row>
                <p>BOK</p>
                <div>90</div>
                <div>89</div>
                <div>88</div>
                <div>87</div>
              </Row>
              <Row>
                <p>DÓŁ</p>
                <div>0</div>
                <div>.5</div>
                <div>.75</div>
                <div>1</div>
              </Row>
            </Col>
          </Row>
        </Col>
      </Container>
    </OrderSharpeningStyles>
  );
}

export default WaxingIntro;
