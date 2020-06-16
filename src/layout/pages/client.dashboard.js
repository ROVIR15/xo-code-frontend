import React from 'react'
import Add from '../../views/dashboard.add'
import Edit from '../../views/dashboard.edit'
import Show from '../../views/dashboard.show'
import Main from '../../views/dashboard.menu'
import {Redirect, Route, Switch} from 'react-router'
import {SocketProvider} from '../../reducers'

const SocketAdd = () => {
    return (
        <SocketProvider>
            <Add/>
        </SocketProvider>
    )
}

const clientLayout = [{
    path: '/dashboard/main',
    component: Main,
    label: 'Main'
}, {
    path: '/dashboard/add',
    component: SocketAdd, //Some Pages
    label: 'Add'
}, {
    path: '/dashboard/edit',
    component: Edit,
    label: 'Edit'
}, {
    path: '/dashboard/show',
    component: Show,
    label: 'Show'
}, {
    redirect: true,
    to: '/dashboard/main'
}]

export const pages = (
    <Switch>
        {clientLayout.map((piece) => {
            if(piece.redirect) return (<Redirect from='/dashboard/' to="/dashboard/main"/>)
            return (<Route path={piece.path} component={piece.component}/>)
        })}
    </Switch>
)