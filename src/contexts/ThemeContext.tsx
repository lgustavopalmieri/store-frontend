import { createContext, useContext } from "react";
import { ThemeProvider } from '@mui/material'
import { Box } from "@mui/system";

import { DarkTheme } from "../shared/themes";

interface IThemeContext {
    themeName: 'dark';
}

interface IAppThemeProvider {
    children: React.ReactElement;
}

const ThemeContext = createContext({} as IThemeContext)

export const useAppThemeContext = () => {
    return useContext(ThemeContext)
}

export const AppThemeProvider: React.FC<IAppThemeProvider > = ({children}) => {

    const themeName  ='dark'

    const theme = DarkTheme 

    return(
        <ThemeContext.Provider value={{ themeName }}>
            <ThemeProvider theme={theme}>
                <Box width='100vw'  bgcolor={theme.palette.background.default}>
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}