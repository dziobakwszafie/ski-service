import React, { PureComponent } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const SharpeningIntroStyles = styled.div`
  #intro {
    /* background: #55bcc9; */
    max-width: 100vw;
  }
  h1 {
    font-family: "Permanent Marker", cursive;
    font-size: 40px;
    color: #ff3b3f;
  }
  p {
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    line-height: 30px;
  }
`;

class SharpeningIntro extends PureComponent {
  render() {
    return (
      <SharpeningIntroStyles>
        <Container
          id="intro"
          className="p-5 d-flex justify-content-center align-items-center"
        >
          <Col>
            <Row className="d-flex justify-content-center align-items-center">
              <Col className="d-flex justify-content-center">
                <h1>OSTRZONKO BEJBEEE</h1>
              </Col>
            </Row>
            <Row className="d-flex justify-content-center">
              <Col sm={12} md={6} lg={4}>
                <Row className="p-3">
                  <p>
                    Krawędzie ostrzone są zarówno od spodu
                    jak i z boku. Trzeba jednak wspomnieć,
                    że to nie nóż w kuchni, który ostrzymy
                    na oko, więc jak ktoś chce zrobić od
                    ręki pilnikiem warsztatowym to nie
                    polecam.
                  </p>
                </Row>
                <Row className="p-3">
                  <p>
                    Ostrzymy je pod odpowiednim kątem. To
                    pod jakim kątem krawędź zostanie
                    zaostrzona wpływa na naszą jazdę. Znaczy
                    no. Jak umiesz dobrze jeździsz to
                    poczujesz różnice przy zmianie, jak
                    jesteś typowym amatorem to może być ci
                    na przykład ciężej skręcić.
                  </p>
                </Row>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <Row className="p-3">
                  <p>
                    Dla amatora polecanymi kątami to: - z
                    boku - 88 lub 89 stopni - od spodu
                    (podniesienie) - 0,5 lub 0,7 stopnia Ja
                    w nartach na niedzielne jazdy mam 88/0,5
                    i to jest ok do takiego w miare snucia
                    się po stoku. 89/0,7 będzie bardziej
                    stabilne na prostych i troche gorzej
                    trzymała w skręcie. A z kolei 87/0,5 to
                    już raczej do jazdy na tyczkach.
                  </p>
                </Row>
              </Col>
            </Row>
          </Col>
        </Container>
      </SharpeningIntroStyles>
    );
  }
}

export default SharpeningIntro;
