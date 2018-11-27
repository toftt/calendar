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

  const n = 5;

  /*
  * removes undefined tracks and select 5 tracks randomly because
  * it is allowed up to 5 seed values
  * */
  const addedTracks = tracks.filter(t => t)
                          .map(x => ({ x, r: Math.random() }))
                          .sort((a, b) => a.r - b.r)
                          .map(a => a.x)
                          .slice(0, n);

  const obj = {
    seed_tracks: addedTracks.map(t => t.id),
    limit: 24 - addedTracks.length,
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

/*json -> {user_id:<user_id>, name:<name>, description:<description>} */
export const createPlaylist = (token, json) => {
    Spotify.setAccessToken(token);

    return Spotify
        .createPlaylist(json);
};

/*json -> {"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M"], "playlist_id":<playlist_id>} */
export const addTrackToPlaylist = (token, playlistId, uris) => {
    Spotify.setAccessToken(token);

    return Spotify
        .addTracksToPlaylist(playlistId,uris);
};

export const getCurrentUsersPlaylists = (token) => {
    Spotify.setAccessToken(token);

    return Spotify
        .getUserPlaylists();
};