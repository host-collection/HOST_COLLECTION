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
    transition: '.5s'
  },
  active: {
    transform: 'none',
  }
});

export default styles;
