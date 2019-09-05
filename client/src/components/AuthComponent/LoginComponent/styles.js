const styles = (theme) => ({
  login: {
    position: 'relative',
    width: '50%',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      position: 'absolute',
      top: 50,
      left: 0,
      overflow: 'initial'
    }
  },
  button: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'none',
    border: 'none',
    fontSize: 30,
    fontWeight: '500',
    fontFamily: 'inherit',
    color: 'white',
    transition: '.3s',
    cursor: 'pointer',
    padding: 30,
    width: '100%',
    '&:focus': {
      outline: 'none'
    },
    '&:hover': {
      color: theme.color.color7
    },
    [theme.breakpoints.down("sm")]: {
      position: 'absolute',
      background: theme.color.color3,
      top: -45,
      left: 5,
      width: 'calc(50% - 7.5px)',
      zIndex: 10,
      transform: 'none',
      fontSize: 16,
      padding: 10,
      '&:hover': {
        color: 'white',
      },
      '&.active': {
        background: theme.color.primary
      }
    }
  },
  loginContent: {
    background: 'white',
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    transform: 'translateX(100%)',
    transition: '.5s',
    padding: 30,
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      zIndex: 10
    },
    [theme.breakpoints.down('xs')]: {
      padding: 15
    }
  },
  active: {
    transform: 'none',
  },
  divField: {
    display: 'flex',
    marginBottom: 30,
    position: 'relative',
  },
  showPassword: {
    position: 'absolute',
    top: 15,
    right: 15,
    cursor: 'pointer',
    border: 0,
    background: 'none',
    '& svg': {
      fontSize: 20,
      color: theme.color.color4
    },
    '&:focus': {
      outline: 'none'
    },
    '&:hover svg': {
      color: theme.color.primary
    }
  },
  icon: {
    width: 50,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #ccc',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    '& svg': {
      color: theme.color.color4
    }
  },
  textField: {
    width: 'calc(100% - 48px)',
    marginLeft: -2,
    '& div': {
      marginTop: 0,
      '&::before, &::after': {
        content: 'none'
      }
    },
    '& input': {
      padding: 10,
      border: '2px solid #ccc',
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
      height: 26,
      '&:before': {
        content: 'none'
      }
    },
    '& label': {
      marginLeft: 2,
      marginTop: -15,
      padding: 9,
      background: 'white',
      zIndex: 10,
      cursor: 'text'
    }
  },
  loginRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  loginBtn: {
    background: theme.color.primary,
    padding: '6px 40px'
  },
  forgot: {
    color: theme.color.color4,
    textDecoration: 'underline',
    '&:hover': {
      color: theme.color.primary,
      textShadow: '0 3px 6px rgba(0, 0, 0, .5)'
    }
  },
  orLine: {
    marginTop: 20,
    '& h5': {
      textAlign: 'center',
      position: 'relative',
      '&::before': {
        content: "attr(href)",
        width: '100%',
        height: 1,
        background: '#e1e1e1',
        position: 'absolute',
        top: '50%',
        left: 0,
        transform: 'translateY(-50%)',
      },
      '& span': {
        padding: '0 10px',
        position: 'relative',
        zIndex: 1,
        color: theme.color.color6,
        background: 'white'
      }
    },
    '& i': {
      color: theme.color.color6,
      display: 'block',
      textAlign: 'center',
      marginTop: 5
    }
  },
  socialBtnBox: {
    '& button': {
      width: '100%',
      height: 50,
      borderRadius: 5,
      position: 'relative',
      textAlign: 'center',
      marginTop: 20,
      color: 'white',
      '&:hover': {
        filter: 'brightness(.9)',
        boxShadow: '0 3px 10px rgba(0, 0, 0, .5)',
        transform: 'translateY(-3px)'
      }
    },
    '& img': {
      width: 20,
      height: 20,
      position: 'absolute',
      left: 15,
      top: 15
    }
  },
  amebaBtn: {
    background: '#2d8c3c',
    '&:hover': {
      background: '#2d8c3c'
    }
  },
  googleBtn: {
    background: '#dd4b39',
    '&:hover': {
      background: '#dd4b39'
    }
  }
});

export default styles;
