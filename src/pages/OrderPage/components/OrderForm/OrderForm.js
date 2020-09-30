import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../../../components/FormikControl/FormikControl";
import styled from "styled-components";
import axios from "axios";
import { Button } from "@chakra-ui/core";
import ReCAPTCHA from "react-google-recaptcha";
import { queryForTitle } from "../../../../styles/devices";
import colors from "../../../../styles/colors";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/core";

const OrderFormStyles = styled.div`
  display: flex;
  margin-top: 3vw;
  margin-bottom: 5vw;
  width: 90%;
`;

const OrderformTitleStyle = styled.h3`
  ${queryForTitle}
  color: ${colors.text.Primary3};
`;

const FormWrapper = styled(Form)`
  * {
    margin-top: 2px;
    margin-bottom: 2px;
  }
`;

const MessageStyles = styled.p`
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

  const onSubmit = (values) => {
    console.log("Form data", values);
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
      console.log(res.data);

      setMessage(
        // (message = res.data ? "Zamówienie wysłano" : "Coś nie wyszło")
        (message = res.data ? (
          <Alert status="success">
            <AlertIcon />
            Zamówienie zostało wysłane!
          </Alert>
        ) : (
          <Alert status="error">
            <AlertIcon />
            Oj oj coś nie poszło
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
          onSubmit={onSubmit}
        >
          {(formik) => (
            <FormWrapper>
              <FormikControl
                control="chakraInput"
                type="skis"
                label="Model nart"
                name="skis"
              />
              <FormikControl
                control="chakraInput"
                type="length"
                label="Długość [cm]"
                name="length"
              />
              <FormikControl
                control="chakraRadio"
                label="Kąt boczny krawędzi [stopnie]"
                name="sideAngle"
                options={sideAngle}
              />
              <FormikControl
                control="chakraRadio"
                label="Kąt dolny krawędzi [stopnie]"
                name="bottomAngle"
                options={bottomAngle}
              />
              <FormikControl
                control="chakraRadio"
                label="Rodzaj pilników do ostrzenia"
                name="diamond"
                options={diamond}
              />
              <FormikControl
                control="chakraRadio"
                label="Smarowanie na śnieg"
                name="snow"
                options={snow}
              />
              <FormikControl
                control="chakraRadio"
                label="Rodzaj smaru"
                name="fluor"
                options={fluor}
              />
              {/* <FormikControl
                control="date"
                label="Pick a date"
                name="pickupDate"
              /> */}
              <ReCAPTCHA
                sitekey="6LfLTc0ZAAAAAHM_OJKPNxwYr0aeEI31ZkjZ7MoO"
                onChange={() => setDisableSubmit(false)}
              />
              <Button
                my="10px"
                leftIcon="arrow-forward"
                variantColor="teal"
                type="submit"
                disabled={
                  !formik.isValid ||
                  !formik.dirty ||
                  formik.isSubmitting ||
                  disableSubmit
                }
              >
                Submit
              </Button>
            </FormWrapper>
          )}
        </Formik>
        <MessageStyles>{message}</MessageStyles>
      </div>
    </OrderFormStyles>
  );
};

export default OrderForm;
