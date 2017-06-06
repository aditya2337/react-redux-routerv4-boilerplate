import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Paper from 'material-ui/Paper';
import images from './config/images';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Logo = styled.img`
  animation: ${spin} infinite 20s linear;
`;

const Home = () => (
  <div className='flex justify-center items-center h-100'>
    <Paper
      className='pa5'
      rounded={false}
      style={{
        backgroundColor: '#757575'
      }}
      zDepth={3}>
      <Logo src={images.logo} alt='logo' />
      <h1 className='white-90 f3 f2-m measure lh-title fw1 mt0'>Welcome to the world of react!!</h1>
      <div className='tc white-90 fw1'>Store's done and  connected</div>
    </Paper>
  </div>
);

const NoMatch = ({ location }) => (
  <section className='flex items-center flex-column justify-center h-100 bg-washed-blue'>
    <header class='tc ph5 lh-copy'>
      <h1 className='f1 f-headline-l w-100 tc code mb3 fw9 dib tracked-tight light-purple'>404</h1>
      <h2 className='tc f1-l fw1'>Sorry, we couldn't find <code>{location.pathname}</code></h2>
    </header>
    <Link to='/' className='f5 f4-ns link black db pv2 ph3 hover-light-purple'>
      <p className='fw1 i tc mt4 mt5-l f4 f3-l pointer'>Head back home maybe?</p>
    </Link>
  </section>
);

// All the routes of our app
const Routes = () => (
  <Router>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
);

export default Routes;
