import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const __SESSION_ID = new Date().getTime();

ReactDOM.render(<App sessionId={__SESSION_ID} />, document.getElementById('root'));
registerServiceWorker();
