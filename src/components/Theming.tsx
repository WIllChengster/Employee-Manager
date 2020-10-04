import React from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

type ThemingProps = {
    children: React.ReactNode
}

const themeInstance = createMuiTheme({
    spacing: 2,
    palette: {
        primary: {
            main: '#131c2e',
            light: '#202b43'
        },
        secondary: {
            main: '#25334e',
            light: '#e5ebef'
        },
    },
})

const Theming = ({children}: ThemingProps) => {
    return (
        <div>
            <ThemeProvider theme={themeInstance}>
                {children}
            </ThemeProvider>
        </div>
    )
}

export default Theming