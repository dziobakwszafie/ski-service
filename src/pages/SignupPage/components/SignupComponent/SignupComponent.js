import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import axios from "axios";
import { theme, ThemeProvider } from "@chakra-ui/core";
import FormikControl from "../../../../components/FormikControl/FormikControl";
import { Button, Box, Spinner } from "@chakra-ui/core";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SET_LOADING } from "../../../../redux/actionTypes/types";
import { signup } from "../../../../redux/actions";

const LoginTitleStyle = styled.h3`
  font-family: "FlyingLeatherneck";
  font-size: 3rem;
  @media only screen and (max-width: 1024px) {
    font-size: 2rem;
  }
`;

const SuccessMessageStyle = styled.p`
  color: red;
  margin-top: 2vw;
`;

const SignupComponent = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    phone: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string().required("Required"),
    name: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
  });

  const loadingMessage = useSelector(
    (state) => state.loginReducer.loadingMessage
  );

  const successMessage = useSelector(
    (state) => state.loginReducer.successMessage
  );

  let signupData = {};
  const onSubmit = (values) => {
    console.log("Form data", values);
    console.log("Saved data", JSON.parse(JSON.stringify(values)));
    const signupData = {
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
      name: values.name,
      phone: values.phone,
    };
    dispatch({ type: SET_LOADING });
    dispatch(signup(signupData));
  };

  return (
    <ThemeProvider theme={theme}>
      <Box w="100%" p={4}>
        <div>
          <LoginTitleStyle>Zarejestruj</LoginTitleStyle>

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
                <FormikControl
                  control="chakraInput"
                  type="password"
                  label="Potwierdź hasło"
                  name="confirmPassword"
                />
                <FormikControl
                  control="chakraInput"
                  type="name"
                  label="Imię i nazwisko"
                  name="name"
                />
                <FormikControl
                  control="chakraInput"
                  type="phone"
                  label="Telefon"
                  name="phone"
                />
                <Button
                  mt="3vw"
                  type="submit"
                  disabled={
                    !formik.isValid || !formik.dirty || formik.isSubmitting
                  }
                >
                  Wyślij
                  {loadingMessage && <Spinner color="red.500" />}
                </Button>
              </Form>
            )}
          </Formik>
        </div>
        {successMessage === true && (
          <SuccessMessageStyle>
            <b>Gratki - udało Ci sie założyć konto</b>
          </SuccessMessageStyle>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default SignupComponent;
