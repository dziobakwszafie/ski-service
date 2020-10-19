import React from 'react';
import { render } from '@testing-library/react';
// import { fireEvent, waitFor } from "@testing-library/react";
import { Provider } from 'react-redux';
import LoginComponent from './index';
import store from '../../../../redux/reducers';

describe('LoginComponent', () => {
  test('render default LoginComponent component', () => {
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
  //   fireEvent.submit(queryByTestId("form"));

  //   await waitFor(() => {
  //     expect(onSubmit).toHaveBeenCalled();
  //   });
  // });
});
