import React from 'react'
import { Redirect } from 'react-router'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'
import {PrimButton} from '../components/buttons'
import {LogFrom} from '../components/form-input'
import Section from '../examples/section'

import { Provider, useThisData } from '../reducers'

import main from '../helpers'

export const BPaper = withStyles({
    root: {
      border: '2px solid black',
      borderRadius: '0.75em',
      background: 'rgba(255,255,255,0.57)'
    }
})(Paper)

export const MonotonTypo = withStyles({root: {
    fontFamily: "'Monoton', cursive",
    fontSize: '113px'
}})(Typography)

export default function LoginPages(){
    const [_s, dispatch] = useThisData();
    const [state, setState] = React.useState({username: "", password: ""});

    function change(e){
        e.preventDefault();
        const {name, value} = e.target
        setState({...state, [name]: value})
    }

    function hitByUser(){
        if(!state.username && !state.password) alert("What the fuck?");
        main.login(state.username, state.password, function(_d){
            dispatch({name: "logActivity", payload: _d}); 
        })
    }

    if(_s.status.isAuth) return (<Redirect to="/dashboard/admin"/>)
    return (
        <Provider>
            <Section>
                <BPaper style={{textAlign: 'center', padding: '0.25em 6em 5em'}}>
                <Grid container direction="column" justify="center" alignItem="center">
                    <div>
                    <MonotonTypo style={{fontSize: '46px'}}>CFLT</MonotonTypo>
                    <div style={{
                        background: 'black',
                        width: '6em',
                        height: '5px',
                        margin: 'auto'
                    }}></div>
                    <Typography style={{fontSize: '10px', fontWeight: 'bold'}}> center foreign language training </Typography>
                    </div>
                    <Typography style={{margin: '1.5em', fontWeight: 'bold'}}> LOG IN </Typography>
                    {!_s.status.isAuth && _s.status.load ? (<Typography variant="body2"
                        style={{color: 'red', fontWeight: 'bold'}}
                    >Please check your username or password</Typography>) : null}
                    <form style={{display: 'inherit', flexDirection: 'column', minWidth: '20em'}} >
                    <LogFrom onChange={change} required={true} name="username" placeholder="username" value={state.username}/>
                    <LogFrom onChange={change} required={true} name="password" type="password" placeholder="password" value={state.password}/>
                    <PrimButton onClick={hitByUser} disableElevation>
                        HIT ME
                    </PrimButton>
                    </form>
                    <a> Forgot password ?</a>
                </Grid> 
                </BPaper>
            </Section>
        </Provider>
    )
}
 