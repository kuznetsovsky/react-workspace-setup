// NodeJS Modules
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import {App} from './components/app/app';

// Init function
const init = () => {
  ReactDOM.render(<App />, document.getElementById(`root`));
};

// Call init function
init();
