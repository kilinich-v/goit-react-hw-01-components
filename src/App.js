import React, { Fragment } from 'react';
import './styles.scss';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';

const App = () => (
  <Fragment>
    <Profile />
    <Statistics />
    <FriendList />
    <TransactionHistory />
  </Fragment>
);

export default App;
