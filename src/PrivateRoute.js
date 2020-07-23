import React, { Component } from 'react'
import {Route, Redirect} from 'react-router'
import {useThisData} from './reducers'

const PrivateRoute = ({ component: Component, ...rest}) => {
    const [state] = useThisData();
    return (
        <Route
            {...rest}
            render={({ location }) =>
              state.status.isAuth ? (
                <Component />
              ) : (
                <Redirect
                  to={{
                    pathname: "/login",
                    state: { from: location }
                  }}
                />
              )
            }
        />
    )
}

export default PrivateRoute