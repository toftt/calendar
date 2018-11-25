import SpotifyWebApi from 'spotify-web-api-js';
import Q from 'q';

const Spotify = new SpotifyWebApi();
Spotify.setPromiseImplementation(Q);

// searching for a track
export const getTracks = (token, query) => {
  Spotify.setAccessToken(token);
  
  return Spotify
    .searchTracks(query, { limit: 10 });
};

export const getMultipleTracks = (token, ids) => {
  Spotify.setAccessToken(token);
  return Spotify.getTracks(ids);
};