import React, { PureComponent } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import bgPhoto from "./images/20190330_122051.jpg";

const Styles = styled.div`
  .container {
    height: 100vh;
    max-width: 100vw;
    background-image: url(${bgPhoto});
    background-position: center;
    background-size: cover;
  }
  #intro-text {
    background: hsla(0, 0%, 20%, 0.7);
    color: #e2dede;
  }
  h1 {
    font-family: "Chonburi", cursive;
    font-size: 60px;
    color: #e2dede;
  }
  p {
    font-size: 1.2em;
  }
`;

class Intro extends PureComponent {
  render() {
    return (
      <Styles>
        <Container
          id="intro"
          className="p-0 d-flex justify-content-center align-items-center"
        >
          <Container
            id="intro-text"
            className="d-flex justify-content-center align-items-center"
          >
            <Col>
              <Row className="d-flex justify-content-center align-items-center">
                <Col sm={12} md={8}>
                  <h1>Po co w ogóle serwisować narty?</h1>
                </Col>
              </Row>
              <Row className="d-flex align-items-start justify-content-center">
                <Col sm={12} md={6} lg={4}>
                  <Row className="p-3">
                    <p>
                      Bo podczas jazdy tępią się krawędzie. A ślizgi się psują i
                      podczas jazdy i podczas leżenia w piwnicy.
                    </p>
                  </Row>
                  <Row className="p-3">
                    <p>
                      A tak na serio to od krawędzi zależy nie tylko to jak
                      narta trzyma podczas skrętu (bo to chyba wiadomo
                      powszechnie) ale też w jaki sposób będzie ona rozpoczynała
                      skręt, wychodziła z niego oraz czy podczas jazdy na wprost
                      nie będzie zbyt nerwowa.
                    </p>
                  </Row>
                </Col>
                <Col sm={12} md={6} lg={4}>
                  <Row className="p-3">
                    <p>
                      Slizg jest z kolei elementem o który powinniśmy dbać cały
                      rok, ale bądźmy szczerzy, ja wiem że jak ktoś odda chociaż
                      raz w roku narty do Decathlonu na serwis, to już jest
                      sukces. Co się dzieje gdy narta nie jest nasmarowana?
                      Slizg się utlenia, co uwidacznia się poprzez powstawanie
                      szarego nalotu, zmniejsza się jego hydrofobowość i
                      zwiększa szorstkość. Wpływa to nie tylko na to, że
                      pojedziemy wolnej ale też moze być Ci trudniej zainicjować
                      sam skręt albo hamowanie.
                    </p>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Container>
        </Container>
      </Styles>
    );
  }
}

export default Intro;
