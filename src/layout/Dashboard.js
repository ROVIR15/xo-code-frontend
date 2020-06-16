import React from 'react';
import withRoot from '../withRoot'
import AppAppBar from '../components/AppAppBar'
import Section from '../examples/section';
import {pages} from './pages/client.dashboard'
import {Web3Provider} from '../reducers';

function App(props) {

  return (
    <div className="App">
      <AppAppBar/>
      <Web3Provider>
	      <Section>
	          {pages}
	      </Section>
      </Web3Provider>
    </div>
  );
}

export default withRoot(App);
