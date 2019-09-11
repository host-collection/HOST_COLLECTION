import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  color: {
    primary: '#666687',
    color2: '#b2b2be',
    color3: '#cbcbe0',
    color4: '#666666',
    color5: '#f0f0f0',
    color6: '#4d4d4d',
    color7: '#ff7bab',
    color8: '#b2b2b2',
    error: red[500]
  },
  breakpoints: {
    values: {
      xxs: 0,
      xs: 450,
      sm: 575,
      md: 767,
      lg: 960,
      xl: 1260,
    }
  }
});

export default theme;
export const keys = ['xs', 'sm', 'md', 'lg', 'xl'];
