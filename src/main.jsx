import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { ScreenPositionProvider } from './contexts/screen-position-context/screen-position.context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ScreenPositionProvider>
      <App />
    </ScreenPositionProvider>
  </React.StrictMode>,
)
