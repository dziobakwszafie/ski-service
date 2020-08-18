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
        "https://europe-west3-ski-service-91995.cloudfunctions.net/api/order",
        loginData
      )
      .then((res) => {
        console.log(res.data);

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
            <ModalCloseButton />
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
              <button
                type="submit"
                disabled={
                  !formik.isValid || !formik.dirty || formik.isSubmitting
                }
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
        {successMessage}
      </div>
            </ModalBody>
  
            <ModalFooter>
              <Button variantColor="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </ThemeProvider>
    );
  }

export default LoginModal








