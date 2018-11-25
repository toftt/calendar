import React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import authorize from './api/auth';
import {
    getTracks,
    getRecommedations,
    getMe,
    createPlaylist,
    addTrackToPlaylist,
    getCategories, getCategoryPlaylists, getPlaylistTracks, startPlayback, pausePlayback,
} from './api/api';

const styles = theme => ({
  card: {
    display: 'flex',
  },
  content: {
    flex: '1 0 auto',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

class SearchBox extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      input: '',
      user_id:'',
      playlist_id:'',
      // needs to push values to array when pushing add button
      seed_artists: ['1Cs0zKBU1kc0i8ypK3B9ai', '5WUlDfRSoLAfcVSX1WnrxN', '5fMUXHkw8R8eOP2RNVYEZX'],
      seed_tracks:  ['2c7GlMNmF7pbohjykutmLP', '0c6xIDDpzE81m2q797ordA'],
      results:  [],
      recommended_tracks: [],
      category_items: [],
      category_playlists: {}
    };
    this.getFilteredCategories = this.getFilteredCategories.bind(this);
    this.getAllCategoryPlaylists = this.getAllCategoryPlaylists.bind(this)
  }

  onChange = (e) => {
    e.preventDefault();
    this.setState({ input: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    getTracks(this.props.token, this.state.input).then((data) => {
      console.log(data.tracks);
      console.log("hello");
      console.log(this.state);
      this.setState({ results: data.tracks.items });
      console.log("after setting state");
      console.log(this.state);
    });
    getRecommedations(this.props.token, {seed_artists: this.state.seed_artists, seed_tracks: this.state.seed_tracks}).then((data) => {
      console.log("hello from recommendations");
      console.log("state");
      this.setState({ recommended_tracks: data.tracks});
      console.log(this.state);
    });
    getMe(this.props.token).then((data) => {
      console.log("hello from me");
      console.log("data");
      console.log(data);
      this.setState({ user_id: data.id});
      console.log(this.state);
    });
    createPlaylist(this.props.token, {name:"Christmas Playlist", description:"Made with love"}).then((data) => {
        console.log("hello from create playlist")
        console.log("data");
        console.log(data);
        this.setState({ playlist_id: data.id});
        console.log(this.state);
    });
    addTrackToPlaylist(this.props.token, "5BzgzxzODrAmDqgBwcKoyN",["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M"]).then((data) => {
        console.log("hello from add track to playlist");
        console.log("data");
        console.log(data);
    });
    //this.getFilteredCategories();
    this.getAllCategoryPlaylists();
    getPlaylistTracks(this.props.token, "37i9dQZF1DX7YCknf2jT6s").then((data) => {
        console.log("hello from get playlist tracks");
        console.log("data");
        console.log(data.items);
    });
    //startPlayback(this.props.token, {'uris':["spotify:track:4iV5W9uYEdYUVa79Axb7Rh"]});
    pausePlayback(this.props.token);
  };

  getFilteredCategories = () => {
      console.log("hello from get categories");
      this.state.category_items = getCategories(this.props.token);
      console.log("state");
      console.log(this.state)
  };

  getAllCategoryPlaylists() {
    console.log("hello from category playlists");
    //TODO ceren: Remove this line when the api calls are sync
    this.state.category_items = [ {
        "href" : "https://api.spotify.com/v1/browse/categories/toplists",
        "icons" : [ {
            "height" : 275,
            "url" : "https://datsnxq1rwndn.cloudfront.net/media/derived/toplists_11160599e6a04ac5d6f2757f5511778f_0_0_275_275.jpg",
            "width" : 275
        } ],
        "id" : "toplists",
        "name" : "Top Lists"
    }, {
        "href" : "https://api.spotify.com/v1/browse/categories/mood",
        "icons" : [ {
            "height" : 274,
            "url" : "https://datsnxq1rwndn.cloudfront.net/media/original/mood-274x274_976986a31ac8c49794cbdc7246fd5ad7_274x274.jpg",
            "width" : 274
        } ],
        "id" : "mood",
        "name" : "Mood"
    }, {
        "href" : "https://api.spotify.com/v1/browse/categories/party",
        "icons" : [ {
            "height" : 274,
            "url" : "https://datsnxq1rwndn.cloudfront.net/media/derived/party-274x274_73d1907a7371c3bb96a288390a96ee27_0_0_274_274.jpg",
            "width" : 274
        } ],
        "id" : "party",
        "name" : "Party"
    }];
    this.state.category_items.forEach((item) => {
      getCategoryPlaylists(this.props.token, item.id).then((data) => {
        console.log("hello from get category playlist for item: ");
        console.log(item.id);
        console.log("data");
        console.log(data);
        this.state.category_playlists[item.id] = data.playlists.items;
        console.log("state after adding item: ");
        console.log(item.id);
        console.log(this.state);
      });
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <div id="search_box">
        <List>
        <ListItem>
        <form onSubmit={(e) => this.onSubmit(e)}>
          <TextField
            id="standard-name"
            label="Name"
            className={classes.textField}
            margin="normal"
            onChange={(e) => this.onChange(e)}
            value={this.state.input}
        />
        </form>
        </ListItem>
        {
          this.state.results.map((song) => (
            <ListItem>
              <Card className={classes.card}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">{song.name}</Typography>
                  <Typography variant="subtitle1" color="textSecondary">{song.artists[0].name}</Typography>
                </CardContent>
              </Card>
            </ListItem>
          ))
        }
        </List>
      </div>
    );
  }
}

const mapStateToProps = ({ token }) => {
  return { token };
};

export default connect(mapStateToProps)(withStyles(styles)(SearchBox));