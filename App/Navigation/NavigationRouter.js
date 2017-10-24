import React, { Component } from 'react'
import { Scene, Router, Stack } from 'react-native-router-flux'
import KioskOne from '../Containers/KioskOne'; 
import KioskTwo from '../Containers/KioskTwo'; 
import SearchUsers from '../Containers/SearchUsers';
import Search from '../Containers/Search';
import Profile from '../Containers/Profile';
import Root from '../Containers/Root';

class NavigationRouter extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">      
          <Scene initial key='root' component={Root} title='Root' hideNavBar={true} />
          <Scene key='kioskOne' component={KioskOne} title='kioskOne' hideNavBar={true} />
          <Scene key='kioskTwo' component={KioskTwo} title='kioskTwo' hideNavBar={true} />         
          <Scene key='searchUsers' component={SearchUsers} title='searchUsers' hideNavBar={true} />
          <Scene key='search' component={Search} title='search' hideNavBar={true} />
          <Scene key='profile' component={Profile} title='profile' hideNavBar={true} />
        </Stack>
      </Router>
    );
  }
}
export default NavigationRouter;
