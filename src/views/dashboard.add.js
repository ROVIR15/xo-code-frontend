import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Add1 from '../components/upload.begin';
import Add2 from '../components/upload.checking';
import Add3 from '../components/upload.complete';
import { makeStyles} from '@material-ui/core/styles';
import main from '../helpers';
import {SocketProvider, useThisData, useSocket} from '../reducers';
import {withSnackbar} from 'notistack';

function getStepContent(step, back, next, data, changes, send) {
  switch (step) {
    case 0:
      return (<Add1 next={next} changes={changes}/>);
    case 1:
      return (<Add2 next={next} back={back} payload={data} send={send}/>);
    case 2:
      return (<Add3 />);
    default:
      return 'Unknown step';
  }
}

function getSteps() {
  return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function App(props){
    const classes = useStyles()
    const [activeStep, setActiveStep] = React.useState(2);
    const [pipeline, setPipeline] = React.useState([{ identification_id: 'A12.2016.05579', name: 'Baran', listening_score: 100, writing_score: 90, reading_score: 80 }])
    const steps = getSteps();

    const [state, dispatch] = useThisData();
    const [methods, state2, socketDispatch] = useSocket();

    const handleNext = () => {
      if(activeStep < 2){
        setActiveStep(prevActiveStep => prevActiveStep + 1);
      } else {
        setActiveStep(0)
      }
    };

    const handleInsert= () => {
      if(!pipeline) console.log('there is no data stored');
      else main.addData(pipeline, state.status.load._id, function(_p){
          if(!_p.data.length) return new Error('data empty');
          if(_p.ok) methods('add', _p.data);
          else console.error('Data not stored properly!')
      })
    }
  
    const handleBack = () => {
      setActiveStep(prevActiveStep => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };

    const handleSet = (data) => {
      setPipeline(data)
    }

    return (
        <>
          {activeStep === steps.length ? (
            <div >
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </div>
          ) : (
                getStepContent(activeStep, handleBack, handleNext, pipeline, handleSet, handleInsert)
          )}
        </>
    )
}

export default withSnackbar(App);