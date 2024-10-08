import React, { createContext, useContext, useMemo } from 'react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles for wallet adapter modal
import '@solana/wallet-adapter-react-ui/styles.css';

// Create a context to manage the wallet connection
const WalletContext = createContext();

export const WalletContextProvider = ({ children }) => {
  // Define the Solana network (use 'mainnet-beta' or 'devnet' as needed)
  const network = WalletAdapterNetwork.Mainnet;

  // Set the RPC endpoint (this connects to the Solana blockchain)
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // Configure wallet adapters (Phantom, Solflare, etc.)
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
    ],
    [network]
  );

  return (
    <WalletContext.Provider value={{}}>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>{children}</WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </WalletContext.Provider>
  );
};

// Custom hook to use WalletContext (optional, if needed)
export const useWalletContext = () => {
  return useContext(WalletContext);
};
