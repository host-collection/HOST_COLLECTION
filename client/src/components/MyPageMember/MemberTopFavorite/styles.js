const styles = (theme) => ({
  tabBar: {
    display: 'table',
    width: 'auto'
  },
  tabItem: {
    position: 'relative',
    zIndex: 1,
    minHeight: 'auto',
    '& span': {
      flexDirection: 'row',
      display: 'flex',
      fontSize: 16,
      '& svg': {
        fontSize: 30,
        marginRight: 10
      }
    },
    '&:hover': {
      color: theme.color.primary
    }
  },
  indicator: {
    height: '100%',
    background: theme.color.primary
  },
  active: {
    color: 'white!important'
  }
});

export default styles;
