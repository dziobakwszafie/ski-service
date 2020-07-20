import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import * as Yup from "yup";

const Styles = styled.div`
  .red {
    color: red;
  }
  .green {
    color: green;
  }
`;

const initialValues = {
  name: "",
  email: "",
};

let onSubmit = (values, onSubmitProps) => {
  console.log(values);
  onSubmitProps.resetForm();
};

const validationSchema = Yup.object({
  name: Yup.string().required("Wymagane"),
  email: Yup.string().required("Wymagane").email("Zły format"),
});

//https://www.youtube.com/watch?v=rBOJzbFZAws&list=PLC3y8-rFHvwiPmFbtzEWjESkqBVDbdgGu&index=16
//https://codesandbox.io/s/formik-redux-yup-example-ezne7?file=/src/actions/message.js

const MakeOrderForm = () => {
  return (
    <Styles>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Form>
              <div className="form-control">
                <label htmlFor="name">Name</label>
                <Field type="text" id="name" name="name"></Field>
                <ErrorMessage name="name" />
              </div>
              <div className="form-control">
                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email"></Field>
                <ErrorMessage name="email" />
              </div>
              <button
                type="reset"
                disabled={!formik.dirty || formik.isSubmitting}
              >
                Reset
              </button>
              <button
                type="submit"
                disabled={
                  !formik.isValid || !formik.dirty || formik.isSubmitting
                }
              >
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </Styles>
  );
};

export default MakeOrderForm;
