import React from 'react';
import clsx from 'clsx';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Typography from '@material-ui/core/Typography';
import Edit1 from '../components/edit.step1.search';
import Edit2 from '../components/edit.step2.change';
import Edit3 from '../components/edit.step3.done';
import {useThisData} from '../reducers';
import main from '../helpers';
import {withSnackbar} from 'notistack';

import {useWeb3} from '../reducers';

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      background:
        'rgb(0,0,0, 1)',
    },
  },
  completed: {
    '& $line': {
      background:
          'rgb(0,0,0, 1)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    background:
      'rgb(0,0,0, 1)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    background:
      'rgb(0,0,0, 1)',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <Typography variant="h4"> 1 </Typography>,
    2: <Typography variant="h4"> 2 </Typography>,
    3: <Typography variant="h4"> 3 </Typography>
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
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

function getSteps() {
  return ['Find Student by ID', 'Make changes', 'Final Step'];
}

function getStepContent(step, next, back, reset, change, selectedData, send) {
  switch (step) {
    case 0:
      return (<Edit1 next={next} change={change} />);
    case 1:
      return (<Edit2 next={next} back={back} data={selectedData} change={change} send={send}/>);
    case 2:
      return (<Edit3 reset={reset} data={selectedData}/>);
    default:
      return 'Unknown step';
  }
}

function App(props) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [selected, setSelected] = React.useState(null);
    const steps = getSteps();
    const [state] = useThisData();
    const [methods, state2, dispatch] = useWeb3();
    
    const handleNext = () => {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep(prevActiveStep => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };

    const handleSend = () => {
      if(!selected) console.error('data not selected');
      else methods.setChanges(selected.contract_address, selected.writing_score, selected.listening_score, selected.writing_score).then(function(x){
        setSelected({...selected, recent_trx: x.txHash});
        if(x.txHash) dispatch({name: 'sending transaction', sending: false})
        main.editData(selected, state.status.load._id, function(_p){
          if(_p.ok) {
            props.enqueueSnackbar(`You succesfully edit ${_p.data_id}!`)
          }          
          else props.enqueueSnackbar(`Failed to edit ${_p.data_id}`)
        })
      })
    }
  
    return (
      <div className={classes.root}>
        <Stepper style={{width: '60%', margin: 'auto'}} alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div style={{textAlign: 'center'}}>
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
            <div>
                <Typography className={classes.instructions}>{getStepContent(activeStep, handleNext, handleBack, handleReset, setSelected, selected, handleSend)}</Typography>
            </div>
          )}
        </div>
      </div>
    );
  }

export default withSnackbar(App)