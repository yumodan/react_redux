import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './component/Voting';

const pair = ['Trainspotting', '28 Days Later'];

ReactDOM.render(
  <Voting pair={pair} />,
  document.getElementById('app')
);