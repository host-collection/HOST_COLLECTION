const styles = (theme) => ({
  register: {
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
  registerContent: {
    background: 'white',
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    transform: 'translateX(-100%)',
    transition: '.5s',
    padding: 30,
    '& h3': {
      textAlign: 'center'
    }
  },
  active: {
    transform: 'none',
  },
  divField: {
    position: 'relative',
  },
  showPassword: {
    position: 'absolute',
    top: 35,
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
  registerBtn: {
    width: '100%',
    textTransform: 'uppercase',
    marginTop: 15,
    background: theme.color.primary
  }
});

export default styles;
