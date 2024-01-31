import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { AppScreenWidthProvider } from './contexts/screen-size-context/screen-size-context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppScreenWidthProvider>
      <App />
    </AppScreenWidthProvider>
  </React.StrictMode>,
)
