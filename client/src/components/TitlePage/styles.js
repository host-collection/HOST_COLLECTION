const styles = (theme) => ({
  titlePage: {
    border: `4px solid ${theme.color.color2}`,
    borderRadius: 10,
    width: '100%',
    padding: 10,
    marginBottom: 30,
    '& h1': {
      color: theme.color.color6,
      lineHeight: 1
    }
  }
});

export default styles;
