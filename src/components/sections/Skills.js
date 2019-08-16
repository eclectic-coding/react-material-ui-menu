import React from 'react'
// Styles
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Typography } from '@material-ui/core'
// Components
import skillsList from '../sections/skillsList'

const useStyles = makeStyles(theme => ({
  skillsHeader: {
    // marginTop: 0,
    padding: '20px 0'
  }
}))

export default function Skills({ children }) {
  const classes = useStyles()

  return (
    <Container fixed>
      <Typography
        variant='h3'
        style={{ textAlign: `center` }}
        className={classes.skillsHeader}
      >
        Technologies / Skills
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify='center' spacing={3}>
            {skillsList.map(item => {
              return (
                <Grid item key={item.id}>
                  <a href={item.url} target='_blank' rel='noopener noreferrer'>
                    <img src={item.imgSrc} alt={item.alt} />
                  </a>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
      {children}
    </Container>
  )
}
