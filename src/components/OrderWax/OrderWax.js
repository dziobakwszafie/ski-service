import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import waxing from "./images/waxing.jpg";

const OrderWaxStyles = styled.div`
  img {
    height: 400px;
  }
  .vars div {
    width: 33%;
  }
`;

const OrderWax = ({ details }) => {
  return (
    <OrderWaxStyles>
      <Container className="p-5 d-flex justify-content-center align-items-center">
        <Col>
          <Row className="d-flex justify-content-center">
            <h3>{details[1].name}</h3>
          </Row>
          <Row>
            <Col xs={8}>
              <Row>
                <Col xs={3}>
                  <div>PODSTAWOWE</div>
                </Col>
                <Col xs={8}>
                  <div>
                    ostrzenie pilnikami stalowymi o 2
                    gradacjach
                  </div>
                </Col>
                <Col xs={1}>30,-</Col>
              </Row>
              <Row>
                <Col xs={3}>
                  <div>RACE</div>
                </Col>
                <Col xs={8}>
                  <div>
                    ostrzenie pilnikami stalowymi o 2
                    gradacjach oraz polerowanie pilnikami
                    diamentowymi o 3 gradacjach
                  </div>
                </Col>
                <Col xs={1}>30,-</Col>
              </Row>
              <Row>
                <Col xs={3}>
                  <div>NIC</div>
                </Col>
                <Col xs={8}>
                  <div>bez ostrzenia</div>
                </Col>
                <Col xs={1}></Col>
              </Row>
              <Row className="d-flex justify-content-center">
                <Col xs={6}>
                  <p>NA JAKI RODZAJ ŚNIEGU</p>
                </Col>
                <Col xs={6} className=" d-flex vars">
                  <button>{details[1].snow1}</button>
                  <button>{details[1].snow2}</button>
                  <button>{details[1].snow3}</button>
                </Col>
              </Row>
            </Col>
            <Col>
              <img src={waxing} />
            </Col>
          </Row>
        </Col>
      </Container>
    </OrderWaxStyles>
  );
};

export default OrderWax;
