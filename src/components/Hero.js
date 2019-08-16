import React from 'react'
// Styles
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Paper, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  heroSection: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    top: 0,
    height: '80vh',
    marginTop: '-80px',
    marginBottom: 0,
    backgroundImage: 'url(https://source.unsplash.com/user/goran_ivos)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    [theme.breakpoints.down('xs')]: {
      height: '40vh'
    }
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)'
  },
  heroSectionContent: {
    position: 'relative',
    padding: theme.spacing(3),
    marginTop: '150px',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
      marginTop: '60px'
    },
    [theme.breakpoints.up('xs')]: {
      marginTop: '60px'
    }
  }
}))

export default function Hero() {
  const classes = useStyles()

  return (
    <div>
      <Paper className={classes.heroSection}>
        {/* Increase the priority of the hero background image */}
        {
          <img
            style={{ display: 'none' }}
            src='https://source.unsplash.com/user/goran_ivos'
            alt='background'
          />
        }
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
      </Paper>
    </div>
  )
}
