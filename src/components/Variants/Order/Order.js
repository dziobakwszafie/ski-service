import React from "react";
import { Container } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
import styled from "styled-components";
import { sendDataToApi } from "./api";
// import Input from "./Input";

const Styles = styled.div`
  .container {
    max-width: 100vw;
  }
`;

// const validate = formData => {
//   const errors = {};

//   if (!formData.firstName) {
//     errors.firstName = "dfgdfgv";
//   }
//   return errors;
// };

const Order = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <Styles>
      <Container
        id="intro"
        className="d-flex justify-content-center align-items-center"
      >
        <form onSubmit={handleSubmit(sendDataToApi)}>
          <div>
            <label>First Name</label>
            <div>
              <Field
                name="firstName"
                component="input"
                type="text"
                placeholder="First Name"
              />
            </div>
          </div>
          <div>
            <label>Email</label>
            <div>
              <Field
                name="email"
                component="input"
                type="email"
                placeholder="Email"
              />
            </div>
          </div>
          <div>
            <label>Favorite Color</label>
            <div>
              <Field name="favoriteColor" component="select">
                <option />
                <option value="ff0000">Red</option>
                <option value="00ff00">Green</option>
                <option value="0000ff">Blue</option>
              </Field>
            </div>
          </div>
          <div>
            <button type="submit" disabled={pristine || submitting}>
              Submit
            </button>
            <button type="button" onClick={reset} disabled={pristine}>
              Reset
            </button>
          </div>
        </form>
      </Container>
    </Styles>
  );
};

export default reduxForm({
  form: "contact"
  // validate
})(Order);
