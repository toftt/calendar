const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const CLIENT_ID = 'de8a7d941d164ea4854a21ebaca90c71';
const REDIRECT_URI = 'https://toftt.github.io/calendar/';
const SCOPES = [
  'user-top-read',
  'user-modify-playback-state',
  'playlist-modify-public',
  'playlist-modify-private'
];

// Get the hash of the url
const authorize = () => {
  const hash = parseHash();
  let token = hash.access_token;

  if (token) saveTokenInfo(token, hash.expires_in);
  else token = getLocalStorageToken();

  const urlParams = new URLSearchParams(window.location.search);
  const tracks = urlParams.get('tracks');
  const state = tracks;


  // If there is no token, redirect to Spotify authorization
  if (!token) {
    window.location = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join('%20')}&response_type=token&show_dialog=true&state=${state}`;
  }

  // case 1: user is in view mode and has been redirected from spotify -- tracks are in hash.state (the url hash)
  // case 2: user is in view mode and has already authorized -- tracks are in tracks (params)
  // case 3: user is in edit mode and has already authorized -- there are no tracks
  const hashState = hash.state || tracks || 'null';

  return ({ token, hashState});
}

const parseHash = () => {
  const hash = window.location.hash
    .substring(1)
    .split('&')
    .reduce(function (initial, item) {
      if (item) {
        var parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial;
    }, {});

  window.location.hash = '';

  return hash;
}

const getLocalStorageToken = () => {
  const token = localStorage.getItem('token');
  const expirationTime = localStorage.getItem('expirationTime');
  const now = new Date();

  if (!token || now.getTime() > expirationTime) return undefined;
  return token;
};

const saveTokenInfo = (token, expiresIn) => {
  const now = new Date();
  const expirationTime = now.getTime() + parseInt(expiresIn) * 1000;

  localStorage.setItem('token', token);
  localStorage.setItem('expirationTime', expirationTime);
}

export default authorize;