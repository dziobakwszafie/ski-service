import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";
import { connect } from "react-redux";
import { addToBasket } from "../../../../actions/actions";

const OrderSharpStyles = styled.div`
  img {
    height: 400px;
  }
  .vars div {
    width: 25%;
  }
`;

const OrderParams = ({ addToBasket, item }) => {
  const { name } = item;
  return (
    <OrderSharpStyles>
      <Container className="p-5 d-flex justify-content-center align-items-center">
        <Col>
          <Row className="d-flex justify-content-center">
            <h3>{name}</h3>
          </Row>
          <Row>
            <Col xs={4}></Col>
            <Col xs={8}>
              <Row>
                <Col xs={3}>
                  <div>PODSTAWOWE</div>
                </Col>
                <Col xs={8}>
                  <div>ostrzenie pilnikami stalowymi o 2 gradacjach</div>
                </Col>
                <Col xs={1}>30,-</Col>
              </Row>
              <Row>
                <Col xs={3}>
                  <div>RACE</div>
                </Col>
                <Col xs={8}>
                  <div>
                    ostrzenie pilnikami stalowymi o 2 gradacjach oraz
                    polerowanie pilnikami diamentowymi o 3 gradacjach
                  </div>
                </Col>
                <Col xs={1}>30,-</Col>
              </Row>
              <Row>
                <Col xs={3}>
                  <div>NIC</div>
                </Col>
                <Col xs={8}>
                  <div>bez ostrzenia</div>
                </Col>
                <Col xs={1}></Col>
              </Row>
            </Col>
            <Button
              onClick={() => addToBasket(item, console.log(item))}
              cartButton
            >
              ADD TO CART
            </Button>
          </Row>
        </Col>
      </Container>
    </OrderSharpStyles>
  );
};

export default connect(null, { addToBasket })(OrderParams);
