import React from "react";
import styled from "styled-components";

const Main = styled.div`
  display: grid;
  grid-template-columns: 47.83333vw 25.83333vw 25.83333vw;
  grid-template-rows: 34vw 8vw 26vw 26vw;
  @media only screen and (max-width: 1024px) {
    grid-template-rows: 130vw 65vw 20vw 45vw 35vw;
    grid-template-columns: 49.46667vw 49.46667vw;
  }
`;
const First = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;
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
  @media only screen and (max-width: 1024px) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 5;
  }
`;
const Fith = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
  @media only screen and (max-width: 1024px) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 4;
    grid-row-end: 5;
  }
`;

const Try = () => {
  return (
    <Main>
      <First>First</First>
      <Second>Second</Second>
      <Third>Third</Third>
      <Fourth>Fourth</Fourth>
      <Fith>Fith</Fith>
    </Main>
  );
};

export default Try;
