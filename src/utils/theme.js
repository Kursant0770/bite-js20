import { createTheme } from '@mui/material/styles'
import { colors } from './colors'

export const theme = createTheme({
  typography: {
    fontFamily: 'Helvetica, Arial, sans-serif',
  },
  palette: {
    primary: { main: colors.green },
    error: { main: colors.red },
    warning: { main: colors.orange },
    green: { main: colors.green },
    red: { main: colors.red },
    yellow: { main: colors.yellow },
    orange: { main: colors.orange },
    black: { main: colors.black },
    white: { main: colors.white },
    greyLight: { main: colors.greyLight },
    greyMid: { main: colors.greyMid },
    greyDark: { main: colors.greyDark },
  },
})
