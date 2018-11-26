import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import ShareButton from './ShareButton';
import Day from './Day';

import { getRecommendations } from '../api/api';
import { addMultipleTracks } from '../redux';

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

const styles = {
  button: {
    fontSize: '20px',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '20px',
  }
};

class Calendar extends React.Component {
  render() {
    const { classes } = this.props;
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
<div className={classes.container} style={{display: this.props.mode === 'view' ? 'none' : 'flex'}}>
  <Button
    variant="outlined"
    className={classes.button}
    onClick={
    () => getRecommendations(this.props.token, this.props.tracks)
    .then(res => this.props.addMultipleTracks(res.tracks))
    }
  >Recommended autofill
  </Button>
  <ShareButton />
</div>
<div id="bottom" class="collectonme"></div>
</div>
);
  }
}

const mapStateToProps = ({ tracks, token }) => ({
  token,
  tracks,
});

export default connect(mapStateToProps, {addMultipleTracks})(withStyles(styles)(Calendar));