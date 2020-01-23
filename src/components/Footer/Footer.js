import React, { PureComponent } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .container {
    background: #3feee6;
    max-width: 100vw;
  }
  h1 {
    font-family: "Chonburi", cursive;
    font-size: 80px;
    color: white;
  }
  h3 {
    font-family: "Rozha One", serif;
    font-size: 60px;
    color: black;
  }
  #rowHeight {
    height: 100%;
  }
`;

class Footer extends PureComponent {
  render() {
    return (
      <Styles>
        <Container
          id="intro"
          className="d-flex justify-content-center align-items-center"
        >
          <Col>
            <Row className="d-flex align-items-end">
              <h3>Stopka</h3>
            </Row>
          </Col>
        </Container>
      </Styles>
    );
  }
}

export default Footer;
