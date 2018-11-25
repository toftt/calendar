import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';


import ShareButton from './ShareButton';
import TrackModal from './TrackModal';

import { getRecommendations } from './api/api';
import { addMultipleTracks } from './redux';

const DayLabels = () => (
  <div id="day-labels">
    <div class="label">Sun</div>
    <div class="label">Mon</div>
    <div class="label">Tue</div>
    <div class="label">Wed</div>
    <div class="label">Thu</div>
    <div class="label">Fri</div>
    <div class="label">Sat</div>
</div>
);

const dayMap = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
};

const weeks = [
  {
    id: 'one',
    days: [1,2,3,4,5,6],
  },
  {
    id: 'two',
    days: [7,8,9,10,11,12],
  },
  {
    id: 'three',
    days: [13,14,15,16,17,18],
  },
  {
    id: 'four',
    days: [19,20,21,22,23,24],
  },
];

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
    if (mode === 'edit') onClick = () => toggleDrawer(true, date);
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

class Calendar extends React.Component {
  render() {
    const toggleDrawer = this.props.toggleDrawer;
   return (
  <div id="calendar_wrapper">
  <h1>Spotify Christmas Calendar</h1>
<section id="calendar" class="collectonme">
  {
    weeks.map((week) => (
    <div id={week.id} className="week">
      {
        week.days.map((day) => {
          if (day === null) return <div className="day noDate"></div>;
          else {
            const currentTrack = this.props.tracks[day - 1];
            return <Day
                      date={day}
                      track={currentTrack}
                      toggleDrawer={toggleDrawer}
                      mode={this.props.mode}
                    />
          }
        })
      }
    </div>
    ))
  }
</section>
<Button
  onClick={
  () => getRecommendations(this.props.token, this.props.tracks)
  .then(res => this.props.addMultipleTracks(res.tracks))
  }
>Recommended autofill
</Button>
<ShareButton />
<div id="bottom" class="collectonme"></div>
</div>
);
  }
}

const mapStateToProps = ({ tracks, token }) => ({
  token,
  tracks,
});

export default connect(mapStateToProps, {addMultipleTracks})(Calendar);