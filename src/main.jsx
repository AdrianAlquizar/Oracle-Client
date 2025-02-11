import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WalletContextProvider } from './context/WalletContext';
import '@solana/wallet-adapter-react-ui/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WalletContextProvider>
      <App/>
    </WalletContextProvider>
  </React.StrictMode>
);
