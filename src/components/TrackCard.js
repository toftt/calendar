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
import PauseIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ClearIcon from '@material-ui/icons/Clear';

import { startPlayback, pausePlayback } from '../api/api';
import { removeTrack, play, pause } from '../redux';

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

  handleClick = (e) => {
    e.stopPropagation();

    const { currentlyPlaying, play, pause, track: { id } } = this.props;
    if (id === currentlyPlaying) pausePlayback(this.props.token).then(() => pause());
    else startPlayback(this.props.token, {uris: [this.props.track.uri]}).then(() => play(id));
  }

  render() {
    const { classes, theme, track, date, removeTrack, handleClose, currentlyPlaying } = this.props;
    const { name, artists, id } = track;

    const playing = id === currentlyPlaying;
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
            <IconButton disabled aria-label="Previous">
              <SkipPreviousIcon />
            </IconButton>
            <IconButton
              aria-label="Play/pause"
              onClick={(e) => this.handleClick(e)}
            >
              {
                playing
                  ? <PauseIcon className={classes.playIcon}  />
                  : <PlayArrowIcon className={classes.playIcon} />
              }
            </IconButton>
            <IconButton disabled aria-label="Next">
              <SkipNextIcon />
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
          title={`${track.album.name} Album Cover`}
        />
      </Card>
    );
  }
}

TrackCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

const mapStateToProps = ({ token, currentlyPlaying }) => ({
  token,
  currentlyPlaying,
});

export default connect(mapStateToProps, { removeTrack, play, pause })(withStyles(styles, { withTheme: true })(TrackCard));
