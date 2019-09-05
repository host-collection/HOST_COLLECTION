const styles = (theme) => ({
  formGroup: {
    marginBottom: 30,
    '& .uploadPictureContainer': {
      width: '30%',
      margin: '1%'
    }
  },
  switchGroup: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingBottom: 20,
    borderBottom: `1px dashed ${theme.color.color3}`,
    '& h5': {
      color: theme.color.color6
    }
  },
  buttonGroup: {
    textAlign: 'center',
    '& button': {
      background: theme.color.primary,
      border: 0,
      width: 140,
      textAlign: 'center',
      height: 50,
      lineHeight: '50px',
      color: 'white',
      fontSize: 20,
      borderRadius: 5,
      marginRight: 10,
      cursor: 'pointer'
    },
    '& a': {
      display: 'inline-block',
      background: theme.color.color2,
      width: 140,
      textAlign: 'center',
      height: 50,
      lineHeight: '50px',
      color: theme.color.color6,
      fontSize: 20,
      borderRadius: 5,
    },
    '& a:hover, & button:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 3px 10px rgba(0, 0, 0, .5)'
    }
  }
});

export default styles;
