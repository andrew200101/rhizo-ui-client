import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { Store } from './store/Store';
import theme from './settings/material-ui-theme';

ReactDOM.render(
    // <React.StrictMode>
    <Provider store={Store}>
        <ThemeProvider theme={theme}>
            {/* <CssBaseline /> */}
            <App />
        </ThemeProvider>
    </Provider>,
    // </React.StrictMode>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
