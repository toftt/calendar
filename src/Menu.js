import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import SearchDrawer from './SearchDrawer';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = { drawerIsOpen: false };
  }

  toggleDrawer = (status) => {
    this.setState({
      drawerIsOpen: status
    });
  };

  render() {
    const { classes } = this.props;
    return (
        <div>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon onClick={() => this.toggleDrawer(true)} />
          </IconButton>
          <SearchDrawer
            toggleDrawer={(status) => this.toggleDrawer(status)}
            open={this.state.drawerIsOpen}
          />
        </div>
      );
  }
}

export default withStyles(styles)(Menu);
