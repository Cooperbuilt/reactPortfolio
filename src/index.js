import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Hero from './components/hero/hero';
import Work from './components/work/work';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


const App = () => {
  return (
    <Router>
	    <div>
	    	<Route path='/home' component={Hero} />
        <Route path='/work' component={Work} />
	    </div>
	</Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
