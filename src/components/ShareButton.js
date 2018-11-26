import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
  button: {
    fontSize: '20px',
  },
});

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const getUrl = (tracks) => {
  if (tracks.filter(x => x).length !== 24) return 'You need to complete the calendar.';

  const origin = window.location.origin;
  const ids = tracks.map(track => track.id);
  return `${origin}?tracks=${ids.join('_')}`;
} 

class ShareButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  copyToClipboard = (e) => {
    this.textArea.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
      <Button
        onClick={this.handleOpen}
        className={classes.button}
        variant="outlined"
      >
        Share calendar
      </Button>
              <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.open}
              onClose={this.handleClose}
            >
              <div style={getModalStyle()} className={classes.paper}>
                <Typography variant="h6" id="modal-title">
                <Input
                  value={getUrl(this.props.tracks)}
                  style={{width: '100%', overflow: 'hidden', resize: 'none', whiteSpace: 'nowrap'}}
                  inputComponent="textarea"
                  inputRef={(textarea) => this.textArea = textarea}
                  onClick={this.copyToClipboard}
                  readOnly
                />
                </Typography>
              </div>
            </Modal>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tracks: state.tracks,
});

export default connect(mapStateToProps)(withStyles(styles)(ShareButton));