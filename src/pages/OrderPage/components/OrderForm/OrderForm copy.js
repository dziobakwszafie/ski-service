import React from "react";
import { useFormik } from "formik";
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

const validationSchema = Yup.object({
  name: Yup.string().required("Wymagane"),
  email: Yup.string().required("Wymagane").email("Zły format"),
});

const OrderForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
    // validate: (values) => {
    //   let errors = {};

    //   if (!values.name) {
    //     errors.name = "Required";
    //   }

    //   if (!values.email) {
    //     errors.email = "Required";
    //   } else if (
    //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    //   ) {
    //     errors.email = "Invalid email format";
    //   }

    //   return errors;
    // },
  });

  console.log(formik.errors, formik.touched);

  return (
    <Styles>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // value={formik.values.name}
          {...formik.getFieldProps("name")}
        ></input>
        {formik.touched.name && formik.errors.name ? (
          <div className="red">{formik.errors.name}</div>
        ) : null}
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // value={formik.values.email}
          {...formik.getFieldProps("email")}
        ></input>
        {formik.touched.email && formik.errors.email ? (
          <div className="red">{formik.errors.email}</div>
        ) : null}
        <button>Submit</button>
      </form>
    </Styles>
  );
};

export default OrderForm;
