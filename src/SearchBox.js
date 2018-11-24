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
import { getTracks } from './api/api';

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
      results: [],
    }
  }

  onChange = (e) => {
    e.preventDefault();
    this.setState({ input: e.target.value });
  } 

  onSubmit = (e) => {
    e.preventDefault();
    getTracks(this.props.token, this.state.input).then((data) => {
      console.log(data.tracks);
      this.setState({ results: data.tracks.items });
    });
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