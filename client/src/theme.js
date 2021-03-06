import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { pink, indigo, teal, lime, yellow, deepOrange } from '@material-ui/core/colors';

let theme = createMuiTheme({
    palette: {
        text: {
            primary: indigo['A700'],
            secondary: 'white',
            disabled: yellow['50'],
            hint: yellow['A400'],
        },
        white: 'white',
        primary: {
            light: 'white',
            main: pink['50'],
            dark: pink['A400'],
            contrastText: 'black'
        },
        secondary: {
            light: indigo['50'],
            main: indigo['A100'],
            dark: indigo['A400'],
            contrastText: 'black'
        },
        error: {
            light: deepOrange['50'],
            main: deepOrange['A100'],
            dark: deepOrange['A400'],
            contrastText: 'black'
        },
        warning: {
            light: yellow['50'],
            main: yellow['A100'],
            dark: yellow['A400'],
            contrastText: 'black'
        },
        info: {
            light: teal['50'],
            main: teal['A100'],
            dark: teal['A400'],
            contrastText: 'black'
        },
        success: {
            light: lime['50'],
            main: lime['A100'],
            dark: lime['A400'],
            contrastText: 'black'
        }
    },
    overrides: {
        MuiButton: {
            label: {
                color: indigo['A700'],
            },
        },
    }
});

theme = responsiveFontSizes(theme);

export default theme;
