import React from 'react';
import { render } from '@testing-library/react';
import SignupComponent from './index';
import { Provider } from 'react-redux';
import store from '../../../../redux/reducers';

describe('SignupComponent', () => {
  test('render default SignupComponent component', () => {
    render(
      <Provider store={store}>
        <SignupComponent />
      </Provider>
    );
  });
});
