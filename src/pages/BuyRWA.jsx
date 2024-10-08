import React, { useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, Transaction, SystemProgram } from '@solana/web3.js';

const BuyRWA = () => {
  const { publicKey, signTransaction } = useWallet();  // Access wallet
  const [rwas, setRWAs] = useState([]);  // List of RWAs fetched from backend (or Solana program)

  // Solana connection (Mainnet)
  const connection = new Connection('https://api.mainnet-beta.solana.com');

  // Fetch the list of available RWAs (e.g., from backend or on-chain program)
  useEffect(() => {
    // Fetch RWA listings (replace this with your backend API or Solana program)
    setRWAs([
      { id: 1, name: 'Real Estate 1', description: 'Property in NY', price: 2 },
      { id: 2, name: 'Art Piece', description: 'Famous Painting', price: 1.5 },
    ]);
  }, []);

  // Function to handle buying an RWA
  const handleBuy = async (rwa) => {
    if (!publicKey) {
      alert('Please connect your wallet to buy an RWA.');
      return;
    }

    try {
      // Create transaction to buy the RWA
      const transaction = new Transaction().add(
        // Placeholder transaction logic (replace with your actual Solana smart contract logic)
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: new PublicKey('Your_Solana_Wallet_Address'),  // RWA seller's wallet
          lamports: rwa.price * 1e9,  // Convert SOL to lamports
        })
      );

      const signedTransaction = await signTransaction(transaction);
      const signature = await connection.sendRawTransaction(signedTransaction.serialize());
      await connection.confirmTransaction(signature, 'processed');

      alert(`Successfully bought ${rwa.name} for ${rwa.price} SOL!`);
    } catch (error) {
      console.error('Error buying RWA:', error);
      alert('Failed to complete purchase.');
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-4">Available RWAs</h2>

      {rwas.length === 0 ? (
        <p>No RWAs available for purchase.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rwas.map((rwa) => (
            <div key={rwa.id} className="bg-white p-4 rounded shadow-md">
              <h3 className="text-xl font-bold">{rwa.name}</h3>
              <p className="text-gray-600">{rwa.description}</p>
              <p className="text-gray-800 mt-2">Price: {rwa.price} SOL</p>
              <button
                onClick={() => handleBuy(rwa)}
                className="bg-green-600 text-white py-2 px-4 rounded mt-4 hover:bg-green-500"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BuyRWA;
