import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

export default function App(){
    return (
        <Grid container
        direction="column"
        alignItem="center"
        justify="center"
        >
            <Typography style={{fontSize: '104px', fontWeight: 'bold', textAlign: 'center'}}> DONE! </Typography>
            <Typography style={{fontWeight: 'bold', fontSize: '18px', textAlign: 'center'}}> 
                YOUR DATA IS BEING PROCESS<br/>
                we will inform you about the current process soon
            </Typography>
            <Grid container
            direction="row"
            alignItem="center"
            justify="center"
            style={{margin: '3em 0 0'}}
            >
                <Button disableElevation>
                    BACK TO HOME
                </Button>
                <Button variant="outlined" color="primary">
                    SEE CURRENT PROCESS
                </Button>
            </Grid>
        </Grid>
    )
}