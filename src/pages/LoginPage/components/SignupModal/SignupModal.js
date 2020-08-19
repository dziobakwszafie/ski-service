import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import axios from "axios";
import { theme, ThemeProvider } from "@chakra-ui/core";
import FormikControl from "../../../../components/FormikControl/FormikControl";
import { Button, Box } from "@chakra-ui/core";

function SignupModal() {
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

  let [successMessage, setMessage] = useState();

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
    axios
      .post(
        "https://europe-west3-ski-service-91995.cloudfunctions.net/api/order",
        signupData
      )
      .then((res) => {
        console.log(res.data);

        setMessage(
          (successMessage = res.data ? "Zalogowano" : "Niezalogowano")
        );
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box bg="#ad032c" w="100%" p={4} color="white">
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
      </Box>
    </ThemeProvider>
  );
}

export default SignupModal;
