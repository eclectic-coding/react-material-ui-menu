import React from 'react'
// Styles
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  heroSectionContent: {
    position: 'relative',
    padding: theme.spacing(3),
    marginTop: '150px',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  }
}))
export default function Banner({ title, subtitle }) {
  const classes = useStyles()

  return (
    <React.Fragment>
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.heroSectionContent}>
            <Typography
              component='h1'
              variant='h3'
              color='inherit'
              gutterBottom
            >
              Chuck Smith
            </Typography>
            <Typography variant='h5' color='inherit' paragraph>
              Message
            </Typography>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
