import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";
import HistorySection from "./components/HistorySection";
import Footer from "../../components/Footer";
import colors from "../../styles/colors";
import device from "../../styles/devices";

const HistoryStyles = styled.div``;

const HistoryPageStyles = styled.div`
  display: grid;
  min-height: 80vh;
  border-top: 0.23333vw solid ${colors.background.Primary1};
  border-bottom: 0.23333vw solid ${colors.background.Primary1};
  background-color: ${colors.background.Primary1};
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-gap: 0.2vw;
  ${device.M} {
    grid-template-rows: auto;
    grid-template-columns: auto;
  }
`;

const First = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.background.Primary2};
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  ${device.M} {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
  }
`;

const HeaderStyles = styled.div`
  height: 5vw;

  @media only screen and (max-width: 1500px) {
    height: 75px;
  }
`;

const HistoryPage = () => {
  const history = useHistory();

  const authenticated = useSelector(
    (state) => state.loginReducer.authenticated
  );

  if (authenticated === false) {
    history.push("/login");
  }

  return (
    <HistoryStyles>
      <HeaderStyles>
        <Header />
      </HeaderStyles>

      <HistoryPageStyles>
        <First>
          <HistorySection />
        </First>
      </HistoryPageStyles>

      <Footer />
    </HistoryStyles>
  );
};

export default HistoryPage;
