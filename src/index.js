import React from 'react';
import ReactDOM from 'react-dom';
import './css/bootstrap.min.css';
import './css/index.css';

import Root from 'client/Root';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
