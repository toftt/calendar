import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducer, setToken } from './redux'

import Menu from './Menu';
import authorize from './api/auth';

const store = createStore(reducer);
const token = authorize();

store.dispatch(setToken(token));

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Menu />
        </div>
      </Provider>
    );
  }
}

export default Root;
