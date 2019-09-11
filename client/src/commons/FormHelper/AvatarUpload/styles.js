const styles = (theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    '& img': {
      height: 150,
      width: 150,
      marginRight: 10,
      objectFit: 'cover',
      objectPosition: 'center'
    }
  },
  avatarUpload: {
    '& > div > span': {
      width: 150,
      height: 150,
      background: 'white',
      border: '1px dashed #d9d9d9',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      borderRadius: 4,
      color: theme.color.color6,
      cursor: 'pointer',
      padding: 10,
      '& svg': {
        fontSize: 30,
      },
      '&:hover': {
        borderColor: theme.color.primary
      }
    }
  }
});

export default styles;
