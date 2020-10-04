import React from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

type ThemingProps = {
    children: React.ReactNode
}

const themeInstance = createMuiTheme({
    spacing: 2,
    
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