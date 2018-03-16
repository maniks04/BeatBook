import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Home from './components/homepage.jsx'
import reducer from './reducers/index.js';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
// import AnyComponent from './components/filename.jsx'

const Root = ({ store }) => (
  <Provider store={store}>
    <MuiThemeProvider theme={getMuiTheme(lightBaseTheme)}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  </Provider>
);

let store = createStore(reducer, applyMiddleware(thunk));


ReactDOM.render(<Root store={store} />, document.getElementById('app'));