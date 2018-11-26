import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducer, setToken } from '../redux'

import SubRoot from './SubRoot';
import ViewRoot from './ViewRoot';

import authorize from '../api/auth';

const store = createStore(reducer);
const { token, hashState } = authorize();

store.dispatch(setToken(token));

class Root extends Component {
  render() {
    if (hashState !== 'null') {
      return (
      <Provider store={store}>
        <ViewRoot trackIds={hashState.split('_')} />
      </Provider>
      );
    }
    return (
      <Provider store={store}>
        <SubRoot />
      </Provider>
    );
  }
}

export default Root;
