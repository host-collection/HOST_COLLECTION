const styles = (theme) => ({
  selectArea: {
    padding: '0 10px',
    margin: '20px 0',
    position: 'relative'
  },
  selectForm: {
    background: theme.color.color6,
    width: '100%',
    borderRadius: 5,
    overflow: 'hidden',
    transition: '.3s',
    '& select': {
      color: 'white',
      fontSize: 14,
      padding: 10,
    },
    '& option': {
      color: 'black',
      '&:hover': {
        backgroundColor: theme.color.primary
      }
    },
    '& svg': {
      color: 'white',
      right: 5
    },
    '&:hover': {
      background: theme.color.primary
    }
  }
});

export default styles;
