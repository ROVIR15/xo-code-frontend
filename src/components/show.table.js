import React from 'react'
import MaterialTable from 'material-table'

function App(){
    return (
        <MaterialTable
          columns={[
            { title: 'NIM', field: 'identification_id' },
            { title: 'Nama', field: 'name' },
            { title: 'Listening', field: 'listening_score', type: 'numeric' },
            { title: 'Writing', field: 'writing_score', type: 'numeric' },
            { title: 'Reading', field: 'reading_score', type: 'numeric' }
          ]}
          data={[{ identification_id: 'A12.2016.05579', name: 'Baran', listening_score: 100, writing_score: 90, reading_score: 80 }]}
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
        />
    )
}

export default App;