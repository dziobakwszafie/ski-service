import React, { PureComponent } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  #intro {
    background: #3feee6;
    max-width: 100vw;
    height: 100vh;
  }
  h1 {
    font-family: "Permanent Marker", cursive;
    font-size: 40px;
    color: #a9a9a9;
  }
  p {
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    line-height: 30px;
  }
`;

class Waxing extends PureComponent {
  render() {
    return (
      <Styles>
        <Container
          id="intro"
          className="p-5 d-flex justify-content-center align-items-center"
        >
          <Col>
            <Row className="d-flex justify-content-center align-items-center">
              <Col sm={12} md={8}>
                <h1>PO CO W OGÓLE TEN SERWIS</h1>
              </Col>
            </Row>
            <Row className="d-flex justify-content-center">
              <Col sm={12} md={6} lg={4}>
                <Row className="p-3">
                  <p>
                    Co ile powinno się smarować narty? No ja smaruje co jazde. A
                    przynajmniej smarowałem w zeszłym roku jak miałem czas.
                    Generalnie po smarowaniu ślizg powinien być czarny ( no
                    chyba, że masz komórki Atomica albo inny model nart z
                    kolorowym ślizgiem, to wtedy nie xD ) po jeździe zacznie się
                    robić szary począwszy od krawędzi. Wynika to z tego, że
                    zwyczajnie się on tam wyciera. Także jak widzisz że robi ci
                    się sporo tego szarego to zgodnie ze sztuką wypadałoby oddać
                    nartę do smarowania.
                  </p>
                </Row>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <Row className="p-3">
                  <p>
                    Smarowanie to zabieg, który odczuć może każdy kto trochę
                    pojeździ. Faktycznie robi różnice gdy narta jest świeżo
                    zrobiona. Tylko błagam, pamietaj - smar na slizgu trzyma się
                    ze dwa, trzy dni, może ciutke dłużej. Potem zostają resztki.
                  </p>
                  <p>
                    Więc jak oddałeś narty do jakiegoś marketowego serwisu w
                    grudniu, to w lutym już raczej nie masz tego smaru na ślizgu
                    :P
                  </p>
                </Row>
              </Col>
            </Row>
          </Col>
        </Container>
      </Styles>
    );
  }
}

export default Waxing;
