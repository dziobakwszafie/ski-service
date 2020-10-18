import React from 'react';
import styled from 'styled-components';
import device, { queryForTitle } from '../../../../styles/devices';
import colors from '../../../../styles/colors';
import typography from '../../../../styles/typography';
import { Link } from 'react-router-dom';
import { services } from './Services.table';
import sharpi from '../../../../assets/sharpi.png';
import waxi from '../../../../assets/waxi.png';
import car from '../../../../assets/car.png';

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
  display: flex;
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
  margin: auto 10px;
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
    content: '';
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

const FakeButtonStyles = styled(ButtonStyles)`
  border: 2px solid ${colors.text.Primary2};
  :hover {
    background-color: ${colors.background.Primary2};
    cursor: default;
  }
  :after {
    background-color: ${colors.background.Primary2};
  }
`;

const SingleServiceStyle = styled.div`
  width: 25vw;
  height: 30vw;
  padding: 2vw;
  margin: 0 4vw;
  background-color: ${colors.background.Primary9};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  border-radius: 5px;
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
  padding-top: 1.5vw;
  border-top: 0.2vw solid black;
`;

const PictureStyle = styled.div`
  position: absolute;
  top: 20%;
  transform: rotate(-17deg);
`;

const SingleLineStyle = styled.p`
  margin-bottom: 1vw;
`;

const FastPrices = (props = { services }) => {
  return (
    <FastPricesStyle>
      <FastPricesTitleStyle>cennik</FastPricesTitleStyle>
      <PriceItems>
        {services.map((service) => (
          <SingleServiceStyle>
            <PictureStyle>
              {service.photo === 'sharpi' ? (
                <img src={sharpi} alt="pricePic" />
              ) : service.photo === 'waxi' ? (
                <img src={waxi} alt="pricePic" />
              ) : (
                <img src={car} alt="pricePic" />
              )}
            </PictureStyle>
            <SingleServiceTextStyle>
              <SingleLineStyle>
                {service.task1}
                {service.price1}
              </SingleLineStyle>
              <SingleLineStyle>
                {service.task2}
                {service.price2}
              </SingleLineStyle>
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
        <FakeButtonStyles>
          <span>Albooo przesuń niżej</span>
        </FakeButtonStyles>
      </Wrapper>
    </FastPricesStyle>
  );
};

export default FastPrices;
