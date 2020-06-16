import React from 'react'
import xlsx from 'xlsx'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'

export const UploadBox = withStyles({
    root: {
      backgroundImage: 'radial-gradient(circle, rgba(203,200,200,1) 0%, rgba(215,215,226,1) 35%, rgba(231,241,244,1) 100%)',
      width: "90%",
      height: '27em',
      margin: '0.5em',
      padding: '1em 1.5em',
      borderRadius: "8px"
    }
  })(Paper)
  
export default function App(props){
  const [state, setState] = React.useState({active: false, fileSrc: [], loaded: false})

  function onDragEnter(e) {
    setState({...state, active: true });
  }
  
  function onDragLeave(e) {
    setState({...state, active: false });
  }
  
  function onDragOver(e) { 
    e.preventDefault(); 
  }
  
  function onDrop(e) {
    e.preventDefault();
    setState({...state, active: false });
    onFileChange(e, e.dataTransfer.files[0]);
  }
  
  function onFileChange(e, data) {
      var file = data || e.target.files[0],
          reader = new FileReader();

      reader.readAsArrayBuffer(file)
      // let { dispatch, id_kegiatan } = this.props

      reader.onload = function(e) {
          var data = new Uint8Array(reader.result);
          var arr = [];
          for (var i = 0; i !== data.length; ++i){
              arr[i] = String.fromCharCode(data[i]);
          }
          var bstr = arr.join("");
          var workbook = xlsx.read(bstr, {
              type: "binary"
          });
          var first_sheet_name = workbook.SheetNames[0];
          var worksheet = workbook.Sheets[first_sheet_name];
          var listVoter = xlsx.utils.sheet_to_json(worksheet, {
              raw: true
          });
          setState({...state, fileSrc: listVoter, loaded: true})
          let b = JSON.stringify(listVoter)
          console.log(b)
          props.changes(listVoter);
          props.next();    
        }      
  }

    return (
        <>
            <UploadBox>
            <div 
                onDragEnter={onDragEnter} 
                onDrop={onDrop} 
                onDragLeave={onDragLeave} 
                onDragOver={onDragOver}
                style={{border: '2px black dashed', 
                        borderRadius: '8px',
                        width: '100%', 
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
            <input onChange={onFileChange} type="file" accept=".xlsx, application/xlsx" style={{display: 'none'}}/>
            <Typography variant="h4"> {state.loaded ? 'Uploaded!' : 'Upload Your Data Here!' } </Typography>
            </div>
            </UploadBox>
        </>
    )
}



