import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import ShareButton from './ShareButton';
import Day from './Day';

import { getRecommendations } from '../api/api';
import { addRecommendations } from '../redux';

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
<section id="calendar" className="collectonme">
  {
    weeks.map((week) => (
    <div id={week.id} key={week.id} className="week">
      {
        week.days.map((day) => {
          if (day === null) return <div className="day noDate"></div>;
          else {
            const currentTrack = this.props.tracks[day - 1];
            return <Day
                      date={day}
                      key={day}
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
{
  this.props.mode === 'view'
    ? null
    : (
      <div className={classes.container}>
        <Button
          variant="outlined"
          className={classes.button}
          onClick={
          () => getRecommendations(this.props.token, this.props.tracks)
          .then(res => this.props.addRecommendations(res.tracks))
          }
        >
          Recommended autofill
        </Button>
        <ShareButton />
      </div>
    )
}
<div id="bottom" className="collectonme"></div>
</div>
);
  }
}

const mapStateToProps = ({ tracks, token }) => ({
  token,
  tracks,
});

export default connect(mapStateToProps, {addRecommendations})(withStyles(styles)(Calendar));