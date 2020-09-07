import React from "react";
import styled from "styled-components";
import IntroSharp from "./IntroSharp/IntroSharp";
import IntroWax from "./IntroWax/IntroWax";
import ExtraInfo from "./ExtraInfo/ExtraInfo";
import myface from "../../../../assets/myface.jpeg";
import wax from "../../../../assets/wax.jpeg";
import service from "../../../../assets/service.jpg";
import mountain from "../../../../assets/mountain.PNG";
import drawboot from "../../../../assets/drawboot.PNG";
import skibar from "../../../../assets/skibar.jpeg";

const Main = styled.div`
  display: grid;
  grid-gap: 0.33333vw;
  grid-template-columns: 27.83333vw 7.83333vw 19.83333vw 15.83333vw auto;
  grid-template-rows: 24vw 24vw 28vw 34vw;
  background-color: #000;
  border-bottom: 0.33333vw solid #000;
  @media only screen and (max-width: 1024px) {
    grid-template-columns: 49.46667vw auto;
    grid-template-rows: 44vw 44vw 54vw 54vw 50vw 48vw 48vw;
  }
`;
const First = styled.div`
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
  background-color: #0e9aa7;
  @media only screen and (max-width: 1024px) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;
  }
`;
const Second = styled.div`
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-end: 2;
  background-color: #fff;
  background-image: url("${wax}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (max-width: 1024px) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }
`;
const Third = styled.div`
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  background-color: #fff;
  background-image: url("${service}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (max-width: 1024px) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  }
`;
const Fourth = styled.div`
  grid-column-start: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-end: 6;
  background-color: #009688;
  @media only screen and (max-width: 1024px) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
  }
`;
const Fifth = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
  background-color: #fff;
  background-image: url("${myface}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (max-width: 1024px) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 4;
    grid-row-end: 5;
  }
`;
const Sixth = styled.div`
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 5;
  background-color: #d54062;
  @media only screen and (max-width: 1024px) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 5;
    grid-row-end: 7;
  }
`;
const Seventh = styled.div`
  grid-column-start: 5;
  grid-column-end: 6;
  grid-row-start: 3;
  grid-row-end: 4;
  background-color: #fff;
  background-image: url("${drawboot}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (max-width: 1024px) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 5;
    grid-row-end: 6;
  }
`;
const Eighth = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 5;
  background-color: #fff;
  background-image: url("${mountain}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (max-width: 1024px) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 6;
    grid-row-end: 7;
  }
`;
const Ninth = styled.div`
  grid-column-start: 5;
  grid-column-end: 6;
  grid-row-start: 4;
  grid-row-end: 5;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("${skibar}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (max-width: 1024px) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 7;
    grid-row-end: 8;
  }
`;

const IntroTitleStyles = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 40px;
  color: #0b8d99;
  padding-bottom: 3rem;
`;

const Try = () => {
  return (
    <Main>
      <First>
        <IntroSharp />
      </First>
      <Second>Second</Second>
      <Third>Third</Third>
      <Fourth>
        <IntroWax />
      </Fourth>
      <Fifth>Fifth</Fifth>
      <Sixth>
        <ExtraInfo />
      </Sixth>
      <Seventh>Seventh</Seventh>
      <Eighth>Eighth</Eighth>
      <Ninth>Ninth</Ninth>
    </Main>
  );
};

export default Try;
