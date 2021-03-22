import React, { Fragment } from 'react';
import './styles.scss';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/Friends/FriendList';
import TransactionHistory from './components/Transactions/TransactionHistory';

const App = () => (
  <Fragment>
    <Profile />
    <Statistics />
    <FriendList />
    <TransactionHistory />
  </Fragment>
);

export default App;
