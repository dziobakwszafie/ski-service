import React from "react";
import styled from "styled-components";
import { queryForTitle } from "../../../../styles/devices";
import colors from "../../../../styles/colors";
import device from "../../../../styles/devices";
import { Link } from "react-router-dom";

const FastPricesStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FastPricesTitleStyle = styled.h3`
  ${queryForTitle}
  color: ${colors.text.Primary6};
  text-align: center;
  margin-bottom: 5vw;
`;

const Wrapper = styled.div`
  position: relative;
`;

const ButtonStyles = styled.a`
  display: block;
  width: 250px;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  font-family: sans-serif;
  text-decoration: none;
  color: ${colors.text.Primary7};
  border: 2px solid ${colors.text.Primary5};
  letter-spacing: 2px;
  text-align: center;
  position: relative;
  transition: all 0.35s;
  ${device.S} {
    width: 120px;
    height: 30px;
    font-size: 10px;
    text-align: center;
    line-height: 30px;
  }

  span {
    position: relative;
    z-index: 2;
  }

  :after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: ${colors.background.Primary4};
    transition: all 0.35s;
  }

  :hover {
    color: ${colors.text.Primary2};
    cursor: pointer;
  }

  :hover:after {
    width: 100%;
  }
`;

const FastPrices = () => {
  return (
    <FastPricesStyle>
      <FastPricesTitleStyle>
        tutaj bedzie cennik - tylko na razie sie tworzy
      </FastPricesTitleStyle>
      <FastPricesTitleStyle>
        wiecej informacji o sprawach technicznych znajdziesz w zakladce zloz
        zamowienie
      </FastPricesTitleStyle>
      <Wrapper>
        <ButtonStyles href="#">
          <Link to={`/order`}>
            <span>Złóż zamówienie</span>
          </Link>
        </ButtonStyles>
      </Wrapper>
    </FastPricesStyle>
  );
};

export default FastPrices;
