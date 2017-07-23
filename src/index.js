import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Hero from './components/hero/hero';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const App = () => {
  return (
    <Router>
	    <div>
	    	<Route exactly pattern='/' component={Hero} />
	    </div>
	</Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
