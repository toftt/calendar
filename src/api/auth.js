// Get the hash of the url
const authorize = () => {
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

  // Set token
  let _token = hash.access_token || getLocalStorageToken();

  const authEndpoint = 'https://accounts.spotify.com/authorize';

  // Replace with your app's client ID, redirect URI and desired scopes
  const clientId = 'de8a7d941d164ea4854a21ebaca90c71';
  const redirectUri = 'http://09de258c.eu.ngrok.io';
  const scopes = [
    'user-top-read',
    'user-modify-playback-state'
  ];

  const urlParams = new URLSearchParams(window.location.search);
  const tracks = urlParams.get('tracks');
  const state = tracks;


  // If there is no token, redirect to Spotify authorization
  if (!_token) {
    window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true&state=${state}`;
  }

  // case 1: user is in view mode and has been redirected from spotify -- tracks are in hash.state (the url hash)
  // case 2: user is in view mode and has already authorized -- tracks are in tracks (params)
  // case 3: user is in edit mode and has already authorized -- there are no tracks
  const hashState = hash.state || tracks || 'null';

  saveTokenInfo(_token, hash.expires_in);
  return ({ token: _token, hashState});
}

const getLocalStorageToken = () => {
  const token = localStorage.getItem('token');
  const expirationTime = localStorage.getItem('expirationTime');
  const now = new Date();

  if (!token || now.getTime() > expirationTime) return undefined;
  return token;
};

const saveTokenInfo = (token, expiresIn) => {
  localStorage.setItem('token', token);
  localStorage.setItem('expirationTime', (new Date()).getTime + expiresIn);
}



export default authorize;