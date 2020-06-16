import React from 'react';
import withRoot from './withRoot'

import {Button, Box, Grid, InputBase, Paper, TextField, Typography, withStyles} from '@material-ui/core'

import AppAppBar from './components/AppAppBar'
// import AppAppBar2 from './components/AppAppBar2'
import Section from './examples/section'
import SearchBox from './components/SearchBox';
// import Footer from './components/Footer'
import MaterialTable from 'material-table'

export const BPaper = withStyles({
  root: {
    border: '2px solid black',
    borderRadius: '0.75em'
  }
})(Paper)

export const MonotonTypo = withStyles({root: {
    fontFamily: "'Monoton', cursive",
    fontSize: '113px'
}})(Typography)

export const PrimButton = withStyles({
  root: {
    backgroundColor: '#00818A',
    width: '10em',
    margin: '3em auto 0'
  },
  label: {
    fontSize: '16px'
  }
})(Button)

export const RedButton = withStyles({
  root: {
    border: '1px solid #B81010',
    color: '#B81010',
    margin: '0 0.5em',
    fontSize: '16px'
  }
})(Button)

export const BlueButton = withStyles({
  root: {
    border: '1px solid #1592E6',
    color: '#1592E6',
    margin: '0 1em',
    fontSize: '16px'
  }
})(Button)

export const LogFrom = withStyles({
  root: {
    border: '1px black solid',
    borderRadius: '0.75rem',
    padding: '0.2em 0.5em ',
    margin: '0.5em 0'
  }
})(InputBase)

export const MenuBox = withStyles({  //Menu Button
  root: {
    background: 'green',
    width: "12em",
    height: '10em',
    margin: '0.5em',
    padding: '0.5em 1.5em',
    borderRadius: "8px"
  }
})(Button)

export const CertificatePaper = withStyles({
  root: {
    background: '#666',
    width: '60%',
    minWidth: '50%',
    height: 'auto',
    padding: '0.5em 1.5em',
    borderRadius: '8px',
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center'
  }
})(Paper)

export const UploadBox = withStyles({
  root: {
    background: 'green',
    width: "90%",
    height: '27em',
    margin: '0.5em',
    padding: '1em 1.5em',
    borderRadius: "8px"
  }
})(Paper)

export const ModifiedInputBase = withStyles({
  root: {
    fontWeight: 'bold',
    fontSize: '53px'
  },
  input: {
    textAlign: 'center'
  }
})(InputBase)

const style = theme => ({})

function App() {
  return (
    <div className="App">
      <AppAppBar/>
      <Section>
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
      </Section>
    </div>
  );
}
      //First Page
      // <Section>
      //   <MonotonTypo variant="h1">CFLT</MonotonTypo>
      //   <div style={{
      //     background: 'black',
      //     width: '6em',
      //     height: '5px',
      //     margin: 'auto'
      //   }}></div>
      //   <Typography variant="body1" style={{fontSize: '1.25rem'}}> center foreign language training </Typography>
      //   <SearchBox/>
      // </Section>
      // <Typography style={{fontWeight: 'bold', textAlign: 'center'}}>TOEFL Certificate secured by Blockchain-Enabled application</Typography>

      //Login Pages
        // <BPaper style={{textAlign: 'center', padding: '0.25em 6em 5em'}}>
        //   <Grid container direction="column" justify="center" alignItem="center">
        //     <div>
        //     <MonotonTypo style={{fontSize: '46px'}}>CFLT</MonotonTypo>
        //       <div style={{
        //         background: 'black',
        //         width: '6em',
        //         height: '5px',
        //         margin: 'auto'
        //       }}></div>
        //     <Typography style={{fontSize: '10px', fontWeight: 'bold'}}> center foreign language training </Typography>
        //     </div>
        //     <Typography style={{margin: '1.5em', fontWeight: 'bold'}}> LOG IN </Typography>
        //     <form style={{display: 'inherit', flexDirection: 'column', minWidth: '20em'}} >
        //       <LogFrom id="username" placeholder="username"/>
        //       <LogFrom id="password" placeholder="password"/>
        //       <PrimButton disableElevation>
        //         HIT ME
        //       </PrimButton>
        //     </form>
        //     <a> Forgot password ?</a>
        //   </Grid> 
        // </BPaper>

// Dashboard Menu
        // <Typography style={{fontSize: '32px', fontWeight: 'bold'}}>WELCOME ADMINISTRATOR!</Typography>
        // <Typography style={{fontSize: '24px', fontWeight: 'bold'}}>choose one of the menus below</Typography>
        // <div style={{marginTop: '3em'}}>
        // <Grid container direction="row" justify="center" alignItem="center">
        //   <MenuBox style={{margin: '0.5em 1em'}}>
        //     <Grid container direction="column-reverse">
        //     <div></div>
        //     <Typography> MENU ITEM 1 </Typography>
        //     </Grid>
        //   </MenuBox>
        //   <MenuBox >
        //     <Grid container direction="column-reverse">
        //     <div></div>
        //     <Typography> MENU ITEM 1 </Typography>
        //     </Grid>
        //   </MenuBox>
        // </Grid>
        // <Grid container direction="row" justify="center" alignItem="center">
        //   <MenuBox style={{margin: '0.5em 1em'}}>
        //     <Grid container direction="column-reverse">
        //     <div></div>
        //     <Typography> MENU ITEM 1 </Typography>
        //     </Grid>
        //   </MenuBox>
        //   <MenuBox>
        //     <Grid container direction="column-reverse">
        //     <div></div>
        //     <Typography> MENU ITEM 1 </Typography>
        //     </Grid>
        //   </MenuBox>
        // </Grid>
        // </div>

// Upload data
        //  <UploadBox>
        //   <div 
        //     style={{border: '2px black dashed', 
        //             borderRadius: '8px',
        //             width: '100%', 
        //             height: '100%',
        //             display: 'flex',
        //             flexDirection: 'column',
        //             alignItems: 'center',
        //             justifyContent: 'center'
        //           }}>
        //   <Typography variant="h4"> Upload data here! </Typography>
        //   </div>
        // </UploadBox>

// Complete Upload Data Step
  {/* <Grid container
  direction="column"
  alignItem="center"
  justify="center"
  >
  <Typography style={{fontSize: '104px', fontWeight: 'bold', textAlign: 'center'}}> DONE! </Typography>
  <Typography style={{fontWeight: 'bold', fontSize: '18px', textAlign: 'center'}}> 
  YOUR DATA IS BEING PROCESS<br/>
  we will inform you about the current process soon
  </Typography>
  <Grid container
  direction="row"
  alignItem="center"
  justify="center"
  style={{margin: '3em 0 0'}}
  >
  <Button disableElevation>
    BACK TO HOME
  </Button>
  <Button variant="outlined" color="primary">
    SEE CURRENT PROCESS
  </Button>
  </Grid>
  </Grid> */}

// Search contract address
{/* <>
<Typography variant="h1" style={{fontWeight: 'bold'}}> Search</Typography>
<Typography variant="h4"> by transaction hash / contract address </Typography>
<SearchBox/>
</> */}

//CertificatePaper(Edit)
{/* <CertificatePaper>
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
  <Typography variant="h4" style={{textDecoration: 'underline', fontWeight: 'bold'}}> STUD NAME </Typography>
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
        style={{fontSize: '53px', fontWeight: 'bold', textAlign: 'center'}}
        placeholder="100"
      />
      </td>
      <td>
      <ModifiedInputBase
        style={{fontSize: '53px', fontWeight: 'bold', textAlign: 'center'}}
        placeholder="100"
      />
      </td>
      <td>
      <ModifiedInputBase
        style={{fontSize: '53px', fontWeight: 'bold', textAlign: 'center'}}
        placeholder="100"
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
    <Button style={{width: '7em', margin: '0 0.5em', fontSize: '16px'}}>
      DONE
    </Button>
    <RedButton variant="outlined">
      Cancel
    </RedButton> 
  </Grid>
</div>
</CertificatePaper> */}

//Final Edit Step
{/* <>
<Typography variant="h1" style={{fontWeight: 'bold'}}> WAITING...</Typography>
<Typography variant="h5"> YOUR DATA IS BEING PROCESS </Typography>
<Typography variant="h5"> YOUR CONTRACT HAS UPDATED WITH TRANSCTION HASH </Typography>
<Typography variant="h4" style={{fontWeight: 'bold', margin: '1em 0'}}> 0xJLjelkqeu21314qwo12 </Typography>
</>

<Grid 
container
direction="row"
justify="center"
alignItem="center"
style={{margin: '1.75em 0 0.5em'}}
>
<Button style={{margin: '0 1em', marginRight: '3em', fontSize: '16px'}}>
  BACK TO HOME
</Button>
<BlueButton variant="outlined">
  EDIT ANOTHER CONTRACT
</BlueButton> 
</Grid>           */}

//Certificate
{/* <CertificatePaper>
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
  <Typography variant="h4" style={{textDecoration: 'underline', fontWeight: 'bold'}}> STUD NAME </Typography>
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
      > 90 </Typography>
      </td>
      <td>
      <Typography
        style={{fontSize: '36px', fontWeight: 'bold', textAlign: 'center'}}
      > 90 </Typography>
      </td>
      <td>
      <Typography
        style={{fontSize: '36px', fontWeight: 'bold', textAlign: 'center'}}
      > 90 </Typography>
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
  <Button style={{margin: '0 1em', marginRight: '3em', fontSize: '16px'}}>
    SAVE
  </Button>
  <RedButton variant="outlined">
    BACK
  </RedButton>
</Grid> */}

export default withRoot(App);
