import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Components
import App from './components/App';
import Home from './components/Home';
import Japanese from './components/Japanese';
import French from './components/French';
import Spanish from './components/Spanish';
import German from './components/German';

const router = (
	<Router history={browserHistory}>
		<Route path='/' component={App}>
  			<IndexRoute component={Home}></IndexRoute>
			<Route path='French' component={French}></Route>
			<Route path='German' component={German}></Route>
			<Route path='Japanese' component={Japanese}></Route>
			<Route path='Spanish' component={Spanish}></Route>
		</Route>
	</Router>
);

render(router, document.getElementById('app'));
