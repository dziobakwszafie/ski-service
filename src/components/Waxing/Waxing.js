import React, { PureComponent } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .container {
    background: #3feee6;
    max-width: 100vw;
    height: 100vh;
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
            <Row className="d-flex align-items-end">
              <h3>Smarowanie</h3>
            </Row>
            <Row className="d-flex align-items-end">
              <p>
                Co ile powinno się smarować narty? No ja smaruje co jazde. A
                przynajmniej smarowałem w zeszłym roku jak miałem czas.
                Generalnie po smarowaniu ślizg powinien być czarny ( no chyba ze
                masz komórki Atomica albo inny model nart z kolorowym ślizgiem,
                to wtedy nie xD ) po jeździe zacznie się robić szary począwszy
                od krawędzi. Wynika to z tego, że zwyczajnie się on tam wyciera.
                Także jak widzisz że robi ci się sporo tego szarego to zgodnie
                ze sztuką wypadałoby oddać nartę do smarowania.
              </p>

              <p>
                Smarowanie to też zabieg który odczuć może każdy kto trochę
                pojeździ. Faktycznie robi różnice gdy narta jest świeżo
                zrobiona. Tylko błagam, pamietaj - smar na slizgu trzyma się
                dzien/dwa, moze ciutke dłużej. Potem zostają resztki.
              </p>

              <p>
                Wiązania to już krótka piłka. Regulujemy siłę wypięcia oraz
                rozsuwamy wiązania z uwagi na długość buta. O ile długość buta
                jest raczej jasno określona, to do okreslania potrzebnej siły
                wypięcia polecam skorzystac z kalkulatora, do który znajdziej
                kawałek niżej. Okreslenie poprawnej siły wypięcia wiązania jest
                ważne, ponieważ jeżeli wiązanie wypnie Ci przy zbyt małej sile,
                to przeorasz paszczą śnieg. Z kolei przy ustawionej zbyt duzej
                sile, narta przy dzwonie może się nie wypiąć poprawnie co
                skutkuje często gipsem.
              </p>
            </Row>
          </Col>
        </Container>
      </Styles>
    );
  }
}

export default Variants;
