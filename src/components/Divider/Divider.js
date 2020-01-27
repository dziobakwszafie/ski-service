import React, { PureComponent } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import photo from "./images/IMG_20191127_172900.jpg";
const Styles = styled.div`
  #image {
    height: auto;
    width: 1000px;
    background: linear-gradient(to right, transparent, mistyrose);
  }
`;

class Divider extends PureComponent {
  render() {
    return (
      <Styles>
        <Container
          id="intro"
          className="p-5 d-flex justify-content-center align-items-center"
        >
          <img id="image" src={photo} />
        </Container>
      </Styles>
    );
  }
}

export default Divider;
