import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from "@material-ui/styles";
import App from './containers/App';
import theme from "./commons/Theme";
import * as serviceWorker from './serviceWorker';

const appProvider = (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)

ReactDOM.render(appProvider, document.getElementById('root'));
serviceWorker.unregister();
