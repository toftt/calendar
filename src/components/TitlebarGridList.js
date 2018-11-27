import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import { getCategories, getCategoryPlaylists, getPlaylistTracks } from '../api/api';
import { setSearchResults } from '../redux';

const getTracksFromCategory = (token, categoryId) => {
  return getCategoryPlaylists(token, categoryId)
    .then(data => getPlaylistTracks(token, data.playlists.items[0].id))
    .then(data => data.items.map(playlistItem => playlistItem.track));
};

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

 
class TitlebarGridList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categories: [] };
  }


  componentWillMount() {
    getCategories(this.props.token)
      .then(data => this.setState({ categories: data }));
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          </GridListTile>
          {this.state.categories.map(tile => (
            <GridListTile
              key={tile.id}
              onClick={() => getTracksFromCategory(this.props.token, tile.id).then(tracks => this.props.setSearchResults(tracks))}
            >
              <img src={tile.icons[0].url} alt={tile.name} />
              <GridListTileBar
                title={tile.name}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({token}) => ({token});

export default connect(mapStateToProps, { setSearchResults })(withStyles(styles)(TitlebarGridList));
