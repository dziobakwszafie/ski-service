import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import sharp from "./images/sharp.jpg";

const OrderSharpStyles = styled.div`
  img {
    height: 400px;
  }
  .vars div {
    width: 25%;
  }
`;

// const handleValue = () => {
//   this.setState({});
// };

// const handleApplySharp = () => {
//   const { applySharp } = this.props;
//   applySharp();
// };

//przekazanie wartości z buttona do state

//dac listener na diva z kątami
//po kliknieciu wrzucić do stora wartośc z id wybranego diva
//na dole strony wyświetlac klikniete opcje na naklejce
//potem po kliknieciu zamowienia wyslac je do bazy danych
// z bazy ma wrócic i pokazac sie w historii zamówien

// const OrderSharp = ({ details }) => {

class OrderSharp extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handle(event) {
    const id = event.target.id;
    console.log(id);
  }
  render() {
    const { details } = this.props;
    return (
      <OrderSharpStyles>
        <Container className="p-5 d-flex justify-content-center align-items-center">
          <Col>
            <Row className="d-flex justify-content-center">
              <h3>{details[0].name}</h3>
            </Row>
            <Row>
              <Col xs={4}>
                <img src={sharp} />
              </Col>
              <Col xs={8}>
                <Row>
                  <Col xs={3}>
                    <div>PODSTAWOWE</div>
                  </Col>
                  <Col xs={8}>
                    <div>
                      ostrzenie pilnikami stalowymi o 2
                      gradacjach
                    </div>
                  </Col>
                  <Col xs={1}>30,-</Col>
                </Row>
                <Row>
                  <Col xs={3}>
                    <div>RACE</div>
                  </Col>
                  <Col xs={8}>
                    <div>
                      ostrzenie pilnikami stalowymi o 2
                      gradacjach oraz polerowanie pilnikami
                      diamentowymi o 3 gradacjach
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
                <Row className="d-flex justify-content-center">
                  <Col xs={2}>
                    <p>BOK</p>
                  </Col>
                  <Col xs={6} className=" d-flex vars">
                    <button
                      id="myBtn"
                      value="sfsd"
                      onClick={this.handle}
                    >
                      {details[0].angle1}
                    </button>

                    <button>{details[0].angle2}</button>
                    <button>{details[0].angle3}</button>
                    <button>{details[0].angle4}</button>
                  </Col>
                </Row>
                <Row className="d-flex justify-content-center">
                  <Col xs={2}>
                    <p>DÓŁ</p>
                  </Col>
                  <Col xs={6} className=" d-flex vars">
                    <button>{details[0].angle5}</button>
                    <button>{details[0].angle6}</button>
                    <button>{details[0].angle7}</button>
                    <button>{details[0].angle8}</button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Container>
      </OrderSharpStyles>
    );
  }
}

export default OrderSharp;
//https://pl.reactjs.org/docs/forms.html
//https://stackoverflow.com/questions/53498281/react-read-value-of-button-clicked
