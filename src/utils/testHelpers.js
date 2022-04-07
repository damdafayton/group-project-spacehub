/* eslint-disable import/no-extraneous-dependencies */
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../redux/configure';

const renderWthRedux = (Component) => ({
  ...render(
    <Provider store={store}>
      {Component}
    </Provider>,
  ),
  store,
});

export default renderWthRedux;
