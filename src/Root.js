import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducer, setToken } from './redux'

import SubRoot from './SubRoot';

import authorize from './api/auth';

const store = createStore(reducer);
const token = authorize();

store.dispatch(setToken(token));

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <SubRoot />
      </Provider>
    );
  }
}

export default Root;
