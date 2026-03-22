import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'
import { ThemeProvider } from '@mui/material'
import { colors } from './utils/colors.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={colors}>  
     <App />
    </ThemeProvider>  
  </StrictMode>
)
