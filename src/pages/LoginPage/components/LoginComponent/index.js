import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { theme, ThemeProvider, Button, Box, Spinner } from '@chakra-ui/core';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { SET_LOADING } from '../../../../redux/actionTypes/loginTypes';
import { login } from '../../../../redux/actions/loginActions';
import FormikControl from '../../../../components/FormikControl/FormikControl';
import { queryForTitle } from '../../../../styles/devices';

const LoginTitleStyle = styled.h3`
  ${queryForTitle}
`;

const LoginComponent = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const loadingMessage = useSelector(
    (state) => state.loginReducer.loadingMessage
  );

  const authenticated = useSelector(
    (state) => state.loginReducer.authenticated
  );

  if (authenticated === true) {
    history.push('/order');
  }

  let loginData = {};
  const onSubmit = (values) => {
    loginData = {
      email: values.email,
      password: values.password,
    };
    dispatch({ type: SET_LOADING });
    dispatch(login(loginData));
  };

  return (
    <ThemeProvider theme={theme}>
      <Box w="100%" p={5}>
        <div>
          <LoginTitleStyle>Zaloguj</LoginTitleStyle>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {(formik) => (
              <Form data-testid="form">
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
                  mt="3vw"
                  type="submit"
                  disabled={
                    !formik.isValid || !formik.dirty || formik.isSubmitting
                  }>
                  Zaloguj
                  {loadingMessage === true && <Spinner color="red.500" />}
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default LoginComponent;
