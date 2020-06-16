import React from 'react'
import {Redirect, Route, Switch} from 'react-router'
import Main from '../../views/main.views'
import Login from '../../views/login.views'

export const mainLayout = [{
    path: '/main',
    component: Main, //Some Pages
    label: 'Main'
}, {
    path: '/login',
    component: Login, //Some Pages
    label: 'Login'
}, {
    redirect: true,
    to: '/main'
}]

export const pages = (
    <Switch>
        {mainLayout.map((piece) => {
            if(piece.redirect) return (<Redirect from="/" to="/main"/>)
            return (<Route path={piece.path} component={piece.component}/>)
        })}
    </Switch>
)
