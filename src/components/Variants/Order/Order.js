import React from "react";
import { Container } from "react-bootstrap";
import { Field, reduxForm, Form } from "redux-form";
import styled from "styled-components";
import { sendDataToApi } from "./api";

const Styles = styled.div`
  .container {
    max-width: 100vw;
  }
`;

const Order = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <Styles>
      <Container
        id="intro"
        className="d-flex justify-content-center align-items-center"
      >
        <Form onSubmit={handleSubmit(sendDataToApi)}>
          <div>
            <label>Numer zamówienia</label>
            <div>
              <Field
                name="orderNumber"
                component="input"
                type="text"
                placeholder="Numer zamówienia"
              />
            </div>
          </div>
          <div>
            <label>Imię i nazwisko</label>
            <div>
              <Field
                name="name"
                component="input"
                type="text"
                placeholder="Imię i nazwisko"
              />
            </div>
          </div>
          <div>
            <label>Numer telefonu</label>
            <div>
              <Field
                name="phone"
                component="input"
                type="text"
                placeholder="Numer telefonu"
              />
            </div>
          </div>
          <div>
            <label>Model narty</label>
            <div>
              <Field
                name="model"
                component="input"
                type="text"
                placeholder="Model narty"
              />
            </div>
          </div>
          <div>
            <label>Kąt boczny krawędzi</label>
            <div>
              <Field name="sideAngle" component="select">
                <option />
                <option value="ff0000">86 stopni</option>
                <option value="00ff00">87 stopni</option>
                <option value="ff0000">88 stopni</option>
                <option value="00ff00">89 stopni</option>
                <option value="00ff00">90 stopni</option>
              </Field>
            </div>
          </div>
          <div>
            <label>Podniesienie krawędzi</label>
            <div>
              <Field name="slideAngle" component="select">
                <option />
                <option value="ff0000">0.0 stopni</option>
                <option value="ff0000">0.5 stopnia</option>
                <option value="00ff00">0.75 stopnia</option>
                <option value="ff0000">1 stopień</option>
              </Field>
            </div>
          </div>
          <div>
            <label>Wybierz rodzaj smaru</label>
            <div>
              <Field name="wax" component="select">
                <option />
                <option value="ff0000">na śnieg mokry</option>
                <option value="ff0000">na śnieg normalny</option>
                <option value="00ff00">na śnieg zmrożony</option>
              </Field>
            </div>
          </div>
          <div>
            <label htmlFor="fluor">Smar Race z Fluorem</label>
            <div>
              <Field
                name="fluor"
                id="fluor"
                component="input"
                type="checkbox"
              />
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
        </Form>
      </Container>
    </Styles>
  );
};

export default reduxForm({
  form: "contact"
})(Order);
