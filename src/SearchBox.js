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
import {getTracks, getRecommedations, getMe, createPlaylist, addTrackToPlaylist} from './api/api';

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
      recommended_tracks: []
    };
    this.setArtists = this.setArtists.bind(this);
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
      console.log("hello from recommendations")
      console.log("state");
      this.setState({ recommended_tracks: data.tracks});
      console.log(this.state);
    });
    getMe(this.props.token).then((data) => {
      console.log("hello from me")
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
        console.log("hello from add track to playlist")
        console.log("data");
        console.log(data);
    });

  }

  setArtists(track) {
      console.log("hello from setArtists");
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