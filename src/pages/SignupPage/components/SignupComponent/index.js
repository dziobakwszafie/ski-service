import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { theme, ThemeProvider, Button, Box, Spinner } from '@chakra-ui/core';

import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import FormikControl from '../../../../components/FormikControl/FormikControl';
import { SET_LOADING } from '../../../../redux/actionTypes/loginTypes';
import { signup } from '../../../../redux/actions/loginActions';
import { queryForTitle } from '../../../../styles/devices';

const LoginTitleStyle = styled.h3`
  ${queryForTitle}
`;

const SuccessMessageStyle = styled.p`
  margin-top: 2vw;
  color: red;
`;

const SignupComponent = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    phone: '',
  };

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Zły format maila')
      .required('Nie może być puste'),
    password: Yup.string()
      .min(6, 'Minimum 6 znaków')
      .required('Nie może być puste'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Hasła nie pasują')
      .required('Nie może być puste'),
    name: Yup.string()
      .min(2, 'Mininum 4 znaki')
      .max(20, 'Maximum 20 znaków')
      .required('Nie może być puste'),
    phone: Yup.string()
      .matches(phoneRegExp, 'Zły format')
      .length(9, 'Numer musi mieć 9 znaków')
      .required('Nie może być puste'),
  });

  const loadingMessage = useSelector(
    (state) => state.loginReducer.loadingMessage
  );

  const successMessage = useSelector(
    (state) => state.loginReducer.successMessage
  );

  const authenticated = useSelector(
    (state) => state.loginReducer.authenticated
  );

  if (authenticated === true) {
    setInterval(() => {
      history.push('/order');
      window.location.reload();
    }, 2000);
  }

  const onSubmit = (values) => {
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
          <LoginTitleStyle>Rejestruj</LoginTitleStyle>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
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
                  }>
                  Wyślij
                  {loadingMessage && <Spinner color="red.500" />}
                </Button>
              </Form>
            )}
          </Formik>
        </div>
        {successMessage === true && (
          <SuccessMessageStyle>
            <b>Gratki - udało Ci się założyć konto</b>
          </SuccessMessageStyle>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default SignupComponent;
