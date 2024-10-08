import React, { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, Transaction } from '@solana/web3.js';

const ListRWA = () => {
  const { publicKey, signTransaction } = useWallet();  // Access wallet
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
  });

  // Solana connection (Mainnet)
  const connection = new Connection('https://api.mainnet-beta.solana.com');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission to list an RWA
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!publicKey) {
      alert('Please connect your wallet to list an RWA.');
      return;
    }

    try {
      const { name, description, price } = formData;

      // Example logic for submitting an RWA listing on the Solana blockchain
      const transaction = new Transaction().add(
        // Add custom program logic here (e.g., calling a smart contract or API)
        // Placeholder logic for transaction (replace with your real Solana program)
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: new PublicKey('Your_Solana_Wallet_Address'),
          lamports: price * 1e9,  // Price in lamports (1 SOL = 1e9 lamports)
        })
      );

      const signedTransaction = await signTransaction(transaction);
      const signature = await connection.sendRawTransaction(signedTransaction.serialize());
      await connection.confirmTransaction(signature, 'processed');

      alert('RWA listed successfully!');
    } catch (error) {
      console.error('Error listing RWA:', error);
      alert('Failed to list RWA.');
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-4">List an RWA</h2>

      <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Price (in SOL):</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500"
        >
          List RWA
        </button>
      </form>
    </div>
  );
};

export default ListRWA;
