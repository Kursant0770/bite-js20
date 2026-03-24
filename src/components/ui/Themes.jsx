import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: 'Helvetica, Arial, sans-serif',
  },
  palette: {
    primary: { main: '#48C602' },
    error: { main: '#DF1E23' },
    warning: { main: '#FF861A' },
    green: { main: '#48C602' },
    red: { main: '#DF1E23' },
    yellow: { main: '#FDDF01' },
    orange: { main: '#FF861A' },
    black: { main: '#000000' },
    white: { main: '#FFFFFF' },
    greyLight: { main: '#F5F4F2' },
    greyMid: { main: '#BDBDBD' },
    greyDark: { main: '#E3E3E3' },
  },
})

const Themes = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>

export default Themes
