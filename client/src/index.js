import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import { AuthContextProvider } from './Context/AuthContext';
import { GlobalProvider } from './Context/WatchlistContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <GlobalProvider>
          <App />
        </GlobalProvider>
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);

reportWebVitals();
