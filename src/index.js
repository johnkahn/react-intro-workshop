import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import App from './App';

// Configure environment variables from .env
require('dotenv').config();

ReactDOM.render(<App />, document.getElementById('root'));
