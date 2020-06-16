import React from 'react'
import Section from './examples/section'
import Typography from '@material-ui/core'

import SearchBox from './components/SearchBox'

export const MonotonTypo = withStyles({root: {
    fontFamily: "'Monoton', cursive",
    fontSize: '113px'
}})(Typography)

export default function MainPages(){
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
        <SearchBox/>
      </Section>
      <Typography style={{fontWeight: 'bold', textAlign: 'center'}}>TOEFL Certificate secured by Blockchain-Enabled application</Typography>
    </>
    )
}