const defaultState = {
  token: null,
  tracks: [],
};

export const reducer = (state = defaultState, action) => {
  console.log(state);
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'ADD_TRACK':
      return {
        ...state,
        tracks: [...state.tracks, action.track],
      };
    case 'ADD_MULTIPLE_TRACKS':
      return {
        ...state,
        tracks: [...state.tracks, ...action.tracks]
      };
    default:
      return state
  }
};

export const setToken = (token) => ({
  type: 'SET_TOKEN',
  token,
})

export const addTrack = (track) => ({
  type: 'ADD_TRACK',
  track,
});

export const addMultipleTracks = (tracks) => ({
  type: 'ADD_MULTIPLE_TRACKS',
  tracks,
});