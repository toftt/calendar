import React from 'react';

import Menu from './Menu';
import Calendar from './Calendar';

class SubRoot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerIsOpen: false,
      selectedDate: 1,
    };
    this.textInput = React.createRef();
  }

  toggleDrawer = (status, selectedDate) => {
    console.log(selectedDate);
    this.setState({
      drawerIsOpen: status,
      selectedDate,
    }, () => { if (status === true && this.textInput.current) this.textInput.current.focus() })
  };
  
  render() {
    return (
      <React.Fragment>
        <div id="bg-image" />
        <Menu
          toggleDrawer={(e) => this.toggleDrawer(e)}
          drawerIsOpen={this.state.drawerIsOpen}
          inputRef={this.textInput}
          selectedDate={this.state.selectedDate}
        />
        <Calendar
          toggleDrawer={(status, date) => this.toggleDrawer(status, date)}
          mode="edit"
        />
      </React.Fragment>
    );
  }
}

export default SubRoot;