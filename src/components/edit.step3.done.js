import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {BlueButton} from './buttons'

export default function App(props){

    function reset(){
        props.reset();
    }

    const {recent_trx} = props.data

    return (
    <>
        <>
            <Typography variant="h1" style={{fontWeight: 'bold'}}> {recent_trx ? 'DONE' : 'WAITING...' }</Typography>
            <Typography variant="h5"> {recent_trx ? 'YOUR CONTRACT HAS UPDATED WITH TRANSCTION HASH' : 'YOUR DATA IS BEING PROCESS'}</Typography>
            <Typography variant="h6" style={{fontWeight: 'bold', margin: '1em 0'}}> {recent_trx} </Typography>
        </>

        <Grid 
        container
        direction="row"
        justify="center"
        alignItem="center"
        style={{margin: '1.75em 0 0.5em'}}
        >
            <Button style={{margin: '0 1em', marginRight: '3em', fontSize: '16px'}}>
                BACK TO HOME
            </Button>
            <BlueButton onClick={reset} variant="outlined">
                EDIT ANOTHER CONTRACT
            </BlueButton> 
        </Grid>
    </>
    )
}