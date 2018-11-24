import React from 'react';

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

const days = () => {
  const currentYear = (new Date()).getFullYear();
  const weekDays = [];

  for (let i = 1; i <= 24; i++) {
    const date = new Date(`${currentYear}-12-${i}`);
    const weekDay = date.getDay();
    weekDays.push(weekDay);
  }

  
}

const Calendar = () => (
  <div>
<h1>A <em>Coder's</em> Advent Calendar</h1>
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
  <div id="one" class="week">
    <div class="day noDate"></div>
    <div class="day noDate"></div>
    <div class="day noDate"></div>
    <div class="day noDate"></div>
    <div class="day noDate"></div>
    <div class="day noDate"></div>
    <div class="day past">
      <span class="date">1</span>
    </div>
  </div>
  <div id="two" class="week">
    <div class="day">
      <span class="date">6</span>
    </div>
    <div class="day">
      <span class="date">7</span>
    </div>
    <div class="day">
      <span class="date">8</span>
    </div>
    <div class="day">
      <span class="date">9</span>
    </div>
    <div class="day">
      <span class="date">10</span>
    </div>
    <div class="day">
      <span class="date">11</span>
    </div>
    <div class="day">
      <span class="date">12</span>
    </div>
  </div>
  <div id="three" class="week">
    <div class="day">
      <span class="date">13</span>
    </div>
    <div class="day">
      <span class="date">14</span>
    </div>
    <div class="day">
      <span class="date">15</span>
    </div>
    <div class="day">
      <span class="date">16</span>
    </div>
    <div class="day">
      <span class="date">17</span>
    </div>
    <div class="day">
      <span class="date">18</span>
    </div>
    <div class="day">
      <span class="date">19</span>
    </div>
  </div>
  <div id="four" class="week">
    <div class="day">
      <span class="date">20</span>
    </div>
    <div class="day">
      <span class="date">21</span>
    </div>
    <div class="day">
      <span class="date">22</span>
    </div>
    <div class="day">
      <span class="date">23</span>
    </div>
    <div class="day">
      <span class="date">24</span>
    </div>
    <div class="day" id="christmas-day">
      <span class="date">25</span>
    </div>
    <div class="day noDate"></div>
  </div>
</section>
<img src={present} />
<div id="bottom" class="collectonme"></div>
</div>
);

export default Calendar;