import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './redux/reducers';

import App from './App';

describe('App', () => {
  test('render App component', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});
