const styles = (theme) => ({
  welcome: {
    display: 'flex',
    padding: '2px 10px',
    background: theme.color.color2,
    alignItems: 'center',
    justifyContent: 'space-between',
    color: theme.color.color6
  },
  loginBtn: {
    fontSize: 14,
    textAlign: 'center',
    '& h6': {
      marginTop: -5
    },
    '&:hover': {
      color: 'black'
    }
  }
});

export default styles;
