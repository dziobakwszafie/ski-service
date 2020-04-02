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

class Base extends PureComponent {
  render() {
    return (
      <Styles>
        <Container
          id="intro"
          className="d-flex justify-content-center align-items-center"
        >
          <Col>
            <Row className="d-flex align-items-end">
              <h3>Struktura</h3>
            </Row>
            <Row className="d-flex align-items-end">
              <p>
                https://www.racewax.com/base-structure-theory/ Struktura ślizgu.
                To ten wzorek jaki masz na ślizgu, takie małe kreseczki ułożone
                w większe kreseczki, zazwyczaj ukośne. Struktur jest kilka
                rodzajów, jak mi się kiedyś zachce to zrobie dalszą część
                poradnika o tym. Na razie starczy info, że fajnie by było zeby
                owa struktura była. Potrafi ona zmienić to jak narta ślizga się
                w różnych warunkach ale to raczej zaden amator nie ma szans
                odczuć. Zazwyczaj i tak każdy porządny serwis wam ją zrobi przy
                wyrównywaniu ślizgu wieć w sumie bez problemu.
              </p>
            </Row>
          </Col>
        </Container>
      </Styles>
    );
  }
}

export default Base;
