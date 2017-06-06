import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import store from './config/store';
import './index.css';

// Needed for onTouchTap
injectTapEventPlugin();

// using MuiThemeProvider to inject the theme into our application context
const App = () => (
  <MuiThemeProvider>
    <Routes />
  </MuiThemeProvider>
);

/* We use a special React Redux component called <Provider> to magically make
  the store available to all container components in the application without
  passing it explicitly. */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
