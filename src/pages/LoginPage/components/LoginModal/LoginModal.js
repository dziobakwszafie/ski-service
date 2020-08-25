import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../../../components/FormikControl/FormikControl";
import styled from "styled-components";
import axios from "axios";
import { theme, ThemeProvider } from "@chakra-ui/core";
import { Button, Box, Spinner } from "@chakra-ui/core";
import { useHistory } from "react-router-dom";

const LoginModal = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  let history = useHistory();
  let [loadingMessage, setLoading] = useState();

  const onSubmit = (values) => {
    console.log("Form data", values);
    console.log("Saved data", JSON.parse(JSON.stringify(values)));
    const loginData = {
      email: values.email,
      password: values.password,
    };
    setLoading((loadingMessage = true));

    axios
      .post("/login", loginData)

      .then((res) => {
        console.log(res.data);
        localStorage.setItem("FBIdToken", `Bearer ${res.data.token}`);
        history.push("/order");
        setLoading((loadingMessage = false));
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box bg="#22f6d2" w="100%" p={4} color="white">
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
                  Zaloguj
                  {loadingMessage && <Spinner color="red.500" />}
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default LoginModal;
