import React, { Component } from 'react'
// Styles
import { Container, Typography } from '@material-ui/core'
// Components

export default class Projects extends Component {
  render() {
    return (
      <React.Fragment>
        <Container style={{ minHeight: `60vh` }}>
          <Typography variant='h3' align='center' gutterBottom>
            Projects Page
          </Typography>
        </Container>
      </React.Fragment>
    )
  }
}
