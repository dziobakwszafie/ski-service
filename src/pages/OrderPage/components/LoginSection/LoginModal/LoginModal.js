import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../FormikControl/FormikControl";
import styled from "styled-components";
import axios from "axios";
import { useDisclosure } from "@chakra-ui/core";
import { theme, ThemeProvider } from "@chakra-ui/core";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/core";

function LoginModal() {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  let [successMessage, setMessage] = useState();

  const onSubmit = (values) => {
    console.log("Form data", values);
    console.log("Saved data", JSON.parse(JSON.stringify(values)));
    const loginData = {
      email: values.email,
      password: values.password,
    };
    axios
      .post(
        // "https://europe-west3-ski-service-91995.cloudfunctions.net/api/login",
        "http://localhost:5000/ski-service-91995/europe-west3/api/login",
        loginData
      )

      .then((res) => {
        console.log(res.data);
        localStorage.setItem("FBIdToken", `Bearer ${res.data.token}`);
        setMessage(
          (successMessage = res.data ? "Zalogowano" : "Niezalogowano")
        );
      });
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ThemeProvider theme={theme}>
      <Button onClick={onOpen}>Zaloguj się</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Proszę sie zalogować</ModalHeader>
          <ModalBody>
            <div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {(formik) => (
                  <Form>
                    <FormikControl
                      control="chakraInput"
                      type="email"
                      label="Podaj email"
                      name="email"
                    />
                    <FormikControl
                      control="chakraInput"
                      type="password"
                      label="Hasło"
                      name="password"
                    />
                    <Button
                      type="submit"
                      disabled={
                        !formik.isValid || !formik.dirty || formik.isSubmitting
                      }
                    >
                      Submit
                    </Button>
                    <Button variantColor="blue" mr={3} onClick={onClose}>
                      Close
                    </Button>
                  </Form>
                )}
              </Formik>
              {successMessage}
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </ThemeProvider>
  );
}

export default LoginModal;
