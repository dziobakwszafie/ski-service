import React from "react";
import styled from "styled-components";
import device, { queryForTitle } from "../../../../styles/devices";
import colors from "../../../../styles/colors";
import typography from "../../../../styles/typography";
import { Link } from "react-router-dom";
import { services } from "./Services.table";

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
`;

const Wrapper = styled.div`
  position: relative;
  margin: 5vw auto;
`;

const PriceItems = styled.div`
  display: flex;
`;

const ButtonStyles = styled.div`
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

const SingleServiceStyle = styled.div`
  width: 22vw;
  height: 30vw;
  margin: 0 4vw;
  background-color: ${colors.background.Primary3};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const SingleServiceTextStyle = styled.p`
  ${device.XXL} {
    ${typography.body.XS}
  }
  ${device.XL} {
    ${typography.body.S}
  }
  ${device.L} {
    ${typography.body.S}
  }
  ${device.M} {
    ${typography.body.S}
  }
  ${device.S} {
    ${typography.body.S}
  }
  color: ${colors.text.Primary6};
  text-align: center;
  margin-bottom: 15%;
`;

const SingleLineStyle = styled.p`
  margin-bottom: 2vw;
`;

const FastPrices = (props = { services }) => {
  return (
    <FastPricesStyle>
      <FastPricesTitleStyle>cennik</FastPricesTitleStyle>
      <PriceItems>
        {services.map((service) => (
          <SingleServiceStyle>
            <SingleServiceTextStyle>
              {service.map((singleService) => (
                <div>
                  <SingleLineStyle>
                    {singleService.task} - {singleService.price} zł
                  </SingleLineStyle>
                </div>
              ))}
            </SingleServiceTextStyle>
          </SingleServiceStyle>
        ))}
      </PriceItems>

      <Wrapper>
        <ButtonStyles>
          <Link to={`/order`}>
            <span>Złóż zamówienie</span>
          </Link>
        </ButtonStyles>
      </Wrapper>
    </FastPricesStyle>
  );
};

export default FastPrices;
