import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import axios from "axios";
import {
  Button,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/core";
import ReCAPTCHA from "react-google-recaptcha";
import { useSelector, useDispatch } from "react-redux";
import { queryForTitle } from "../../../../styles/devices";
import colors from "../../../../styles/colors";

import { SET_LOADING } from "../../../../redux/actionTypes/loginTypes";
import FormikControl from "../../../../components/FormikControl/FormikControl";

const OrderFormStyles = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3vw;
  margin-bottom: 5vw;
  width: 90%;
`;

const OrderformTitleStyle = styled.h3`
  ${queryForTitle}

  color: ${colors.text.Primary3};
  text-align: center;
`;

const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SinglePos = styled.div`
  margin: 15px auto;
`;

const RecaptchaStyling = styled.div`
  margin-top: 15px;
`;

const MessageStyles = styled.div`
  margin-top: 15px;
`;

const OrderForm = () => {
  const sideAngle = [
    { key: "89", value: "89" },
    { key: "88", value: "88" },
    { key: "87", value: "87" },
  ];
  const bottomAngle = [
    { key: "0,0", value: "0,0" },
    { key: "0,5", value: "0,5" },
    { key: "0,7", value: "0,7" },
  ];
  const diamond = [
    { key: "Pilniki diamentowe", value: "pilniki diamentowe" },
    { key: "Pilniki stalowe", value: "pilniki stalowe" },
  ];
  const snow = [
    { key: "Mokry", value: "śnieg mokry" },
    { key: "Zwykły", value: "śnieg zwykły" },
    { key: "Zmrożony", value: "śnieg zmrożony" },
  ];
  const fluor = [
    { key: "Smar fluorowy", value: "fluor" },
    { key: "Smar hydrokarbonowy", value: "hydrocarbon" },
  ];

  const initialValues = {
    skis: "",
    length: "",
    sideAngle: "",
    bottomAngle: "",
    diamond: "",
    snow: "",
    fluor: "",
    pickupDate: null,
  };
  const validationSchema = Yup.object({
    skis: Yup.string()
      .min(6, "Minimum 6 znaków")
      .required("Nie może być puste"),
    length: Yup.number()
      .min(40, "Chyba trochę za mało")
      .max(250, "Chyba trochę za dużo")
      .required("Nie może być puste"),
    sideAngle: Yup.string().required("Nie może być puste"),
    bottomAngle: Yup.string().required("Nie może być puste"),
    diamond: Yup.string().required("Nie może być puste"),
    snow: Yup.string().required("Nie może być puste"),
    fluor: Yup.string().required("Nie może być puste"),
    // pickupDate: Yup.date().required("Required").nullable(),
  });

  const [disableSubmit, setDisableSubmit] = useState(true);
  let [message, setMessage] = useState();

  const dispatch = useDispatch();

  const loadingMessage = useSelector(
    (state) => state.loginReducer.loadingMessage
  );

  const onSubmit = (values) => {
    dispatch({ type: SET_LOADING });
    const orderData = {
      skis: values.skis,
      length: values.length,
      sideAngle: values.sideAngle,
      bottomAngle: values.bottomAngle,
      diamond: values.diamond,
      snow: values.snow,
      fluor: values.fluor,
    };
    axios.post("/order", orderData).then((res) => {
      if (res.data) dispatch({ type: SET_LOADING });
      setMessage(
        (message = res.data ? (
          <Alert
            status="success"
            variant="subtle"
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
            height="200px">
            <AlertIcon size="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              Zamówienie zostało wysłane!
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              W razie pytań zapraszam do kontaktu telefonicznego lub mailowego.
            </AlertDescription>
          </Alert>
        ) : (
          <Alert
            status="error"
            variant="subtle"
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
            height="200px">
            <AlertIcon size="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              Oj coś nie poszło.
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              Spróbuj ponownie, a jak dalej się nie uda to zapraszam do kontaktu
              telefonicznego lub mailowego.
            </AlertDescription>
          </Alert>
        ))
      );
    });
  };

  return (
    <OrderFormStyles>
      <div>
        <OrderformTitleStyle>Formularz zamówien</OrderformTitleStyle>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}>
          {(formik) => (
            <FormWrapper>
              <SinglePos>
                <FormikControl
                  control="chakraInput"
                  type="skis"
                  label="Model nart"
                  name="skis"
                />
              </SinglePos>
              <SinglePos>
                <FormikControl
                  control="chakraInput"
                  type="length"
                  label="Długość [cm]"
                  name="length"
                />
              </SinglePos>
              <SinglePos>
                <FormikControl
                  control="chakraRadio"
                  label="Kąt boczny krawędzi [stopnie]"
                  name="sideAngle"
                  options={sideAngle}
                />
              </SinglePos>
              <SinglePos>
                <FormikControl
                  control="chakraRadio"
                  label="Kąt dolny krawędzi [stopnie]"
                  name="bottomAngle"
                  options={bottomAngle}
                />
              </SinglePos>
              <SinglePos>
                <FormikControl
                  control="chakraRadio"
                  label="Rodzaj pilników do ostrzenia"
                  name="diamond"
                  options={diamond}
                />
              </SinglePos>
              <SinglePos>
                <FormikControl
                  control="chakraRadio"
                  label="Smarowanie na śnieg"
                  name="snow"
                  options={snow}
                />
              </SinglePos>
              <SinglePos>
                <FormikControl
                  control="chakraRadio"
                  label="Rodzaj smaru"
                  name="fluor"
                  options={fluor}
                />
              </SinglePos>
              {/* <FormikControl
                control="date"
                label="Pick a date"
                name="pickupDate"
              /> */}
              <SinglePos>
                <RecaptchaStyling>
                  <ReCAPTCHA
                    sitekey="6LfLTc0ZAAAAAHM_OJKPNxwYr0aeEI31ZkjZ7MoO"
                    onChange={() => setDisableSubmit(false)}
                  />
                </RecaptchaStyling>
              </SinglePos>
              <SinglePos>
                <Button
                  my="2vw"
                  leftIcon="arrow-forward"
                  variantColor="teal"
                  type="submit"
                  disabled={
                    !formik.isValid ||
                    !formik.dirty ||
                    formik.isSubmitting ||
                    disableSubmit
                  }>
                  Wyślij
                  {loadingMessage === true && <Spinner color="red.500" />}
                </Button>
              </SinglePos>
            </FormWrapper>
          )}
        </Formik>
        <MessageStyles>{message}</MessageStyles>
      </div>
    </OrderFormStyles>
  );
};

export default OrderForm;
