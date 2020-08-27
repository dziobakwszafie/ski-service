import React from "react";
import Header from "../../components/Header/Header";
import LoginModal from "./components/LoginModal/LoginModal";
// import SignupModal from "./components/SignupModal/SignupModal";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";

const LoginPageStyles = styled.div`
  width: 30%;
  margin: auto;
`;

const LoginPage = () => {
  return (
    <>
      <Header />
      <LoginPageStyles>
        <LoginModal />
        {/* <SignupModal /> */}
      </LoginPageStyles>
      <Footer />
    </>
  );
};

export default LoginPage;
