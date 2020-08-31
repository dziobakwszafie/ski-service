import React from "react";
import styled from "styled-components";
import IntroText from "./IntroText/IntroText";
import { Link } from "react-router-dom";

const Main = styled.div`
  display: grid;
  grid-template-columns: 47.83333vw 25.83333vw auto;
  grid-template-rows: 34vw 8vw 26vw;
  grid-gap: 0.33333vw;
  background-color: #000;
  border-bottom: 0.33333vw solid #000;
  border-top: 0.33333vw solid #000;
  @media only screen and (max-width: 1024px) {
    grid-template-rows: 130vw 65vw 20vw 45vw;
    grid-template-columns: 50vw auto;
  }
`;
const First = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;
  background-color: #fff;
  @media only screen and (max-width: 1024px) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }
`;
const Second = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  background-color: #fff;
  @media only screen and (max-width: 1024px) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
  }
`;
const Third = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  background-color: #fff;
  @media only screen and (max-width: 1024px) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 4;
  }
`;
const Fourth = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: red;
  }
  @media only screen and (max-width: 1024px) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 5;
  }
`;
const Fifth = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
  background-color: #fff;
  @media only screen and (max-width: 1024px) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 4;
    grid-row-end: 5;
  }
`;

const LinkStyles = styled.h3`
  transform: rotate(-17deg);
  font-family: "FlyingLeatherneck";
  font-size: 75px;
`;

const Try = () => {
  return (
    <Main>
      <First>
        <IntroText />
      </First>
      <Second>Second</Second>
      <Third>Third</Third>
      <Fourth>
        <Link to={`/login`}>
          <LinkStyles>ZAMÓW</LinkStyles>
          <LinkStyles>SERWIS</LinkStyles>
        </Link>
      </Fourth>
      <Fifth>Fifth</Fifth>
    </Main>
  );
};

export default Try;
