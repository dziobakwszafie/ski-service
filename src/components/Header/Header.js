import React from "react";
import styled from "styled-components";
import { logoutUser } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { specialStyles1 } from "../../styles/typography";
import colors from "../../styles/colors";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

const HeaderStyles = styled.div`
  width: 100%;
  height: 100%;
`;

const Nav2 = styled.div`
  .navBar {
    display: flex;
    background-color: rgba(133, 187, 8, 0.582);
    height: inherit;
  }
  h1 {
    display: inline;
    margin-left: 2rem;
    font-family: "Fredericka the Great", cursive;
    font-weight: lighter;
    font-size: 3em;
    background: -webkit-linear-gradient(rgb(6, 10, 6), rgb(18, 134, 2));
  }

  .navbar-links-item {
    display: inline-block;
    margin: 0;
    padding: 1rem;
  }

  .menu-item {
    color: white;
    text-decoration: none;
    list-style: none;
    font-size: 1.5rem;
    padding-bottom: 20px;
  }

  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    right: 30px;
    top: 20px;
  }

  .bm-burger-bars {
    background: #1a2701;
  }

  .bm-burger-bars-hover {
    background: #f7f6f8;
  }

  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }

  .bm-menu {
    background: #040b2c85;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.1%;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(255, 255, 255, 0) !important;
    width: 150% !important;
  }
`;

const SubtitleStyles = styled.h4`
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
  a {
    ${specialStyles1}
  }
`;

const LogoutStyles = styled.p`
  color: red;
`;

const Header = () => {
  const dispatch = useDispatch();

  const authenticated = useSelector(
    (state) => state.loginReducer.authenticated
  );

  return (
    <HeaderStyles>
      <SubtitleStyles>
        <a href="#">NIESMIALI ROMANTYCY </a>
      </SubtitleStyles>

      <Nav2>
        <div className="navBar" data-testid="navBar">
          <Menu disableAutoFocus isOpen={false} right>
            <li className="navbar-links-item">
              <Link to="/" className="menu-item">
                STRONA GŁÓWNA
              </Link>
            </li>

            {authenticated === false && (
              <li className="navbar-links-item">
                <Link to="/login" className="menu-item">
                  LOGOWANIE
                </Link>
              </li>
            )}

            <li className="navbar-links-item">
              <Link to="/order" className="menu-item">
                ZAMÓW SERWIS
              </Link>
            </li>

            {authenticated === true && (
              <li className="navbar-links-item">
                <a
                  href="#"
                  onClick={() => {
                    dispatch(logoutUser());
                  }}
                >
                  <LogoutStyles>WYLOGUJ</LogoutStyles>
                  {/* cant do only onClick={dispatch(logoutUser()) because u have 2 pass function to onClick instead of just calling it */}
                </a>
              </li>
            )}
          </Menu>
        </div>
      </Nav2>
    </HeaderStyles>
  );
};

export default Header;
