import Button from '@material-ui/core/Button'
import {withStyles} from '@material-ui/core/styles'

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
  