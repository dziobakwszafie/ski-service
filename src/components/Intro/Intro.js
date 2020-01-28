import React, { PureComponent } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  #intro {
    max-width: 100vw;
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
  #circle {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: #ff3b3f;
    font-family: "Bangers", cursive;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    @media (max-width: 680px) {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: #ff3b3f;
      font-family: "Bangers", cursive;
      color: black;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
    }
  }
`;

class Intro extends PureComponent {
  render() {
    return (
      <Styles>
        <Container
          id="intro"
          className="p-5 d-flex justify-content-center align-items-center"
        >
          <Col>
            <Row className="d-flex justify-content-center align-items-center">
              <Col className="d-flex justify-content-center">
                <h1>PO CO W OGÓLE TEN SERWIS</h1>
              </Col>
            </Row>
            <Row className="d-flex justify-content-center">
              <Col sm={12} md={6} lg={4}>
                <Row className="p-3">
                  <p>
                    Bo podczas jazdy tępią się krawędzie. A ślizgi się psują i
                    podczas jazdy i podczas leżenia w piwnicy.
                  </p>
                </Row>
                <Row className="p-3">
                  <p>
                    A tak na serio to od krawędzi zależy nie tylko to jak narta
                    trzyma podczas skrętu (bo to chyba wiadomo powszechnie) ale
                    też w jaki sposób będzie ona rozpoczynała skręt, wychodziła
                    z niego oraz czy podczas jazdy na wprost nie będzie zbyt
                    nerwowa.
                  </p>
                </Row>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <Row className="p-3">
                  <p>
                    Slizg jest z kolei elementem o który powinniśmy dbać cały
                    rok, ale bądźmy szczerzy, ja wiem że jak ktoś odda chociaż
                    raz w roku narty do Decathlonu na serwis, to już jest
                    sukces. Co się dzieje gdy narta nie jest nasmarowana? Slizg
                    się utlenia, co uwidacznia się poprzez powstawanie szarego
                    nalotu, zmniejsza się jego hydrofobowość i zwiększa
                    szorstkość. Wpływa to nie tylko na to, że pojedziemy wolnej
                    ale też moze być Ci trudniej zainicjować sam skręt albo
                    hamowanie.
                  </p>
                </Row>
              </Col>
            </Row>
            <Row className="d-flex">
              <Col className="d-flex justify-content-center">
                <div id="circle">SMAROWANIE</div>
              </Col>
              <Col className="d-flex justify-content-center">
                <div id="circle">OSTRZENIE</div>
              </Col>
            </Row>
          </Col>
        </Container>
      </Styles>
    );
  }
}

export default Intro;
