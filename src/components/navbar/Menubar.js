import React from 'react'
import { Link } from '@reach/router'
// Styles
import {
  Avatar,
  Container,
  Divider,
  Fade,
  Grid,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { FaEnvelope, FaGithub } from 'react-icons/fa'
// Components
import profilePic from '../../images/avatar.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  avatar: {
    margin: '10px 0 20px 0',
    width: 90,
    height: 90,
    borderRadius: '50%'
  },
  icon: {
    color: '#777777',
    margin: `0 5px`
  },
  profileName: {
    margin: `0 20px 5px 20px`,
    textAlign: `left`
  },
  profileEmail: {
    margin: `0 20px 100px 20px`,
    textAlign: `left`
  },
  menuButton: {
    marginRight: theme.spacing(2),
    zIndex: 4
  },
  menuPaper: {
    top: 32,
    margin: `1rem`
  }
}))

function Menubar() {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  function handleClick(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  return (
    <React.Fragment>
      <Container maxWidth='lg'>
        <Toolbar>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='Menu Toggle Button.'
            onClick={handleClick}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Menu
          id='fade-menu'
          anchorEl={anchorEl}
          keepmounted='true'
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <Grid container justify='center' alignItems='center'>
            <Avatar
              alt='Profile image, just a head shot.'
              src={profilePic}
              className={classes.avatar}
            >
              CS
            </Avatar>
          </Grid>
          <h3 className={classes.profileName}>Chuck Smith</h3>
          <span className={classes.profileEmail}>
            <a
              href='mailto:chuck@eclecticsaddlebag.com'
              aria-label='Email me.'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaEnvelope size={25} className={classes.icon} />
            </a>
            <a
              href='https://github.com/eclectic-coding'
              aria-label='Email me.'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub size={25} className={classes.icon} />
            </a>
          </span>
          <Divider style={{ marginTop: `10px` }} />
          <MenuItem onClick={handleClose}>
            <Link to='/'>Home</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to='/projects'>Projects</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to='/about'>About</Link>
          </MenuItem>
        </Menu>
      </Container>
    </React.Fragment>
  )
}

export default Menubar
