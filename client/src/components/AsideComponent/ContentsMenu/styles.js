const styles = (theme) => ({
  contentsMenu: {
    '& h5': {
      textAlign: 'center',
      padding: '5px 0',
      background: theme.color.color2
    },
    '& ul': {
      padding: '0 15px',
      '& li a': {
        display: 'flex',
        alignItems: 'center',
        fontSize: 16,
        fontWeight: 500,
        color: theme.color.color4,
        padding: '15px 0',
        borderBottom: `1px dashed ${theme.color.color8}`,
        '&:hover, &.active': {
          color: theme.color.primary,
          borderBottom: `1px solid ${theme.color.primary}`
        },
        '& svg': {
          marginRight: 10
        }
      }
    },
    '&.mobile': {
      display: 'none',
      [theme.breakpoints.down('sm')]: {
        display: 'block',
        margin: '-15px -15px 30px -15px',
        '& h5': {
          display: 'none'
        },
        '& ul': {
          display: 'flex',
          padding: 0,
          overflowX: 'scroll',
          '& li a': {
            border: 0,
            borderRight: `2px solid ${theme.color.color3}`,
            width: 75,
            height: 75,
            background: theme.color.color5,
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: 10,
            '& svg': {
              fontSize: 40,
              margin: 0,
              marginBottom: 10,
            }
          }
        }
      }
    }
  }
});

export default styles;
