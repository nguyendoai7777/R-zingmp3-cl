import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './app.scss';
import Sidebar from './components/sidebar/sidebar';
import Personal from './screens/personal/personal';
import Discovery from './screens/discovery/discovery';
import Charts from './screens/charts/charts';
import Follow from './screens/follow/follow';
import NewRelease from './screens/new-release/new-release';
import Category from './screens/category/category';
import MV from './screens/mv/mv';
import Top100 from './screens/top-100/top-100';
import NotFound from './screens/not-found/not-found';
import Navbar from './components/navbar/navbar';
import RightSidebar from './components/right-sidebar/right-sidebar';
import $ from 'jquery';
import MediaPlayer from './components/media-player/media-player';


export function App() {
  return (
    <Router>
      <div className='d-flex body'>
        <Sidebar />
        <div className='main'>
          <Navbar />
          <div className='wrapper app-scroll'>
            <Switch>
              <Route exact={true} path='/person'>
                <Personal />
              </Route>
              <Route exact={true} path='/'>
                <Discovery />
              </Route>
              <Route exact={true} path='/zing-charts'>
                <Charts />
              </Route>
              <Route exact={true} path='/follow'>
                <Follow />
              </Route>
              <Route exact={true} path='/new-release'>
                <NewRelease />
              </Route>
              <Route exact={true} path='/category'>
                <Category />
              </Route>
              <Route exact={true} path='/top-100'>
                <Top100 />
              </Route>
              <Route exact={true} path='/mv'>
                <MV />
              </Route>
              <Route path='*' exact={true} component={NotFound} />
            </Switch>
          </div>
        </div>
        <RightSidebar />
        <MediaPlayer />
      </div>
    </Router>
  );
}

export default App;
