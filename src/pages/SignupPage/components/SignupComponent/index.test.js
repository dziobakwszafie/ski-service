import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import SignupComponent from "./index";
import store from "../../../../redux/reducers";

describe("SignupComponent", () => {
  test("render default SignupComponent component", () => {
    render(
      <Provider store={store}>
        <SignupComponent />
      </Provider>
    );
  });
});
