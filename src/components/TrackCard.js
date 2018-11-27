import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ClearIcon from '@material-ui/icons/Clear';

import { startPlayback, pausePlayback } from '../api/api';
import { removeTrack } from '../redux';

const styles = theme => ({
  card: {
    display: 'flex',
    flexGrow: 2,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 2,
  },
  content: {
    flex: '2 0 auto',
  },
  cover: {
    width: 151,
    flexShrink: 0,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
});

class TrackCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playing: false }
  }


  handleClick = (e) => {
    e.stopPropagation();
    if (this.state.playing === false) startPlayback(this.props.token, {uris: [this.props.track.uri]})
      .then(x => this.setState({ playing: true }));
    else pausePlayback(this.props.token).then(() => this.setState({ playing: false }));
  }

  render() {
    const { classes, theme, track, date, removeTrack, handleClose } = this.props;
    const { name, artists } = track;

    return (
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {name.length <= 23 ? name : name.substr(0, 23) + '...'}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {artists[0].name}
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <IconButton aria-label="Previous">
              {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            <IconButton
              aria-label="Play/pause"
              onClick={(e) => this.handleClick(e)}
            >
              <PlayArrowIcon className={classes.playIcon} />
            </IconButton>
            <IconButton aria-label="Next">
              {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton>
            {
              !this.props.canRemove
                ? null
                : (
                    <IconButton
                      aria-label="Clear"
                      onClick={() => {
                        handleClose()
                        removeTrack(date)
                      }}
                    >
                      <ClearIcon />
                    </IconButton>
                )
            }
          </div>
        </div>
        <CardMedia
          className={classes.cover}
          image={track.album.images[0].url}
          title="Live from space album cover"
        />
      </Card>
    );
  }
}

TrackCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

const mapStateToProps = ({ token }) => ({
  token,
});

export default connect(mapStateToProps, { removeTrack })(withStyles(styles, { withTheme: true })(TrackCard));
