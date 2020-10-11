import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
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
