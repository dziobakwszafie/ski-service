import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../../../components/FormikControl/FormikControl";
import styled from "styled-components";
import axios from "axios";
import { Button } from "@chakra-ui/core";
import ReCAPTCHA from "react-google-recaptcha";
import { queryForTitle } from "../../../../styles/devices";
import colors from "../../../../styles/colors";

const OrderFormStyles = styled.div`
  display: flex;
  margin-top: 3vw;
  margin-bottom: 5vw;
  width: 90%;
`;

const OrderformTitleStyle = styled.h3`
  ${queryForTitle}
  color: ${colors.text.Primary3}
`;

const OrderForm = () => {
  const [disableSubmit, setDisableSubmit] = useState(true);
  const sideAngle = [
    { key: "89 stopni", value: "89" },
    { key: "88 stopni", value: "88" },
    { key: "87 stopni", value: "87" },
  ];
  const bottomAngle = [
    { key: "0,0 stopni", value: "0,0" },
    { key: "0,5 stopnia", value: "0,5" },
    { key: "0,7 stopnia", value: "0,7" },
  ];
  const diamond = [
    { key: "Tuning diamentami", value: "tak" },
    { key: "Zwykłe ostrzenie", value: "nie" },
  ];
  const snow = [
    { key: "Mokry", value: "mokry" },
    { key: "Zwykły", value: "zwykły" },
    { key: "Zmrożony", value: "zmrożony" },
  ];
  const fluor = [
    { key: "Smarowanie smarem fluorowym", value: "Fluor" },
    { key: "Smarowanie smarem hydrokarbonowym", value: "Hydrocarbon" },
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
    skis: Yup.string().required("Required"),
    length: Yup.string().required("Required"),
    sideAngle: Yup.string().required("Required"),
    bottomAngle: Yup.string().required("Required"),
    diamond: Yup.string().required("Required"),
    snow: Yup.string().required("Required"),
    fluor: Yup.string().required("Required"),
    // pickupDate: Yup.date().required("Required").nullable(),
  });

  let [successMessage, setMessage] = useState();

  const onSubmit = (values) => {
    console.log("Form data", values);
    console.log("Saved data", JSON.parse(JSON.stringify(values)));
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
        (successMessage = res.data ? "Zamówienie wysłano" : "Coś nie pykło")
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
            <Form>
              <FormikControl
                control="chakraInput"
                type="skis"
                label="Model nart"
                name="skis"
              />
              <FormikControl
                control="chakraInput"
                type="length"
                label="Długość"
                name="length"
              />
              <FormikControl
                control="chakraRadio"
                label="Kąt boczny krawędzi"
                name="sideAngle"
                options={sideAngle}
              />
              <FormikControl
                control="chakraRadio"
                label="Kąt dolny krawędzi"
                name="bottomAngle"
                options={bottomAngle}
              />
              <FormikControl
                control="chakraRadio"
                label="Tuning krawędzi"
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
            </Form>
          )}
        </Formik>
        {successMessage}
      </div>
    </OrderFormStyles>
  );
};

export default OrderForm;
