import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const OrderWaxingStyles = styled.div``;

function OrderWaxing() {
  return (
    <OrderWaxingStyles>
      <Container
        id="intro"
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
              </Row>
              <Row>
                <Col>
                  <div>PODSTAWOWE</div>
                </Col>
                <Col>
                  <div>2-krotne smarowanie smarem hydrokarbonowym</div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div>PODSTAWOWE</div>
                </Col>
                <Col>
                  <div>2-krotne smarowanie smarem hydrokarbonowym</div>
                </Col>
              </Row>
            </Col>
            <Col></Col>
          </Row>
        </Col>
      </Container>
    </OrderWaxingStyles>
  );
}

export default OrderWaxing;
