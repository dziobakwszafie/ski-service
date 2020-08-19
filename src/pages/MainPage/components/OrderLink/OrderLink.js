import React, { PureComponent } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const OrderLinkStyles = styled.div`
  max-width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OrderButtonStyles = styled.div`
  button {
    font-size: 2rem;
    padding: 1rem 2rem;
    background-color: white;
    border-radius: 5px;
    border: solid 3px black;
    :hover {
      background-color: #ee4035;
    }
  }
`;

class Order extends PureComponent {
  render() {
    return (
      <OrderLinkStyles>
        <Link to={`/login`}>
          <OrderButtonStyles>
            <button>ZAMÓW SERWIS</button>
          </OrderButtonStyles>
        </Link>
      </OrderLinkStyles>
    );
  }
}

export default Order;
