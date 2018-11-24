import React from 'react';
import Drawer from '@material-ui/core/Drawer';

import SearchBox from './SearchBox';

class SearchDrawer extends React.Component {
  render() {
    return (
      <Drawer open={this.props.open} onClose={() => this.props.toggleDrawer(false)}>
        <div
          tabIndex={0}
          role="button"
        >
          <SearchBox />
        </div>
      </Drawer>
    )
  }
}

export default SearchDrawer;
