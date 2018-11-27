const defaultState = {
  token: null,
  tracks: Array.apply(null, Array(24)),
  searchResults: [],
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'SET_TRACK':
      return {
        ...state,
        tracks: state.tracks.map((track, index) => {
          if (index + 1 !== action.index) return track;
          else return action.track;
        }),
      };
    case 'REPLACE_ALL_TRACKS':
      return {
        ...state,
        tracks: action.tracks,
      };
    case 'ADD_RECOMMENDATIONS':
      const recTracks = action.tracks;
      return {
        ...state,
        tracks: state.tracks.map((track) => {
          if (track) return track;
          else return recTracks.shift();
        }),
      };
    case 'SET_SEARCH_RESULTS':
      return {
        ...state,
        searchResults: action.tracks,
      };
    default:
      return state
  }
};

export const setToken = (token) => ({
  type: 'SET_TOKEN',
  token,
})

export const setTrack = (track, index) => ({
  type: 'SET_TRACK',
  index,
  track,
});

export const replaceAllTracks = (tracks) => ({
  type: 'REPLACE_ALL_TRACKS',
  tracks,
});

export const addRecommendations = (tracks) => ({
  type: 'ADD_RECOMMENDATIONS',
  tracks,
});

export const setSearchResults = (tracks) => ({
  type: 'SET_SEARCH_RESULTS',
  tracks,
});