import React, { PureComponent } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .container {
    height: 100vh;
    background: #a30000;
    max-width: 100vw;
  }
  h1 {
    font-family: "Chonburi", cursive;
    font-size: 120px;
    color: black;
    top: 100px;
    left: 100px;
  }
  h3 {
    font-family: "Rozha One", serif;
    font-size: 60px;
    color: black;
  }
`;

class Header extends PureComponent {
  render() {
    return (
      <Styles>
        <Container
          id="intro"
          className="d-flex justify-content-center align-items-center"
        >
          <Row>
            <Col xs={12} xl={4}>
              <h1>SPÓŁKA ZŁO</h1>
            </Col>
            <Col
              xs={12}
              xl={8}
              className="d-flex align-items-end justify-content-end"
            >
              <h3>Service Department</h3>
            </Col>
          </Row>
        </Container>
      </Styles>
    );
  }
}

export default Header;
