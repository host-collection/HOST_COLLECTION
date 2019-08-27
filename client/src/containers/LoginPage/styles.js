import bg from '../../assets/images/bg-login.jpg';

const styles = () => ({
  loginWrapper: {
    maxWidth: 1000,
    margin: '30px auto',
    backgroundImage: `url(${bg})`,
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    display: 'flex',
    flexWrap: 'wrap',
    height: '80vh',
    border: '1px solid #e1e1e1',
    boxShadow: '0 0 10px rgba(0, 0, 0, .2)',
    overflow: 'hidden'
  }
});

export default styles;
