const styles = (theme) => ({
  myPageContent: {
    background: theme.color.color5,
    padding: 30,
    minHeight: '85vh',
    [theme.breakpoints.down('sm')]: {
      padding: 15,
      margin: '0 -15px'
    }
  }
});

export default styles;
