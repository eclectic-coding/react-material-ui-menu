import React from 'react'
// Styles
import { Container, Typography } from '@material-ui/core'
//Components

export default function Home() {
  return (
    <React.Fragment>
      <Container style={{ minHeight: `60vh` }}>
        <Typography variant='h3' align='center' gutterBottom>
          Home Page
        </Typography>
      </Container>
    </React.Fragment>
  )
}
