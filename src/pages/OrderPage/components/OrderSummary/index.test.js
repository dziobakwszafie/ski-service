import React from 'react';
import { render } from '@testing-library/react';
import OrderSummary from './index';
import { Provider } from 'react-redux';
import store from '../../../../redux/reducers';

describe('OrderSummary', () => {
  test('render default OrderSummary component', () => {
    render(
      <Provider store={store}>
        <OrderSummary />
      </Provider>
    );
  });
});
