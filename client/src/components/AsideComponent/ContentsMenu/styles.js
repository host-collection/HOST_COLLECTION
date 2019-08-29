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
    }
  }
});

export default styles;
