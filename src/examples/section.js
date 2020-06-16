import React from 'react'
import {Container, withStyles} from '@material-ui/core'

const style = theme => ({
    root: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
          height: '85vh',
          minHeight: 500,
          maxHeight: 1300,
        },
    },
    container: {
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
})

function Section(props){
    const {children, classes} = props;
    return(
        <section className={classes.root}>
            <Container className={classes.container}>
                {children}
            </Container>
        </section>
    )
}

export default withStyles(style)(Section)