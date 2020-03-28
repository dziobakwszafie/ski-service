import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import waxing from "./images/waxing.jpg";

const OrderWaxingStyles = styled.div`
  #intro1 {
    background-color: #e4aee4;
  }
  img {
    height: 400px;
  }
`;

function OrderWaxing() {
  return (
    <OrderWaxingStyles>
      <Container
        id="intro1"
        className="p-5 d-flex justify-content-center align-items-center">
        <Col>
          <Row>
            <h3>SMAROWANIE</h3>
          </Row>
          <Row>
            <Col>
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
                <Col>
                  <div>PODSTAWOWE</div>
                </Col>
                <Col>
                  <div>2-krotne smarowanie smarem hydrokarbonowym</div>
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
            <Col>
              <img src={waxing} />
            </Col>
          </Row>
        </Col>
      </Container>
    </OrderWaxingStyles>
  );
}

export default OrderWaxing;
