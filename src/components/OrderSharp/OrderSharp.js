import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import sharp from "./images/sharp.jpg";

const OrderSharpeningStyles = styled.div`
  img {
    height: 400px;
  }
  .vars div {
    width: 25%;
  }
`;

const WaxingIntro = ({ detailsSharp }) => {
  return (
    <OrderSharpeningStyles>
      <Container className="p-5 d-flex justify-content-center align-items-center">
        <Col>
          <Row className="d-flex justify-content-center">
            <h3>{detailsSharp[0].name}</h3>
          </Row>
          <Row>
            <Col xs={4}>
              <img src={sharp} />
            </Col>
            <Col xs={8}>
              <Row>
                <Col xs={3}>
                  <div>PODSTAWOWE</div>
                </Col>
                <Col xs={8}>
                  <div>ostrzenie pilnikami stalowymi o 2 gradacjach</div>
                </Col>
                <Col xs={1}>30,-</Col>
              </Row>
              <Row>
                <Col xs={3}>
                  <div>RACE</div>
                </Col>
                <Col xs={8}>
                  <div>
                    ostrzenie pilnikami stalowymi o 2 gradacjach oraz
                    polerowanie pilnikami diamentowymi o 3 gradacjach
                  </div>
                </Col>
                <Col xs={1}>30,-</Col>
              </Row>
              <Row>
                <Col xs={3}>
                  <div>PODSTAWOWE</div>
                </Col>
                <Col xs={8}>
                  <div>2-krotne smarowanie smarem hydrokarbonowym</div>
                </Col>
                <Col xs={1}>30,-</Col>
              </Row>
              <Row className="d-flex justify-content-center">
                <Col xs={2}>
                  <p>BOK</p>
                </Col>
                <Col xs={6} className=" d-flex vars">
                  <div>90</div>
                  <div>89</div>
                  <div>88</div>
                  <div>87</div>
                </Col>
              </Row>
              <Row className="d-flex justify-content-center">
                <Col xs={2}>
                  <p>DÓŁ</p>
                </Col>
                <Col xs={6} className=" d-flex vars">
                  <div>0</div>
                  <div>.5</div>
                  <div>.75</div>
                  <div>1</div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Container>
    </OrderSharpeningStyles>
  );
};

export default WaxingIntro;
