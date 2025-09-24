import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SnackbarProvider } from "notistack";
import "bootstrap-icons/font/bootstrap-icons.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <SnackbarProvider 
      maxSnack={3}      
      anchorOrigin={{
        vertical: "top", 
        horizontal: "right", 
      }}
    >
    <App />
    </SnackbarProvider>
  </React.StrictMode>,
)
