import React from 'react'
import MaterialTable from 'material-table'
import Backdrop from '@material-ui/core/Backdrop'
import Modal from '@material-ui/core/Modal'
import { makeStyles, withStyles } from '@material-ui/core/styles'

import Certificate from '../components/show.certificate'
import Portal from '../components/portal'
import {useThisData} from '../reducers'
import main from '../helpers'

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));

const BackdropWhite = withStyles({
  root: {
    backgroundColor: 'rgb(255,255,255,0.9)'
  }
})(Backdrop)

export default function App(){
    const classes = useStyles()
    const [activeModal, setActiveModal] = React.useState(false);
    const [temp, setTemp] = React.useState(null);
    const [state, dispatch] = useThisData()

    const showModal = (data) => {
      setActiveModal(!activeModal);
      if(!data) setTemp(null);
      else setTemp(data);
    }

    const updateData = () => {
      main.getData(function(_d){
        dispatch({name: 'store', payload: _d.data});
      })
    }

    return(
      <>
        <MaterialTable
          columns={[
            { title: 'NIM', field: 'identification_id' },
            { title: 'Nama', field: 'name' },
            { title: 'Listening', field: 'listening_score', type: 'numeric' },
            { title: 'Writing', field: 'writing_score', type: 'numeric' },
            { title: 'Reading', field: 'reading_score', type: 'numeric' }
          ]}
          data={state.data}
          title="Score Title"
          
          options={{
            search: true,
            sorting: true
          }}

          actions={[
            {
              icon: 'save',
              tooltip: 'Show Student',
              onClick: (event, rowData) => showModal(rowData)
            },
            {
              icon: 'refresh',
              tooltip: 'Add User',
              isFreeAction: true,
              onClick: () => {
                updateData();
                alert("Data Updated");
              }
            }
          ]}        
        />
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
            <Certificate data={temp} close={showModal}/>
          </Modal>        
        </Portal>
      </>
    )
}