import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl/FormikControl";
import styled from "styled-components";

const OrderFormStyles = styled.div`
  display: flex;
`;

function FormikContainer() {
  const radioOptions1 = [
    { key: "Option 1", value: "rOption1" },
    { key: "Option 2", value: "rOption2" },
    { key: "Option 3", value: "rOption3" },
  ];
  const radioOptions2 = [
    { key: "Option 1", value: "rOption12" },
    { key: "Option 2", value: "rOption22" },
    { key: "Option 3", value: "rOption32" },
  ];
  const radioOptions3 = [
    { key: "Option 4", value: "rOption13" },
    { key: "Option 5", value: "rOption32" },
    { key: "Option 6", value: "rOption33" },
  ];
  const radioOptions4 = [
    { key: "Option 1", value: "rOption14" },
    { key: "Option 2", value: "rOption24" },
    { key: "Option 3", value: "rOption34" },
  ];

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    radioOption1: "",
    radioOption2: "",
    radioOption3: "",
    radioOption4: "",
    pickupDate: null,
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    radioOption1: Yup.string().required("Required"),
    radioOption2: Yup.string().required("Required"),
    radioOption3: Yup.string().required("Required"),
    radioOption4: Yup.string().required("Required"),
    pickupDate: Yup.date().required("Required").nullable(),
  });
  const onSubmit = (values) => {
    console.log("Form data", values);
    console.log("Saved data", JSON.parse(JSON.stringify(values)));
  };

  return (
    <OrderFormStyles>
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
                type="name"
                label="Name"
                name="name"
              />
              <FormikControl
                control="chakraInput"
                type="email"
                label="Email"
                name="email"
              />
              <FormikControl
                control="chakraInput"
                type="phone"
                label="Phone"
                name="phone"
              />
              <FormikControl
                control="radio"
                label="Radio topic"
                name="radioOption1"
                options={radioOptions1}
              />
              <FormikControl
                control="radio"
                label="Radio topic"
                name="radioOption2"
                options={radioOptions2}
              />
              <FormikControl
                control="radio"
                label="Radio topic"
                name="radioOption3"
                options={radioOptions3}
              />
              <FormikControl
                control="radio"
                label="Radio topic"
                name="radioOption4"
                options={radioOptions4}
              />
              <FormikControl
                control="date"
                label="Pick a date"
                name="pickupDate"
              />
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </OrderFormStyles>
  );
}

export default FormikContainer;
