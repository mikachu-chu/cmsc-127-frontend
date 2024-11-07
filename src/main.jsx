import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material'

const createdTheme = createTheme({
    palette: {
        primary: {
            main: '#776c94'
        },
        secondary: {
            main: '#aea6c5',
            light: '#aea6c5',
            dark: '#423a59',
        },
    },
    typography: {
        fontFamily: 'Arvo',
    }
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={createdTheme}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ThemeProvider>
)
