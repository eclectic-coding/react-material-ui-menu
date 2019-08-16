// Libraries
import React from 'react'
// Styles
import { Container, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0)
  }
}))

export default function Section() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <footer className={classes.footer}>
        <Container maxWidth='lg'>
          <Typography variant='h6' align='center' gutterBottom>
            Footer
          </Typography>
          <Typography
            variant='subtitle1'
            align='center'
            color='textSecondary'
            component='p'
          >
            Something here to give the footer a purpose!
          </Typography>
        </Container>
      </footer>
    </React.Fragment>
  )
}
