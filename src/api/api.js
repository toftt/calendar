import SpotifyWebApi from 'spotify-web-api-js';
import Q from 'q';

const Spotify = new SpotifyWebApi();
Spotify.setPromiseImplementation(Q);
const DAYS = 24;

/*Store user id after this call to use while creating a playlist*/
export const getMe = (token) => {
    Spotify.setAccessToken(token);

    return Spotify
        .getMe();
}



export const getTracks = (token, query) => {
  Spotify.setAccessToken(token);

  return Spotify
    .searchTracks(query, { limit: 10 });
}

/*json -> {seed_artists:['6mfK6Q2tzLMEchAr0e9Uzu', '4DYFVNKZ1uixa6SQTvzQwJ'], seed_tracks:['4uLU6hMCjMI75M1A2tKUQC']} */
export const getRecommedations = (token, json) => {
    console.log("TOKEN:");
    console.log(token);
    Spotify.setAccessToken(token);
    json['limit'] = DAYS - json['seed_tracks'].length;
    console.log("json");
    console.log(json);
    return Spotify
        .getRecommendations(json);
}

/*json -> {user_id:<user_id>, name:<name>, description:<description>} */
export const createPlaylist = (token, json) => {
    Spotify.setAccessToken(token);

    return Spotify
        .createPlaylist(json);
}

/*json -> {"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M"], "playlist_id":<playlist_id>} */
export const addTrackToPlaylist = (token, playlistId, uris) => {
    Spotify.setAccessToken(token);

    return Spotify
        .addTracksToPlaylist(playlistId,uris);
}


