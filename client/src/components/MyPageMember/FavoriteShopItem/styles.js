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
    '& h4': {
      transition: '.3s'
    },
    '& h5': {
      marginTop: 7,
      color: theme.color.color4,
      '& a': {
        color: 'white',
        display: 'table',
        background: theme.color.primary,
        borderRadius: 3,
        padding: '0 10px',
        minWidth: 90,
        height: 30,
        lineHeight: '30px',
        marginTop: 10,
        border: `2px solid ${theme.color.primary}`,
        '&:hover': {
          background: 'none',
          color: theme.color.primary,
        }
      }
    }
  },
  boxRight: {
    display: 'flex'
  },
  boxRightBtn: {
    width: 80,
    height: 80,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'white',
    border: `1px solid ${theme.color.color3}`,
    borderRadius: 5,
    marginLeft: 15,
    fontSize: 10,
    color: theme.color.color6,
    cursor: 'pointer',
    transition: '.3s',
    '& svg': {
      fontSize: 40,
      marginBottom: 5
    },
    '&:focus, &:hover': {
      outline: 'none',
      background: theme.color.primary,
      color: 'white'
    }
  }
});

export default styles;
