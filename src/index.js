import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import StardewValleyApp from './App';
import { FRUITS } from './Fruits';
import { FLOWERS } from './Flowers';

ReactDOM.render(
  <StardewValleyApp data={FRUITS} data2={FLOWERS} />,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
