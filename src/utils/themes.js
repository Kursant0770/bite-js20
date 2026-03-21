import { createTheme } from '@mui/material/styles'

export const colors = {
  green: '#48C602',
  red: '#DF1E23',
  yellow: '#FDDF01',
  orange: '#FF861A',
  black: '#000000',
  white: '#FFFFFF',
  greyLight: '#F5F4F2',
  greyMid: '#BDBDBD',
  greyDark: '#E3E3E3',
}

export const textStyles = {
  H1_Bold_40: {
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: '40px',
    fontWeight: 700,
    lineHeight: 1.2,
  },
  H1_Regular_32: {
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: '32px',
    fontWeight: 400,
    lineHeight: 1.2,
  },
  H1_Bold_32: {
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: '32px',
    fontWeight: 700,
    lineHeight: 1.2,
  },

  H2_Bold_24: {
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: 1.3,
  },
  H2_Regular_24: {
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: '24px',
    fontWeight: 400,
    lineHeight: 1.3,
  },
  H2_Raleway_24: {
    fontFamily: 'Raleway, sans-serif',
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: 1.3,
  },

  Body_Bold_20: {
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: '20px',
    fontWeight: 700,
    lineHeight: 1.4,
  },
  Body_Regular_20: {
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: 1.4,
  },
  Body_Bold_16: {
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: 1.4,
  },
  Body_Regular_16: {
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 1.4,
  },
  Body_Regular_13: {
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: '13px',
    fontWeight: 400,
    lineHeight: 1.4,
  },
  Body_Regular_10: {
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: '10px',
    fontWeight: 400,
    lineHeight: 1.4,
  },
}

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
