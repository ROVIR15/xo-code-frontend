import InputBase from '@material-ui/core/InputBase'
import {withStyles} from '@material-ui/core/styles'

export const ModifiedInputBase = withStyles({
  root: {
    fontWeight: 'bold',
    fontSize: '53px'
  },
  input: {
    textAlign: 'center'
  }
})(InputBase)


export const LogFrom = withStyles({
  root: {
    border: '1px black solid',
    borderRadius: '0.75rem',
    padding: '0.2em 0.5em ',
    margin: '0.5em 0'
  }
})(InputBase)