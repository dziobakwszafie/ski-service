import React, { Component } from "react";
import { Button, Modal, ButtonToolbar } from "react-bootstrap";
import GoogleLogin from "react-google-login";
import styled from "styled-components";

const Styles = styled.text`
  div {
    background: black;
    height: 2px;
    width: 80%;
    margin: 10%;
  }
`;

const responseGoogle = response => {
  console.log(response);
};

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4>sxcsd</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <GoogleLogin
          clientId="250648134969-ectghictojgr907enl7lmgdhn3vo0tgj.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
        <Styles>
          <div></div>
        </Styles>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Zamknij
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function ModalB(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <ButtonToolbar>
      <Button
        variant="success"
        onClick={() => setModalShow(true)}
        size="md"
        block
      >
        cena: fvd zł
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        {...props}
      />
    </ButtonToolbar>
  );
}

export default ModalB;
