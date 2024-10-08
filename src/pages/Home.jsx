  import React, { useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { PublicKey, Connection } from '@solana/web3.js';
import './JupiterUI.css';

const Home = () => {
  const { publicKey } = useWallet();  // Get the public key from the user's connected wallet
  const [balance, setBalance] = useState(null);  // State to store wallet balance

  // Function to fetch the user's SOL balance
  const fetchBalance = async () => {
    if (publicKey) {
      const connection = new Connection('https://api.mainnet-beta.solana.com');  // Mainnet connection
      const lamports = await connection.getBalance(new PublicKey(publicKey));
      setBalance(lamports / 1e9);  // Convert lamports to SOL
    }
  };

  // Fetch the balance whenever the wallet is connected
  useEffect(() => {
    if (publicKey) {
      fetchBalance();
    }
  }, [publicKey]);

  return (
    <div className="container mx-auto text-center">
      <h1 className="text-3xl font-bold mt-8">Welcome to ACT - Marketplace</h1>
      <p className="mt-4 text-gray-600">
        Discover and trade real-world assets on the Solana blockchain.
      </p>

        {/* Links to List or Buy RWA pages */}
      <div className="mt-8 space-x-4">
        <a
          href="/list"
          className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded inline-block"
        >
          List RWA
        </a>
        <a
          href="/buy"
          className="bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded inline-block"
        >
          Buy RWA
        </a>
      </div>
      
      {/* Display wallet information if connected */}
      {publicKey ? (
        <div className="mt-6">
            <div className="jupiter-ui">
      <header className="jupiter-header">
        <h1>Jupiter Aggregator</h1>
        <nav>
          <a href="#swap">Swap</a>
          <a href="#charts">Charts</a>
          <a href="#portfolio">Portfolio</a>
        </nav>
      </header>
      <main className="jupiter-main">
        <section id="swap" className="swap-section">
          <h2>Swap</h2>
          <div className="swap-container">
            <div className="token-input">
              <label>From:</label>
              <input type="text" placeholder="Select token" />
            </div>
            <div className="token-input">
              <label>To:</label>
              <input type="text" placeholder="Select token" />
            </div>
            <button className="swap-button">Swap</button>
          </div>
        </section>
        <section id="charts" className="charts-section">
          <h2>Charts</h2>
          {/* Placeholder for charts */}
          <div className="chart-placeholder">Charts will be displayed here</div>
        </section>
        <section id="portfolio" className="portfolio-section">
          <h2>Portfolio</h2>
          {/* Placeholder for portfolio */}
          <div className="portfolio-placeholder">Portfolio details will be displayed here</div>
        </section>
      </main>
      <footer className="jupiter-footer">
        <p>&copy; 2024 Jupiter Aggregator. All rights reserved.</p>
      </footer>
    </div>
          {/*<h2 className="text-xl text-green-600">Wallet Connected</h2>
          <p className="text-gray-700 mt-2">Public Key: {publicKey.toBase58()}</p>
          <p className="text-gray-700 mt-2">SOL Balance: {balance !== null ? `${balance} SOL` : 'Loading...'}</p>
        */}</div>
      ) : (
        <div className="mt-6">
          <p className="text-red-600">Please connect your Solana wallet to get started.</p>
        </div>
      )}

      
    </div>
  );
};

export default Home;
