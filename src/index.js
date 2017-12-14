import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { unregister } from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from '../src/store';
// import { grey900, black, cyanA200, grey800, white, grey300, darkBlack,
//      fullBlack, cyan500, pinkA100, grey50, grey600, grey100, grey400,
//      blue500, blue300 } from 'material-ui/styles/colors';
import { MuiThemeProvider, getMuiTheme, spacing } from 'material-ui/styles';
import { white, black } from 'material-ui/styles/colors';
// import { fade } from 'material-ui/utils/colorManipulator';


const muiTheme = getMuiTheme({
    spacing: spacing,
    fontFamily: 'Roboto, sans-serif',
    "palette": {
        "primary1Color": "#bdbdbd",
        "primary2Color": "#424242",
        "textColor": "rgba(0, 0, 0, 0.87)",
        "accent1Color": "#42a5f5",
        "accent2Color": "#00b0ff",
        "accent3Color": "#82b1ff",
        "secondaryTextColor": "#000000",
        "alternateTextColor": black,
        "primary3Color": "#e0e0e0",
        "disabledColor": "#000000",
        "borderColor": "#000000",
        "pickerHeaderColor": "#2196f3",
        "clockCircleColor": "#ffffff",
        "canvasColor": "#fafafa"
    },
    "appBar": {
        color: white,
        "height": 70,
        
    },
    "tableRow": {
        "selectedColor": "rgba(0, 0, 0, 0.12)",
        "hoverColor": "#64b5f6"
    },
    "tabs": {
        "textColor": "#000000"
    },
    "textField": {
        "focusColor": "#212121"
    },
    "checkbox": {
        "checkedColor": "#42a5f5",
        "labelDisabledColor": "rgba(0, 0, 0, 0.54)"
    },
    "dialog": {
        "bodyColor": "rgba(0, 0, 0, 0.12)"
    },
    "tableHeaderColumn": {
        "textColor": "#000000"
    },
    "radioButton": {
        "checkedColor": "#42a5f5",
        "requiredColor": "#d32f2f"
    },
    "raisedButton": {
        primaryColor: "#757575"
    },
    "badge": {
        "color": "#000000",
        "primaryTextColor": "#ffffff",
        "primaryColor": "#bdbdbd"
    },
    "flatButton": {
        "primaryTextColor": "#000000",
        "buttonFilterColor": "#e0e0e0"
    },
    "stepper" : {
        "hoveredIconColor": "#2196f3",
        iconColor: "#2196f3",
    },
    "snackBar": {
        height: 50
    }
})

// const muiTheme = getMuiTheme({
//     spacing: spacing,
//     fontFamily: 'Roboto, sans-serif',
//     palette: {
//       primary1Color: grey400,
//       primary2Color: blue500,
//       primary3Color: black,
//       accent1Color: blue500,
//       accent2Color: pinkA100,
//       accent3Color: black,
//       secondaryTextColor: white,
//       textColor: black,
//       alternateTextColor: black,
//       canvasColor: grey100,
//       borderColor: grey600,
//       disabledColor: fade(darkBlack, 0.3),
//       pickerHeaderColor: blue500,
//       clockCircleColor: fade(darkBlack, 0.07),
//       shadowColor: fullBlack,
//     }, 
//     appBar: {
//         height: 70,
//     },
//     datePicker: {
//         textColor: black,
//         selectTextColor: black,
//         secondaryTextColor: black,
//         alternateTextColor: black,
//     }
//   });

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
    <MuiThemeProvider muiTheme={ muiTheme } >
        <App />
    </MuiThemeProvider>
    </Provider>
    , document.getElementById('root'));
unregister();
