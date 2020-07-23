import React from 'react'
import Main from './layout/Main'
import Dashboard from './layout/Dashboard'
import { Router, Route, Switch} from 'react-router'
import { createBrowserHistory } from 'history'
import {Provider} from './reducers'
import {SnackbarProvider} from 'notistack';
import PrivateRoute from './PrivateRoute'
const hist = createBrowserHistory();

function Unit(){
	return(
		<Switch>
		    <PrivateRoute path="/dashboard/" component={Dashboard} />
		    <Route path="/" component={Main} />
		</Switch>		
	)
}

function Init(){
    return(
        <Router history={hist}>
        	<Provider>
	        	<SnackbarProvider>
	        		<Unit/>
	            </SnackbarProvider>
            </Provider>
        </Router>
    )
}

export default Init;
