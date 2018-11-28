import React from 'react';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';

import TrackCard from './TrackCard';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: '600px',
    backgroundColor: 'rgba(255,255,255,.4)',
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class TrackModal extends React.Component {
  render() {
    const { classes, open, date, handleClose } = this.props;

    return (
      <div>
              <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={open}
              onClose={() => handleClose()}
            >
              <div style={getModalStyle()} className={classes.paper}>
                <TrackCard
                  track={this.props.track}
                  date={date}
                  canRemove={this.props.mode === 'edit'}
                  canAdd={this.props.mode !== 'edit'}
                  handleClose={handleClose}
                />
              </div>
            </Modal>
        </div>
    );
  }
}

export default withStyles(styles)(TrackModal);