// Libraries
import React from 'react'
// Styles
import { Container, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(1, 0)
  }
}))

export default function Section() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <footer className={classes.footer}>
        <Container maxWidth='sm'>
          <hr style={{ border: ` 1px solid #ececec` }} />
          <Typography variant='h6' align='center' gutterBottom>
            Material-UI Mobile Menu
          </Typography>
          <Typography
            variant='subtitle1'
            align='center'
            color='textSecondary'
            component='p'
          >
            Tutorial on Medium for Mobile Menu
          </Typography>
        </Container>
      </footer>
    </React.Fragment>
  )
}
