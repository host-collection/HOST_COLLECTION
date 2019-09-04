const styles = (theme) => ({
  box: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 0',
    borderBottom: `1px dashed ${theme.color.color3}`
  },
  boxLeft: {
    display: 'flex',
    '& img': {
      width: 100,
      height: 100,
      borderRadius: '50%',
      objectFit: 'cover',
      objectPosition: 'center',
      marginRight: 20
    },
    '& h5': {
      marginTop: 7,
      color: theme.color.color4
    }
  }
});

export default styles;
