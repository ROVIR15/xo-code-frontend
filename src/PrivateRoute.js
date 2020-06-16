import React, { Component } from 'react'
import {Route, Redirect} from 'react-router'

const PrivateRoute = ({ component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={() => { true ?
                (<Component {...props}/>):
                (<Redirect to={{
                    pathname: '/',
                    state: {from: props.location}
                }}/>);
            }}
        />
    )
}

export default PrivateROute