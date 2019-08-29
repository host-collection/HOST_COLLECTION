const styles = (theme) => ({
  promotionAside: {
    '& h5': {
      textAlign: 'center',
      padding: '5px 0',
      background: theme.color.color2
    },
  },
  socialBox: {
    padding: 10,
    textAlign: 'center',
    '& img': {
      margin: 10,
      width: 30,
      transition: '.3s',
      '&:hover': {
        filter: 'brightness(.7)'
      }
    }
  },
  noteAside: {
    padding: '10px',
    marginBottom: 20,
    textAlign: 'center',
    borderTop: '1px solid #e1e1e1',
    borderBottom: '1px solid #e1e1e1',
    color: theme.color.color6,
    fontWeight: '600'
  }
});

export default styles;
