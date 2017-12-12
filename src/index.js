import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { unregister } from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from '../src/store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import { grey900, black, cyanA200, grey800, white, grey300, darkBlack, fullBlack, cyan500, pinkA100, grey50, grey600, grey100 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import spacing from 'material-ui/styles/spacing';
import {fade} from 'material-ui/utils/colorManipulator';


// const muiTheme = getMuiTheme({
//     spacing: spacing,
//     fontFamily: 'Roboto, sans-serif',
//     palette: {
//       primary1Color: grey50,
//       primary2Color: grey800,
//       accent1Color: cyanA200,
//       accent2Color: pinkA100,
//       // accent3Color: grey500,
//       secondaryTextColor: black,
//       textColor: black,
//       alternateTextColor: black,
//       canvasColor: grey100,
//       borderColor: grey600,
//       disabledColor: fade(darkBlack, 0.3),
//       pickerHeaderColor: grey50,
//       clockCircleColor: fade(darkBlack, 0.07),
//       shadowColor: fullBlack,
      
//     }
//   });
// const muiTheme = getMuiTheme({
//     spacing: spacing,
//     fontFamily: 'Roboto, sans-serif',
//     palette: {
//       primary1Color: grey900,
//       primary2Color: grey800,
//       accent1Color: cyanA200,
//       // accent2Color: grey100,
//       // accent3Color: grey500,
//       textColor: white,
//       alternateTextColor: cyanA200,
//       canvasColor: grey800,
//       borderColor: grey300,
//       disabledColor: fade(darkBlack, 0.3),
//       pickerHeaderColor: cyanA200,
//       clockCircleColor: fade(darkBlack, 0.07),
//       shadowColor: fullBlack,
//     }
//   });

ReactDOM.render(
    <Provider store={ store } >
    <MuiThemeProvider >
        <App />
    </MuiThemeProvider>
    </Provider>
    , document.getElementById('root'));
unregister();
