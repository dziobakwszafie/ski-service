import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import OrderSummary from "./index";
import { Provider } from "react-redux";
import store from "../../../../redux/reducers";

describe("OrderSummary", () => {
  test("render default OrderSummary component", () => {
    render(
      <Provider store={store}>
        <OrderSummary />
      </Provider>
    );
  });
  // it("form can be submited", async () => {
  //   const onSubmit = jest.fn();
  //   const { queryByTestId } = render(
  //     <Provider store={store}>
  //       <LoginComponent onSubmit={onSubmit} />
  //     </Provider>
  //   );
  //   fireEvent.submit(queryByTestId("formToTest"));

  //   await waitFor(() => {
  //     expect(onSubmit).toHaveBeenCalled();
  //   });
  // });
});
