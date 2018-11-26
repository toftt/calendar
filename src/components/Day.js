import React from 'react';

import TrackModal from './TrackModal';

const currentFakeDay = 6;

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    console.log(this.state);
    this.setState({ open: false });
  };

  render() {
    const { date, track, toggleDrawer, mode } = this.props;

    const valid = (track && date <= currentFakeDay) || mode === 'edit';
    const imageUrl = track && track.album.images[0].url;
    const show = valid && imageUrl;
    
    let onClick = () => {};
    if (mode === 'edit' && !show) onClick = () => toggleDrawer(true, date);
    else if (mode === 'edit' && show) onClick = this.handleOpen;
    else {
      if (show) onClick = this.handleOpen;
    } 

    return (
        <React.Fragment>
        <div
          className="day past"
          style={{
            backgroundImage: `url(${show ? imageUrl : 'http://www.designcouch.com/assets/images/christmaspresent11.svg'})`,
            backgroundSize: show ? '100% 100%' : '45%',
          }}
          onClick={onClick}
        >
          <span className="date">
            {date}
          </span>
        </div>
        <TrackModal
            open={this.state.open}
            track={track}
            handleClose={() => this.handleClose()}
          />
        </React.Fragment>
    );
  }
}

export default Day;