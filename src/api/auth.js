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
  let _token = hash.access_token;

  const authEndpoint = 'https://accounts.spotify.com/authorize';

  // Replace with your app's client ID, redirect URI and desired scopes
  const clientId = 'de8a7d941d164ea4854a21ebaca90c71';
  const redirectUri = 'http://c836f32c.eu.ngrok.io';
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

  return ({ token: _token, hashState: hash.state});
}

export default authorize;