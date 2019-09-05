const styles = (theme) => ({
  welcome: {
    display: 'flex',
    padding: '2px 10px',
    background: theme.color.color2,
    alignItems: 'center',
    justifyContent: 'space-between',
    color: theme.color.color6
  },
  logo: {
    display: 'block',
    width: 160,
    margin: '20px auto',
    [theme.breakpoints.down('md')]: {
      width: 'auto',
      height: 30
    },
  },
  locationName: {
    display: 'block',
    height: 20,
    lineHeight: '20px',
    color: 'white',
    background: theme.color.color6,
    textAlign: 'center'
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
  },
  logoutBtn: {
    background: 'none',
    border: 0,
    color: theme.color.color6,
    cursor: 'pointer',
    '& h6': {
      marginTop: -5
    },
    '&:focus': {
      outline: 'none'
    },
    '&:hover': {
      color: 'black'
    }
  },
  closeBtn: {
    display: 'none',
    background: 'none',
    border: 0,
    position: 'absolute',
    top: 5,
    right: 5,
    fontSize: 8,
    '& svg': {
      fontSize: 30
    },
    '&:focus': {
      outline: 'none'
    },
    '& h6': {
      marginTop: -5,
    },
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },
  openBtn: {
    display: 'none',
  },
  welcomeMobile: {
    position: 'fixed',
    display: 'none',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: 60,
    boxShadow: '0 3px 13px rgba(0, 0, 0, .4)',
    zIndex: 998,
    background: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 10px',
    '& h5': {
      order: -1,
      padding: '5px 10px',
      height: 'auto',
      lineHeight: 'initial'
    },
    '& img': {
      height: 40,
      width: 'auto',
      margin: 'auto'
    },
    '& .menuMobile': {
      display: 'block',
      marginLeft: 10
    },
    '& .closeMobile, & .Welcome-closeBtn-11': {
      display: 'none'
    },
    '& a, & button': {
      background: 'none',
      border: 0,
      textTransform: 'uppercase',
      color: theme.color.color6,
      '& h6': {
        fontSize: 8,
        margin: 0
      },
      '&:focus': {
        outline: 'none'
      }
    },
    '& div': {
      background: 'none',
      padding: 0
    },
    '& svg': {
      fontSize: 30
    },
    '& .welcomeMobile': {
      display: 'none'
    },
    [theme.breakpoints.down('md')]: {
      display: 'flex',
    },
  },
  welcomeText: {
    display: 'block'
  }
});

export default styles;
