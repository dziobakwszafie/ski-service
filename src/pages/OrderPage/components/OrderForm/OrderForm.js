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

let onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Wymagane"),
  email: Yup.string().required("Wymagane").email("Zły format"),
});

//https://www.youtube.com/watch?v=rBOJzbFZAws&list=PLC3y8-rFHvwiPmFbtzEWjESkqBVDbdgGu&index=16

const MakeOrderForm = () => {
  return (
    <Styles>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <Field
              type="text"
              id="name"
              name="name"
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.name}
            ></Field>
            <ErrorMessage name="name" />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.email}
            ></Field>
            <ErrorMessage name="email" />
            {/* {formik.touched.email && formik.errors.email ? (
            <div className="red">{formik.errors.email}</div>
          ) : null} */}
          </div>
          <button>Submit</button>
        </Form>
      </Formik>
    </Styles>
  );
};

export default MakeOrderForm;
