import React from 'react'
import Section from '../examples/section'
import Typography from '@material-ui/core/Typography'
import {makeStyles, withStyles} from '@material-ui/core/styles'

import SearchBox from '../components/SearchBox'
import {useThisData} from '../reducers'
import Backdrop from '@material-ui/core/Backdrop'
import Modal from '@material-ui/core/Modal'

import Certificate from '../components/show.certificate'
import Portal from '../components/portal'

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));

export const MonotonTypo = withStyles({root: {
    fontFamily: "'Monoton', cursive",
    fontSize: '113px'
}})(Typography)

export default function MainPages(){
    const [state] = useThisData()
    const [activeModal, setActiveModal] = React.useState(false);
    const [selected, setSelected] = React.useState(null);
    const classes = useStyles()

    const showModal = (data) => {
      setActiveModal(!activeModal);
      console.log(data)
      if(!data) setSelected(selected);
      else setSelected(data);
    }

    const BackdropWhite = withStyles({
      root: {
        backgroundColor: 'rgb(255,255,255,0.9)'
      }
    })(Backdrop)

    return (
    <>
      <Section>
        <MonotonTypo variant="h1">CFLT</MonotonTypo>
        <div style={{
          background: 'black',
          width: '6em',
          height: '5px',
          margin: 'auto'
        }}></div>
        <Typography variant="body1" style={{fontSize: '1.25rem'}}> center foreign language training </Typography>
        <SearchBox data={state.data} change={setSelected} next={ (selected) => { showModal(selected)} }/>
      </Section>
      <Typography style={{fontWeight: 'bold', textAlign: 'center'}}>TOEFL Certificate secured by Blockchain-Enabled application</Typography>
        <Portal id="modal">
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={activeModal}
            closeAfterTransition
            BackdropComponent={BackdropWhite}
            BackdropProps={{
              timeout: 500,
            }}
            onClick={showModal}
          >
            <Certificate data={selected} close={showModal}/>
          </Modal>        
        </Portal>
    </>
    )
}