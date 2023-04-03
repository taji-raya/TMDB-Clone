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
    <BrowserRouter>
      <GlobalProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </GlobalProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
