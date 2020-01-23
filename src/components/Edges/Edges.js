import React, { PureComponent } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .container {
    background: #55bcc9;
    max-width: 100vw;
    height: 100vh;
  }
`;

class Edges extends PureComponent {
  render() {
    return (
      <Styles>
        <Container
          id="intro"
          className="d-flex justify-content-center align-items-center"
        >
          <Col>
            <Row className="d-flex align-items-end">
              <h3>Krawędzie</h3>
            </Row>
            <Row className="d-flex align-items-end">
              <p>
                Krawędzie ostrzone są zarówno od spodu jak i z boku. Trzeba
                jednak wspomnieć że to nie nóż w kuchni, który ostrzymy na oko,
                więc jak ktoś chce zrobić od ręki pilnikiem warsztatowym to nie
                polecam. Ostrzymy je pod odpowiednim kątem. To pod jakim kątem
                krawędź zostanie zaostrzona wpływa na naszą jazdę. Znaczy no.
                Jak umiesz dobrze jeździsz to poczujesz różnice przy zmianie,
                jak jesteś typowym amatorem to pewnie nie odczujesz różnicy w
                sposób świadomy ale moze być ci np. ciężej skręcić.
              </p>

              <ul>
                <li>89 lub 88 stopni dla powierzchni bocznej</li>
                <li>
                  0,7 lub 0,5 stopnia dla powierzchni od strony ślizgu ( tzw.
                  podwieszenie){" "}
                </li>
              </ul>

              <p>
                Ja w nartach na niedzielne jazdy mam 88/0,5 i to jest ok do
                takiego w miare snucia się po stoku. 89/0,7 będzie bardziej
                stabilne na prostych i troche gorzej trzymała w skręcie. A z
                kolei 87/0,5 to już raczej do jazdy na tyczkach.
              </p>
            </Row>
          </Col>
        </Container>
      </Styles>
    );
  }
}

export default Edges;
