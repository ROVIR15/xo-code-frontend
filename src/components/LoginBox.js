import Paper from '@material-ui/core'
import withStyles from '@material-ui/core/styles'

export const BPaper = withStyles({
    root: {
      border: '2px solid black',
      borderRadius: '0.75em'
    }
})(Paper)