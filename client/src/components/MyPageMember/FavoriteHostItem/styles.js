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
    '& h4, & img': {
      transition: '.3s'
    },
    '& h5': {
      marginTop: 7,
      color: theme.color.color4
    },
    '&:hover': {
      '& h4': {
        color: theme.color.primary
      },
      '& img': {
        filter: 'brightness(.7)'
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
