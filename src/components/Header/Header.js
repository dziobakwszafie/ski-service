import React, { PureComponent } from "react";
import { Container, Button, Row } from "react-bootstrap";
import styled from "styled-components";
import bgPhoto from "./images/bg.jpg";

const Styles = styled.div`
  .container {
    height: 100vh;
    background-image: url(${bgPhoto});
    background-position: center;
    background-size: cover;
    max-width: 100vw;
  }
  #mask {
    background: hsla(0, 0%, 0%, 0.6);
  }
  #intro-text {
    background: hsla(0, 0%, 20%, 0);
    color: white;
    padding: 50px;
    max-height: 50vh;
  }
  #intro-text_ctn {
    max-width: 1000px;
    height: 100%;
  }
  h1 {
    margin-bottom: 20px;
    font-family: "Sacramento", cursive;
    font-size: 50px;
  }
  p {
    font-family: "Roboto", sans-serif;
  }
`;

class Header extends PureComponent {
  render() {
    return (
      <Styles>
        <Container
          id="intro"
          className="p-0 d-flex justify-content-center align-items-center"
        >
          <Container
            id="mask"
            className="p-0 d-flex justify-content-center align-items-center"
          >
            <Container
              id="intro-text"
              className="d-flex justify-content-center align-items-center"
            >
              <Row
                id="intro-text_ctn"
                className="d-flex justify-content-center align-items-center"
              >
                <h1>Narciochowa strona</h1>
                <div className="font-weight-normal text-center">
                  <p>
                    Kilka par nart i butów do sprzedania, większość w stanie
                    dobrym lub bardzo dobrym, czasem nówki. Narty często
                    serwisowane ręcznie.
                  </p>
                  <p>
                    Jeśli podoba Ci się jakiś model lub chcesz dopytac o inny,
                    to śmiało.
                  </p>
                  <p>
                    Jeśli potrzebujesz szpej typu kijki, kask i inne bajery, to
                    też da się załatwić.
                  </p>
                </div>
                <Row className="d-flex align-items-center justify-content-center">
                  <a href="#skis">
                    <Button
                      type="button"
                      className="btn mx-3"
                      variant="primary"
                    >
                      Narty
                    </Button>
                  </a>
                  <a href="#footer">
                    <Button type="button" className="btn mx-3" variant="light">
                      Kontakt
                    </Button>
                  </a>
                </Row>
              </Row>
            </Container>
          </Container>
        </Container>
      </Styles>
    );
  }
}

export default Header;
