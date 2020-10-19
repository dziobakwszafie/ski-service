import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import IntroText from "./IntroText";
import skiboots from "../../../../assets/ski-boots.jpeg";
import photoshoot from "../../../../assets/photoshoot.jpg";
import cafe from "../../../../assets/cafe.jpeg";
import device from "../../../../styles/devices";
import typography from "../../../../styles/typography";
import colors from "../../../../styles/colors";

const Main = styled.div`
  display: grid;
  border-top: 0.33333vw solid ${colors.background.Primary1};
  border-bottom: 0.33333vw solid ${colors.background.Primary1};
  background-color: ${colors.background.Primary1};
  grid-template-columns: 47.83333vw 25.83333vw auto;
  grid-template-rows: auto 8vw 26vw;
  grid-gap: 0.33333vw;
  ${device.M} {
    grid-template-rows: auto 65vw 20vw 45vw;
    grid-template-columns: 50vw auto;
  }
`;
const First = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;
  background-color: ${colors.background.Primary3};
  ${device.M} {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }
`;
const Second = styled.div`
  background-color: ${colors.background.Primary2};
  background-image: url('${photoshoot}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  ${device.M} {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
  }
`;
const Third = styled.div`
  background-color: ${colors.background.Primary2};
  background-image: url('${skiboots}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  ${device.M} {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 4;
  }
`;
const Fourth = styled.div`
  position: relative;
  display: block;
  justify-content: center;
  align-items: center;
  background-color: ${colors.background.Primary2};
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;

  ${device.M} {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 5;
  }

  ::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: ${colors.background.Secondary1};
    transition: all 0.35s;
  }

  :hover {
    background-color: ${colors.text.Primary2};
    cursor: pointer;
  }

  :hover::before {
    width: 100%;
  }
`;
const Fifth = styled.div`
  background-color: ${colors.background.Primary2};
  background-image: url('${cafe}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
  ${device.M} {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 4;
    grid-row-end: 5;
  }
`;

const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const LinkStyles = styled.h3`
  transform: rotate(-17deg);
  ${typography.header.L}

  color: ${colors.text.Secondary1};
  ${device.M} {
    ${typography.header.XXL}
  }
`;

const Try = ({ reference }) => {
  return (
    <Main ref={reference}>
      <First>
        <IntroText />
      </First>
      <Second />
      <Third />
      <Fourth>
        <NavLink to="/login">
          <div>
            <LinkStyles>ZAMÓW</LinkStyles>
            <LinkStyles>SERWIS</LinkStyles>
          </div>
        </NavLink>
      </Fourth>
      <Fifth />
    </Main>
  );
};

export default Try;
