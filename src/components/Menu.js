import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import SearchDrawer from './SearchDrawer';

const styles = {
  drawer: {
    background: 'rgba(255, 255, 255, 0.6)',
  },
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color: 'white',
  },
};

class Menu extends React.Component {

  render() {
    const { classes } = this.props;
    return (
        <div className={classes.root}>
          <SearchDrawer
            toggleDrawer={(status) => this.props.toggleDrawer(status)}
            open={this.props.drawerIsOpen}
            selectedDate={this.props.selectedDate}
            inputRef={this.props.inputRef}
          />
        </div>
      );
  }
}

export default withStyles(styles)(Menu);
