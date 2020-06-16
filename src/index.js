import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main'
import * as serviceWorker from './serviceWorker';

import { Button } from '@material-ui/core'
import io from 'socket.io-client';
import {SnackbarProvider, withSnackbar} from 'notistack';

function App3(props){

	const socket = io('http://localhost:5002');
	
	React.useEffect(() => {
		socket.on('connect', function(){
			socket.on('notification', function(payload){
				switch(payload.type){
					case '1':
						console.log(payload.data)
						props.enqueueSnackbar(`you received ${payload.data.name} created smart contract`);
						break;
					case 'testing':
						props.enqueueSnackbar(`you received ${payload.msg} created smart contract`);
						break;
					default:
						break;
				}
			})
		})
	}, [])

	return (
		<>
			<h2> HELLO WORLD!</h2>
		</>
	)
}

const Test = withSnackbar(App3);

ReactDOM.render(<App/>, document.getElementById('root'));

ReactDOM.render(<SnackbarProvider>
					<Test/>
				</SnackbarProvider>
				, document.getElementById('notification'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();