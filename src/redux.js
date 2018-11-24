const defaultState = {
  token: null,
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        token: action.token,
      };
    default:
      return state
  }
};

export const setToken = token => ({
  type: 'SET_TOKEN',
  token,
})