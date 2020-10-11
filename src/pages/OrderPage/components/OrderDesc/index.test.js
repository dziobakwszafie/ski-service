import React from "react";
import { render } from "@testing-library/react";
import OrderDesc from "./index";
import { Provider } from "react-redux";
import store from "../../../../redux/reducers";

describe("OrderDesc", () => {
  test("render default OrderDesc component", () => {
    render(
      <Provider store={store}>
        <OrderDesc />
      </Provider>
    );
  });
});
