import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import waxing from "./images/waxing.jpg";

const OrderWaxingStyles = styled.div`
  img {
    height: 400px;
  }
  .vars div {
    width: 33%;
  }
`;

function OrderWax(detailsWax) {
  return (
    <OrderWaxingStyles>
      <Container className="p-5 d-flex justify-content-center align-items-center">
        <Col>
          <Row className="d-flex justify-content-center">
            <h3>{detailsWax[1].name}</h3>
          </Row>
          <Row>
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
                <Col xs={6}>
                  <p>NA JAKI RODZAJ ŚNIEGU</p>
                </Col>
                <Col xs={6} className=" d-flex vars">
                  <div>mokry</div>
                  <div>normalny</div>
                  <div>zmrożony</div>
                </Col>
              </Row>
            </Col>
            <Col>
              <img src={waxing} />
            </Col>
          </Row>
        </Col>
      </Container>
    </OrderWaxingStyles>
  );
}

export default OrderWax;
