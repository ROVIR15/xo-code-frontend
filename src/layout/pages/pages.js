import React from 'react'
import {Redirect, Route, Switch} from 'react-router'
import Main from '../../views/main.views'

const layoutList = [{
    path: '/main',
    component: Main, //Some Pages
}, {
    path: '/products',
    component: Login, //Some Pages
} ,
{
    path: '/about-us',
    component: null,
},
{
    path: '/contact-us',
    component: null,
},
{
    path: '/product/product-one',
    component: null,
},
{
    path: '/product/product-two',
    component: null,
},
{
    path: '/product/product-three',
    component: null,
},
{
    path: '/product/product-four',
    component: null,
},
{
    path: '/product/product-five',
    component: null,
},
{
    path: '/product/product-six',
    component: null,
},
{
    redirect: true,
    to: '/main'
}]

export const pages = (
    <Switch>
        {layoutList.map((piece) => {
            if(piece.redirect) return (<Redirect from="/" to="/main"/>)
            return (<Route path={piece.path} component={piece.component}/>)
        })}
    </Switch>
)
