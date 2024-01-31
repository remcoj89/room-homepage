import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';

// Importing Providers
import { AppScreenWidthProvider } from './contexts/screen-size-context/screen-size-context.jsx';
import { AppDataProvider } from './contexts/data-context/data-context.jsx';
import { AppNavModalProvider} from './contexts/nav-modal-context/nav-modal-context.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppScreenWidthProvider>
      <AppNavModalProvider>
        <AppDataProvider>
          <App />
        </AppDataProvider>
      </AppNavModalProvider>
    </AppScreenWidthProvider>
  </React.StrictMode>
)
