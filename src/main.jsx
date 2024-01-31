import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';

// Importing Providers
import { AppScreenWidthProvider } from './contexts/screen-size-context/screen-size-context.jsx';
import { AppDataProvider } from './contexts/data-context/data-context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppScreenWidthProvider>
      <AppDataProvider>
        <App />
      </AppDataProvider>
    </AppScreenWidthProvider>
  </React.StrictMode>
)
