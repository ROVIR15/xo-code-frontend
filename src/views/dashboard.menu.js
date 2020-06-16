import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'
import {Link} from 'react-router-dom'

export const MenuBox = withStyles({  //Menu Button
    root: {
      backgroundImage: 'linear-gradient(200deg, rgba(203,200,200,1) 0%, rgba(215,215,226,1) 35%, rgba(231,241,244,1) 100%)',
      width: "12em",
      height: '10em',
      margin: '0.5em',
      padding: '0.5em 1.5em',
      borderRadius: "8px"
    }
  })(Button)

export default function App(){
    return (
        <>
            <Typography style={{fontSize: '32px', fontWeight: 'bold'}}>WELCOME ADMINISTRATOR!</Typography>
            <Typography style={{fontSize: '24px', fontWeight: 'bold'}}>choose one of the menus below</Typography>
            <div style={{marginTop: '3em'}}>
            <Grid container direction="row" justify="center" alignItem="center">
                <Link to="/dashboard/add" style={{textDecoration: 'none'}}>
                <MenuBox style={{margin: '0.5em 1em', padding: '0.5em'}}>
                    <Grid container direction="column" style={{height: '8em', width: '100%'}}>
                    <div style={{height: '50%'}}></div>
                    <div style={{textAlign: 'end'}}>
                        <Typography variant="body1" style={{fontWeight: 'bold'}}> ADD </Typography>
                        <Typography variant="body1" style={{fontWeight: 'bold'}}> CERTIFICATE </Typography>
                    </div>
                    </Grid>
                </MenuBox>
                </Link>
                <Link to="/dashboard/edit" style={{textDecoration: 'none'}}>
                <MenuBox style={{margin: '0.5em 1em', padding: '0.5em'}}>
                    <Grid container direction="column" style={{height: '8em', width: '100%'}}>
                    <div style={{height: '50%'}}></div>
                    <div style={{textAlign: 'end'}}>
                        <Typography variant="body1" style={{fontWeight: 'bold'}}> EDIT </Typography>
                        <Typography variant="body1" style={{fontWeight: 'bold'}}> CERTIFICATE </Typography>
                    </div>
                    </Grid>
                </MenuBox>
                </Link>
            </Grid>
            <Grid container direction="row" justify="center" alignItem="center">
                <Link to="/dashboard/show" style={{textDecoration: 'none'}}>
                <MenuBox style={{margin: '0.5em 1em', padding: '0.5em'}}>
                    <Grid container direction="column" style={{height: '8em', width: '100%'}}>
                    <div style={{height: '50%'}}></div>
                    <div style={{textAlign: 'end'}}>
                        <Typography variant="body1" style={{fontWeight: 'bold'}}> SHOW </Typography>
                        <Typography variant="body1" style={{fontWeight: 'bold'}}> CERTIFICATE </Typography>
                    </div>
                    </Grid>
                </MenuBox>
                </Link>
                <Link to="/main" style={{textDecoration: 'none'}}>
                <MenuBox style={{margin: '0.5em 1em', padding: '0.5em'}}>
                    <Grid container direction="column" style={{height: '8em', width: '100%'}}>
                    <div style={{height: '50%'}}></div>
                    <div style={{textAlign: 'end'}}>
                        <Typography variant="body1" style={{fontWeight: 'bold'}}> GET </Typography>
                        <Typography variant="body1" style={{fontWeight: 'bold'}}> OUT </Typography>
                    </div>
                    </Grid>
                </MenuBox>
                </Link>
            </Grid>
            </div>
        </>
    )
}
