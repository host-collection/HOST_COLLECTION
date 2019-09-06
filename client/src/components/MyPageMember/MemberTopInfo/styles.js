const styles = (theme) => ({
  avatarBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30
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
  },
  settingBtn: {
    fontSize: 70,
    color: theme.color.color4,
    '&:hover': {
      color: theme.color.primary
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 40
    }
  },
  nominated: {
    color: theme.color.color6,
    marginBottom: 30
  },
  listFavorite: {
    color: theme.color.color6,
    marginBottom: 30
  },
  goToShopManage: {
    display: 'table',
    padding: '10px 20px',
    background: theme.color.primary,
    color: 'white',
    borderRadius: 3,
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 3px 6px rgba(0, 0, 0, .3)'
    }
  }
});

export default styles;
