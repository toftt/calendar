import React from 'react';
import { connect } from 'react-redux';

import Calendar from './Calendar';

import { getMultipleTracks } from '../api/api';
import { replaceAllTracks } from '../redux';

//this is for the shared view
class ViewRoot extends React.Component {

  componentWillMount() {
    getMultipleTracks(this.props.token, this.props.trackIds)
      .then(data => this.props.replaceAllTracks(data.tracks));
  }

  render() {

    return (
      <React.Fragment>
        <div id="bg-image" />
        <Calendar
          toggleDrawer={(status, date) => {}}
          mode="view"
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ token }) => ({
  token,
});

export default connect(mapStateToProps, { replaceAllTracks })(ViewRoot);