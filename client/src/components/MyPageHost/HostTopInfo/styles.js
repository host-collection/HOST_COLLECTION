const styles = (theme) => ({
  avatarBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
    '& h5 a': {
      display: 'block',
      padding: "10px 15px",
      background: theme.color.primary,
      borderRadius: 3,
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
      minWidth: 100,
      fontWeight: '500',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 3px 6px rgba(0, 0, 0, .3)'
      }
    }
  },
  avatarBoxLeft: {
    display: 'flex',
    alignItems: 'center',
    '& img': {
      width: 120,
      height: 120,
      objectFit: 'cover',
      objectPosition: 'center',
      marginRight: 20,
      borderRadius: '50%',
      [theme.breakpoints.down("xs")]: {
        width: 70,
        height: 70,
        marginRight: 10
      }
    },
    '& h4': {
      color: theme.color.color4
    }
  }
});

export default styles;
