import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Icons from 'uikit/dist/js/uikit-icons';
import UIKit from 'uikit';
import * as firebase from 'firebase';

import { unregister as unregisterServiceWorker } from './registerServiceWorker';
import { getState, getStore } from './store';

import 'uikit/dist/css/uikit.min.css';
import './styles/index.css';

// Components
import Root from './components';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Event from './components/Event';
import Timeline from './components/Timeline';

// UIKit
UIKit.use(Icons);

// Firebase
firebase.initializeApp({
	apiKey: 'AIzaSyB22-DZ_PvhTJsA-PPf8Vs--fmcCixL-YQ',
	authDomain: 'cerebro-2018-f1052.firebaseapp.com',
	databaseURL: 'https://cerebro-2018-f1052.firebaseio.com',
	projectId: 'cerebro-2018-f1052',
	storageBucket: 'cerebro-2018-f1052.appspot.com',
	messagingSenderId: '1059299836137'
});

// Store
const store = getStore();

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={Root} />
					<Route
						exact
						path="/dashboard"
						render={() => {
							if (getState().auth.user) {
								return <Dashboard />;
							} else {
								return <Redirect to="/" />;
							}
						}}
					/>
					<Route exact path={'/timeline'} component={Timeline} />
					<Route exact path={'/events/:id'} component={Event} />
					<Route exact path={'/about'} component={About} />
				</Switch>
				<Footer />
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
unregisterServiceWorker();
