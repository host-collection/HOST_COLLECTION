const styles = () => ({
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  article: {
    width: 'calc(100% - 220px)',
    padding: 30,
    paddingTop: 15,
    marginLeft: 220,
  },
  loadingComponent: {
    position: 'fixed',
    zIndex: 10000,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0
  },
  loadingIcon: {
    position: 'fixed',
    zIndex: 100000,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
});

export default styles;
