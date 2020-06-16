import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {CertificatePaper} from './Certificate'
import {MonotonTypo} from './MonotonTypo'
import {ModifiedInputBase} from './form-input'
import {RedButton} from './buttons'

function App(props){
    const [data, setData] = React.useState({
        name : "",
        listening_score : 0,
        writing_score : 0,
        reading_score : 0,       
    })

    function handleChange(e){
        e.preventDefault();
        const {name, value} = e.target;
        props.change({...props.data, [name] : value});
        console.log(props.data)
    }

    React.useEffect(function(){
        setData(props.data)
    }, [])

    function next(){
        props.next();
        props.send();
    }

    function back(){
        props.back();
    }

    const {name, listening_score, writing_score, reading_score} = data
    return (
    <>
        <CertificatePaper>
        <div>
        <MonotonTypo style={{fontSize: '46px', color: 'white', textAlign: 'center'}}>CFLT</MonotonTypo>
        <div style={{
            background: 'white',
            width: '6em',
            height: '5px',
            margin: 'auto'
        }}></div>
        <Typography style={{fontSize: '10px', fontWeight: 'bold', textAlign: 'center'}}> center foreign language training </Typography>
        </div>

        <div style={{margin: '3em 0'}}>
        <Typography variant="h4" style={{textDecoration: 'underline', fontWeight: 'bold'}}> {name} </Typography>
        </div>

        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '80%'
        }}>
        <table>
            <tr>
            <th>Listening</th>
            <th>Writing</th>
            <th>Reading</th>
            </tr>
            <tr>
            <td>
            <ModifiedInputBase
                name="listening_score"
                style={{fontSize: '53px', fontWeight: 'bold', textAlign: 'center'}}
                placeholder={listening_score}
                onChange={handleChange}
            />
            </td>
            <td>
            <ModifiedInputBase
                name="writing_score"
                style={{fontSize: '53px', fontWeight: 'bold', textAlign: 'center'}}
                placeholder={writing_score}
                onChange={handleChange}
            />
            </td>
            <td>
            <ModifiedInputBase
                name="reading_score"                
                style={{fontSize: '53px', fontWeight: 'bold', textAlign: 'center'}}
                placeholder={reading_score}
                onChange={handleChange}
            />
            </td>
            </tr>
        </table>

        <Grid 
        container
            direction="row"
            justify="center"
            alignItem="center"
            style={{margin: '2em 0 0.5em'}}
        >
            <Button onClick={next} style={{width: '7em', margin: '0 0.5em', fontSize: '16px'}}>
            DONE
            </Button>
            <RedButton onClick={back} variant="outlined">
            Cancel
            </RedButton> 
        </Grid>
        </div>
        </CertificatePaper>
    </>
    )
}

export default App