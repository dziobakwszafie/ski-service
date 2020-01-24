import React, { PureComponent } from "react";
import { Container, Col } from "react-bootstrap";
import styled from "styled-components";
import Order from "./Order/Order";

const Styles = styled.div`
  .container {
    background: #0281db;
    max-width: 100vw;
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
            <h1>Zaloguj się</h1>
            <p>button logowania</p>
            {/* pokaż okienko z serwisem */}
            <Order />
          </Col>
        </Container>
      </Styles>
    );
  }
}

export default Variants;
