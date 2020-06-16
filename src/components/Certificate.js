import Paper from '@material-ui/core/Paper'
import {withStyles} from '@material-ui/core/styles'

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
      alignItems: 'center',
      margin: 'auto'
    }
  })(Paper)
  