const styles = (theme) => ({
  aside: {
    width: 220,
    background: 'white',
    boxShadow: '4px 0px 3px rgba(0, 0, 0, .4)',
    height: '100vh',
    position: 'fixed',
    left: 0,
    top: 0,
    overflowY: 'overlay',
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
    }
  },
  logo: {
    display: 'block',
    width: 160,
    margin: '20px auto',
  },
  locationName: {
    display: 'block',
    height: 20,
    lineHeight: '20px',
    color: 'white',
    background: theme.color.color6,
    textAlign: 'center'
  }
});

export default styles;
