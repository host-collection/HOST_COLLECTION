const styles = (theme) => ({
  mainMenu: {
    margin: 10,
    marginTop: 0,
    background: theme.color.color5,
    border: '1px solid #e1e1e1',
    padding: 10,
    borderRadius: 5,
  },
  mainLink: {
    background: 'white',
    color: theme.color.color4,
    borderRadius: 3,
    marginBottom: 3,
    padding: '5px 10px',
    display: 'flex',
    alignItems: 'center',
    fontSize: 16,
    '&:hover': {
      background: theme.color.primary,
      color: 'white',
    },
    '&.active': {
      background: theme.color.primary,
      color: 'white'
    }
  },
  icon: {
    marginRight: 10,
  }
});

export default styles;
