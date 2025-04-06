import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './App.css';
import DiscountProvider from './context/DiscountProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DiscountProvider>
      <App />
    </DiscountProvider>
  </StrictMode>,
)
