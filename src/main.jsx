import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material'

const createdTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#800000',
    },
    secondary: {
      main: '#e0d85f',
    },
    background: {
      default: '#efefef',
      paper: '#ffffff',
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={createdTheme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
)
