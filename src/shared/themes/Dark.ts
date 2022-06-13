import { createTheme} from '@mui/material'
import { deepOrange, deepPurple } from '@mui/material/colors'
import { IDarkThemeProps } from './interfaces'

export const DarkTheme: IDarkThemeProps = createTheme({
    palette:{
        primary:{
            main: deepPurple[600],
            dark: deepPurple[700],
            light: deepPurple[300],
            contrastText: '#ffffff',
        },
        secondary:{
            main: deepOrange[600],
            dark: deepOrange[500],
            light: deepOrange[400],
            contrastText: '#ffffff',
        },
        background: {
            default: '#f7f6f3',
            paper: '#303134',           
        }        
    }
})

