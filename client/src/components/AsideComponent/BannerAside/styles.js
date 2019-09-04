const styles = () => ({
  bannerAside: {
    padding: 10,
    position: 'relative',
    '& a': {
      display: 'flex',
      overflow: 'hidden',
      marginBottom: 8,
      borderRadius: 3,
    },
    '& img': {
      borderRadius: 3,
      transition: '.3s',
      '&:hover': {
        transform: 'scale(1.2)'
      }
    }
  }
});

export default styles;
