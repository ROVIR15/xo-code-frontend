import React from 'react';
import {AppBar, IconButton, Toolbar, Typography, makeStyles, withStyles} from '@material-ui/core'
import {NavLink} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  bar: {
    display: 'flex',
    flexDirection: 'column',
    justify: 'center',
    alignItems: 'center'
  },
  control: {
      display: 'flex',
      flexDirection: 'column',
      justify: 'center',
      alignItems: 'center',
      paddingTop: theme.spacing(1)
  },
  root: {
    flexGrow: 1,
  },
  image: {
      width: 48,
      height: 48
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  space: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      textTransform: 'capitalize'
  }
}));

const MonotonTypo = withStyles({root: {
    fontFamily: "'Monoton', cursive",
    color: 'white'
}})(Typography)

function AppAppBar2(){
    const classes = useStyles()
    return (
            <AppBar className={classes.bar} position="static">
                <Toolbar style={{width: 'inherit'}}>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <NavLink to="/" ><MonotonTypo> CFLT </MonotonTypo></NavLink>
                </IconButton>
                <div className={classes.title}></div>
                <NavLink to="/login" ><Typography variant="button" className={classes.space} style={{color: 'white'}}>Entrance</Typography></NavLink>
                </Toolbar>
            </AppBar>
    )
}

export default AppAppBar2;