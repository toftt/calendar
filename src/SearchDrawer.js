import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';

import SearchBox from './SearchBox';

const styles = {
  drawer: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },
};

class SearchDrawer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Drawer
        open={this.props.open}
        onClose={() => this.props.toggleDrawer(false)}
        classes={{paper: classes.drawer}}
        >
        <div
          tabIndex={0}
          role="button"
        >
          <SearchBox
            inputRef={this.props.inputRef}
            selectedDate={this.props.selectedDate}
          />
        </div>
      </Drawer>
    )
  }
}

export default withStyles(styles)(SearchDrawer);
