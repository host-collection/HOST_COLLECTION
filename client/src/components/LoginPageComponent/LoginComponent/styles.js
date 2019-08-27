const styles = (theme) => ({
  login: {
    position: 'relative',
    width: '50%',
    overflow: 'hidden'
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
    padding: 30
  },
  active: {
    transform: 'none',
  },
  divField: {
    display: 'flex',
    marginTop: 15,
    marginBottom: 30
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
        content: "0",
        width: 100,
        height: '1',
        background: '#e1e1e1',
        position: 'absolute',
        top: '50%',
        left: 0,
        transform: 'translateY(-50%)',
        pointerEvents: 'none'
      }
    }
  }
});

export default styles;
