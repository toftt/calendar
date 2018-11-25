import SpotifyWebApi from 'spotify-web-api-js';
import Q from 'q';

const CATEGORY_LIST = ['toplists', 'pop', 'hiphop', 'rock', 'workout', 'chill', 'edm_dance', 'mood']

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

export const startPlayback = (token, json) => {
  Spotify.setAccessToken(token);

  return Spotify
      .play(json);
};

export const pausePlayback = (token) => {
  Spotify.setAccessToken(token);

  return Spotify
      .pause();
};

export const getRecommendations = (token, tracks) => {
  Spotify.setAccessToken(token);

  const obj = {
    seed_tracks: tracks.map(t => t.id),
    limit: 24 - tracks.length,
  };

  return Spotify
      .getRecommendations(obj);
};

export const getCategories = (token) => {
  Spotify.setAccessToken(token);

  let items = []
  return Spotify.getCategories().then((data) => {
      data.categories.items.forEach((item) => {
          if (CATEGORY_LIST.includes(item.id)) {
              items.push(item);
          }
      });
      return items;
  });
};

export const getCategoryPlaylists = (token, categoryId) => {
  Spotify.setAccessToken(token);

  return Spotify
      .getCategoryPlaylists(categoryId);
};