const styles = (theme) => ({
  photoUpload: {
    margin: '20px 0',
    paddingBottom: 20,
    borderBottom: '1px solid #e1e1e1'
  },
  photoGalleryZone: {
    maxHeight: '95vh',
    overflowY: 'overlay',
    width: '100%',
    marginBottom: 30,
    [theme.breakpoints.down("lg")]: {
      overflowX: 'overlay',
    },
  },
  photoGallery: {
    columnCount: 5,
    columnGap: 15,
    [theme.breakpoints.down("lg")]: {
      columnCount: 4,
    },
    [theme.breakpoints.down("sm")]: {
      columnCount: 21,
      width: 3000,
      columnGap: 10
    }
  },
  photoItem: {
    padding: 10,
    background: 'white',
    border: '1px solid #e1e1e1',
    borderRadius: 4,
    position: 'relative',
    marginBottom: 15,
    display: 'inline-block',
    '& img': {
      height: '100%',
      width: '100%',
      transition: '.3s'
    },
    '&:hover': {
      '& img': {
        filter: 'brightness(.3)'
      },
      '& > div': {
        opacity: 1
      }
    },
    [theme.breakpoints.down("sm")]: {
      padding: 5,
      marginBottom: 10
    }
  },
  photoOptions: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2,
    opacity: 0,
    '& button': {
      background: 'none',
      border: 0,
      margin: 5,
      cursor: 'pointer',
      fontSize: 20,
      color: 'white',
      transition: '.3s',
      '&:hover, &:focus': {
        color: theme.color.color7,
        outline: 'none'
      }
    }
  }
});

export default styles;
