import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {CertificatePaper} from './Certificate'
import {MonotonTypo} from './MonotonTypo'
import {RedButton} from './buttons'
import Pdf from "react-to-pdf";

const ref = React.createRef();

export default function App(props){
    
    return(
        <Grid container 
            direction="column"
            justify="center"
            alignItem="center"
        >
            <CertificatePaper ref={ref}>
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

            <div style={{margin: '1.5em 0'}}>
        <Typography variant="h4" style={{textDecoration: 'underline', fontWeight: 'bold'}}> {props.data.name ? props.data.name : "STUD NAME"} </Typography>
            </div>

            <div>
            <Typography variant="h5"> SCORE </Typography>
            <Typography variant="h3" style={{fontWeight: 'bold', margin: '0.15em 0'}}>440</Typography>
            </div>

            <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '1em 0'
            }}>
            <table style={{minWidth: '20em'}}>
                <tr>
                <th>Listening</th>
                <th>Writing</th>
                <th>Reading</th>
                </tr>
                <tr>
                <td>
                <Typography
                    style={{fontSize: '36px', fontWeight: 'bold', textAlign: 'center'}}
                > {props.data.listening_score ? props.data.listening_score : "00"} </Typography>
                </td>
                <td>
                <Typography
                    style={{fontSize: '36px', fontWeight: 'bold', textAlign: 'center'}}
                > {props.data.writing_score ? props.data.writing_score : "00"} </Typography>
                </td>
                <td>
                <Typography
                    style={{fontSize: '36px', fontWeight: 'bold', textAlign: 'center'}}
                > {props.data.reading_score ? props.data.reading_score : "00"} </Typography>
                </td>
                </tr>
            </table>
            </div>
            </CertificatePaper>

            <Grid 
            container
            direction="row"
            justify="center"
            alignItem="center"
            style={{margin: '2.75em 0 0.5em'}}
            >
    <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => 
            <Button onClick={toPdf} style={{margin: '0 1em', marginRight: '3em', fontSize: '16px'}}>
                SAVE
            </Button>
        }
    </Pdf>
            <RedButton onClick={props.close} variant="outlined">
                BACK
            </RedButton>
            </Grid>
        </Grid>
    )
}