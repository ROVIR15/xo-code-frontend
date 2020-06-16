import React from 'react'
import MaterialTable, { MTableToolbar } from 'material-table'
import {PrimButton, RedButton} from './buttons'

import Grid from '@material-ui/core/Grid'

export default function App(props){

    function handleNext(){
      props.next();
      props.send();
    }

    function handleBack(){
      props.back();
    }

    return(
        <MaterialTable
          columns={[
            { title: 'NIM', field: 'identification_id' },
            { title: 'Nama', field: 'name' },
            { title: 'Listening', field: 'listening_score', type: 'numeric' },
            { title: 'Writing', field: 'writing_score', type: 'numeric' },
            { title: 'Reading', field: 'reading_score', type: 'numeric' }
          ]}
          
          data={props.payload}
          title="Score Title"
          
          options={{
            search: false,
            sorting: true
          }}

          actions={[
            {
              icon: 'save',
              tooltip: 'Show Student',
              onClick: (event, rowData) => alert("You saved " + rowData.name)
            }
          ]}
              
          components={{
              Toolbar: props => (
                  <div>
                      <MTableToolbar {...props} />
                      <Grid container direction="row" justify="flex-end">
                        <PrimButton onClick={handleNext} style={{margin: '0 0.5em'}}> NEXT </PrimButton>
                        <RedButton onClick={handleBack}> STOP </RedButton>
                      </Grid>
                  </div>
              )
          }}

        />
    )
}