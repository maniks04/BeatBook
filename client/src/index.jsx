import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index.js';
// import Venue from './components/venue.jsx';
// import Artist from './components/artist.jsx';
import $ from 'jquery'; // need for calendar
//import cn from 'classnames'
import Home from './components/homepage.jsx'

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

const Root = ({ store }) => (
  <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
  </Provider>
);

let store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render( <Root store={store} />
  , document.getElementById('app'));
