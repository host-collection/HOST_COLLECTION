import bg from '../../assets/images/bg-login.jpg';

const styles = (theme) => ({
  loginWrapper: {
    maxWidth: 800,
    margin: '30px auto',
    backgroundImage: `url(${bg})`,
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    display: 'flex',
    flexWrap: 'wrap',
    height: 500,
    border: '1px solid #e1e1e1',
    boxShadow: '0 0 10px rgba(0, 0, 0, .2)',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      background: 'none',
      position: 'relative',
      margin: 0
    }
  }
});

export default styles;
