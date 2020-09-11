import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.div`
  height: 5vw;
  width: 100%;
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

  .menu a {
    text-decoration: none;
    transition: 0.4s;
    padding: 0 5px;
    margin-left: 10px;
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

  @media screen and (max-width: 1000px) {
    .button--show-menu,
    .button--hide-menu {
      display: block;
      position: absolute;
      right: 2vw;
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
`;

const Header = () => {
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
          <a href="#" onclick="uncheck()">
            HOME
          </a>
          <a href="#login" onclick="uncheck()">
            LOGIN
          </a>
          <a href="#order" onclick="uncheck()">
            ZAMÓWIENIE
          </a>
          <label for="check" class="button--hide-menu">
            <i class="fas fa-times"></i>
          </label>
        </ul>
      </NavStyles>
    </HeaderStyles>
  );
};

export default Header;
