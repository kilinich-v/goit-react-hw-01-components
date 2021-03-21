import React, { Fragment } from 'react';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import './styles.scss';

const App = () => (
  <Fragment>
    <Profile />
    <Statistics />
  </Fragment>
);

export default App;
