import React from 'react'
import Typography from '@material-ui/core/Typography'
import SearchBox from './SearchBox'
import {useThisData} from '../reducers'

function App(props){
    const [state] = useThisData();

    return (
    <>
        <Typography variant="h1" style={{fontWeight: 'bold'}}> Search</Typography>
        <Typography variant="h4"> by transaction hash / contract address </Typography>
        <SearchBox data={state.data} change={props.change} next={props.next}/>
    </>
    )
}

export default App