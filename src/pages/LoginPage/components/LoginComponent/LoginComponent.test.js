import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import LoginComponent from "./LoginComponent";
import { Provider } from "react-redux";
import store from "../../../../redux/reducers";

describe("LoginComponent", () => {
  test("render default LoginComponent component", () => {
    render(
      <Provider store={store}>
        <LoginComponent />
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
