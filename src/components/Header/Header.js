import React from "react";
import styled from "styled-components";
import { logoutUser } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const HeaderStyles = styled.div`
  width: 100%;
  height: 100%;
`;

const NavStyles = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  ul {
    position: absolute;
    right: 0;
  }

  .menu {
    display: flex;
  }

  .menu a {
    text-decoration: none;
    transition: 0.4s;
    padding: 0 5px;
    margin-left: 15px;
    color: #000;
    font-weight: 600;
  }

  .menu a:last-of-type {
    margin-right: 50px;
  }

  .button--show-menu,
  .button--hide-menu {
    -webkit-transition: 0.4s;
    transition: 0.4s;
    font-size: 1.5em;
    cursor: pointer;
    display: none;
  }

  .button--show-menu {
    float: right;
  }

  .menu a:hover {
    color: red;
  }

  #check {
    position: absolute;
    visibility: hidden;
  }

  @media screen and (max-width: 1180px) {
    .button--show-menu,
    .button--hide-menu {
      display: block;
      position: absolute;
      right: 2vw;
      font-size: 2.2em;
      @media only screen and (max-width: 500px) {
        font-size: 1.5em;
      }
    }

    .menu {
      position: fixed;
      width: 100%;
      background: #ffffff9f;
      right: -100%;
      top: 0;
      text-align: center;
      padding: 80px 0;
      line-height: normal;
      -webkit-transition: 0.7s;
      transition: 0.7s;
      width: 40%;
      display: flex;
      flex-direction: column;
    }

    .menu a {
      display: block;
      padding: 0.8rem;
      opacity: 1;
      margin: auto;
    }

    .menu a:last-of-type {
      margin-right: 0;
    }

    .button--hide-menu {
      position: absolute;
      top: 1.6rem;
      right: 1.6rem;
    }

    #check:checked ~ .menu {
      right: 0;
    }

    #check:checked ~ .button--show-menu {
      visibility: hidden;
    }
  }
`;

const SubtitleStyles = styled.h4`
  font-family: "FlyingLeatherneck";
  font-size: 5vw;
  color: black;
  position: absolute;
  left: 0;
  @media only screen and (max-width: 1000px) {
    font-size: 7.5vw;
  }
  @media only screen and (max-width: 550px) {
    font-size: 8.5vw;
  }
`;

const LogoutStyles = styled.p`
  color: grey;
`;

const Header = () => {
  const dispatch = useDispatch();

  const authenticated = useSelector(
    (state) => state.loginReducer.authenticated
  );

  return (
    <HeaderStyles>
      <NavStyles>
        <SubtitleStyles>
          <a href="#">NIESMIALI ROMANTYCY </a>
        </SubtitleStyles>

        <input type="checkbox" id="check" />
        <label for="check" class="button--show-menu">
          <i class="fas fa-bars"></i>
        </label>
        <ul class="menu">
          <a href="#">STRONA GŁÓWNA</a>

          {authenticated === false && <a href="#login">LOGOWANIE</a>}
          <a href="#order">ZAMÓW SERWIS</a>
          {authenticated === true && (
            <a
              href="#"
              onClick={() => {
                dispatch(logoutUser());
              }}
            >
              <LogoutStyles>WYLOGUJ</LogoutStyles>
              {/* cant do only onClick={dispatch(logoutUser()) because u have 2 pass function to onClick instead of just calling it */}
            </a>
          )}

          <label for="check" class="button--hide-menu">
            <i class="fas fa-times"></i>
          </label>
        </ul>
      </NavStyles>
    </HeaderStyles>
  );
};

export default Header;
