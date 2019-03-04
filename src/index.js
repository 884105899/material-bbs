import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
    typography: {
        useNextVariants: true,
    },
})
/*  在路由中使用withStyles以及connect()的方法如下
    export default withRouter(connect()(withStyles(styles)(FirstPage)))
*/
ReactDOM.render(
    <React.Fragment>
        <CssBaseline>
            <MuiThemeProvider theme={theme}>
                <App />
            </MuiThemeProvider>
        </CssBaseline>
    </React.Fragment>
    , document.getElementById('root'));
