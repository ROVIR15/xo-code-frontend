import React, { useEffect } from 'react';
import withRoot from '../withRoot'
import AppAppBar from '../components/AppAppBar2'
import {pages} from './pages/main'
import io from 'socket.io-client'

function App(props) {
  const socket = io('http://localhost:3100');

  useEffect(() => {
  // switch (history) {
  //     case '/main':
  //       return handleChange('main')
  //       break;
    
  //     default:
  //       break;
  //   }
    socket.on('connect', function(){
      console.log(socket.connected);
    })

    socket.emit('hello', "HELLO WORLD")
  })

  return (
    <div className="App">
      <AppAppBar/>
        {pages}
    </div>
  );
}

export default withRoot(App);
