import SpotifyWebApi from 'spotify-web-api-js';
import Q from 'q';

const Spotify = new SpotifyWebApi();
Spotify.setPromiseImplementation(Q);

export const getTracks = (token, query) => {
  Spotify.setAccessToken(token);
  
  return Spotify
    .searchTracks(query, { limit: 10 });
}