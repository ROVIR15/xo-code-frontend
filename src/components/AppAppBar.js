import React from 'react';
import {AppBar, Toolbar, Typography, makeStyles, withStyles} from '@material-ui/core'
import {NavLink} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  control: {
    margin: 'auto'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: 'flex',
    flexDirection: 'row'
  },
  title: {
    flexGrow: 1,
  },
}));

const MonotonTypo = withStyles({root: {
    fontFamily: "'Monoton', cursive",
    color: 'white'
}})(Typography)

function AppAppBar(){
    const classes = useStyles()
    return (
      <AppBar position="static" style={{marginBottom: '1rem'}}>
      <Toolbar>
        <div className={classes.control} >
            <NavLink style={{color: 'white', textDecoration: 'none'}} to="/dashboard"><MonotonTypo variant="h5"> CFLT </MonotonTypo></NavLink>
            <div style={{
              background: 'white',
              width: '2em',
              height: '2px',
              margin: '0 auto'
            }}></div>
        </div>
      </Toolbar>
      </AppBar>
    )
}

export default AppAppBar;