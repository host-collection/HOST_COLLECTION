const styles = (theme) => ({
  aside: {
    width: 220,
    background: 'white',
    boxShadow: '4px 0px 3px rgba(0, 0, 0, .4)',
    height: '100vh',
    position: 'fixed',
    zIndex: 1000,
    left: 0,
    top: 0,
    overflowY: 'overlay',
    transition: '.3s',
    '&::-webkit-scrollbar': {
      width: 0,
    },
    '&::-webkit-scrollbar-track': {
      background: '#ccc',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'rgba(255,0,0,0)!important'
    },
    '&:hover': {
      '&::-webkit-scrollbar-thumb': {
        background: '#aaa!important',
      },
      '&::-webkit-scrollbar': {
        width: 7,
      }
    },
    [theme.breakpoints.down("md")]: {
      transform: 'translateX(-105%)',
    },
  },
  active: {
    transform: 'none'
  }
});

export default styles;
