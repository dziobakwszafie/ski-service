import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../../../assets/mainLogo.svg";

const StyledLogo = styled(Logo)``;

const OHeaderStyles = styled.div`
  height: 200px;
  nav {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    float: right;
    margin-top: 8px;
    margin-bottom: 3px;
  }

  .menu a {
    text-decoration: none;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    padding: 0 5px;
    margin-left: 10px;
    /* font-size: 1rem; */
    color: #777;
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
    /* font-weight: 600; */
    color: #75a99d;
  }

  #check {
    position: absolute;
    visibility: hidden;
  }

  @media screen and (max-width: 1000px) {
    .button--show-menu,
    .button--hide-menu {
      display: block;
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

const Header = () => {
  return (
    <OHeaderStyles>
      <div>
        <a href="#">
          {/* <StyledLogo /> */}
          Logo
        </a>
      </div>
      <nav>
        <input type="checkbox" id="check" />
        <label for="check" class="button--show-menu">
          <i class="fas fa-bars"></i>
        </label>
        <ul class="menu">
          <a href="#" onclick="uncheck()">
            HOME
          </a>
          <a href="#services" onclick="uncheck()">
            OFERTA
          </a>
          <a href="#about" onclick="uncheck()">
            O MNIE
          </a>
          <a href="#contact" onclick="uncheck()">
            KONTAKT
          </a>
          <label for="check" class="button--hide-menu">
            <i class="fas fa-times"></i>
          </label>
        </ul>
      </nav>
    </OHeaderStyles>
  );
};

export default Header;
