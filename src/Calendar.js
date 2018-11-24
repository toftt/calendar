import React from 'react';
import { connect } from 'react-redux';

import present from './present.svg';

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
  5: 'five',
};

const weeks = [
  {
    id: 'one',
    days: [null, null, null, null, null, null, 1],
  },
  {
    id: 'two',
    days: [2, 3, 4, 5, 6, 7, 8],
  },
  {
    id: 'three',
    days: [9, 10, 11, 12, 13, 14, 15],
  },
  {
    id: 'four',
    days: [16, 17, 18, 19, 20, 21, 22],
  },
  {
    id: 'five',
    days: [23, 24, null, null, null, null, null],
  },

];
const Day = ({date, imageUrl}) => (
  <div className="day" style={{
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: '100% 100%',
    }}>
    <span className="date">
      {date}
    </span>
  </div>
);

class Calendar extends React.Component {
  render() {
   return (
  <div>
<section id="modal">
  <div class="wrapper">
    <div class="content">
      <div class="close"></div>
      <div class="box"></div>
    </div>
  </div>
</section>
<section id="calendar" class="collectonme">
  <DayLabels />
  {
    weeks.map((week) => (
    <div id={week.id} className="week">
      {
        week.days.map((day) => {
          if (day === null) return <div className="day noDate"></div>;
          else {
            const currentTrack = this.props.tracks[day - 1];
            const imageUrl = currentTrack ? currentTrack.album.images[0].url : '';
            console.log(imageUrl);
            return (
              <Day date={day} imageUrl={imageUrl} />
          )
          }
        })
      }
    </div>
    ))
  }
</section>
<div id="bottom" class="collectonme"></div>
</div>
);
  }
}

const mapStateToProps = ({ tracks }) => ({
  tracks,
});

export default connect(mapStateToProps)(Calendar);