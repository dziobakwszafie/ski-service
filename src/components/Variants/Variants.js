import React, { PureComponent } from "react";
import { Container, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import Order from "./Order/Order";

const Styles = styled.div`
  .container {
    max-width: 100vw;
    min-height: 600px;
  }
  h1 {
    font-family: "Permanent Marker", cursive;
    font-size: 40px;
    color: #a9a9a9;
  }
`;

class Variants extends PureComponent {
  render() {
    return (
      <Styles>
        <Container
          id="intro"
          className="d-flex justify-content-center align-items-center"
        >
          <Col>
            <Row className="d-flex justify-content-center align-items-center">
              <Col className="d-flex justify-content-center">
                <h1>ZAMÓW SERWIS</h1>
              </Col>
            </Row>

            <Order />
          </Col>
        </Container>
      </Styles>
    );
  }
}

export default Variants;
