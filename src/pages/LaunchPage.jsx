import React from 'react';
import { motion } from 'framer-motion';
import logo from '../components/logo.svg';
import { useWallet } from '@solana/wallet-adapter-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LaunchPage = () => {
  const { publicKey } = useWallet();
  const [walletAddress, setWalletAddress] = React.useState(publicKey ? publicKey.toString() : '');
  const [successMessage, setSuccessMessage] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleChange = (event) => {
    setWalletAddress(event.target.value);
  };

  const isValidWalletAddress = (address) => {
    // Check if the address is 44 characters long and contains only valid base58 characters
    const base58Regex = /^[A-HJ-NP-Za-km-z1-9]{44}$/;
    return address.length === 44 && base58Regex.test(address);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission
    setSuccessMessage(''); // Reset success message
    setErrorMessage(''); // Reset error message

    // Validate wallet address
    if (!isValidWalletAddress(walletAddress)) {
      setErrorMessage('Invalid wallet address. Please enter a valid Solana wallet address.'); // Show error message
      return; // Stop execution if invalid
    }

    try {
      const response = await axios.post('http://localhost:5000/api/wallet', {
        walletAddress,
      });
      setSuccessMessage(response.data.message); // Show success message
      setWalletAddress(''); // Clear the input field after success
    } catch (error) {
      // Check for error response from the server
      if (error.response && error.response.status === 400) {
        setErrorMessage(error.response.data.message); // Show error message for duplicate
      } else {
        setErrorMessage('Error saving wallet address. Please try again.'); // Show general error message
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white flex flex-col">
      <Link to="/">
        {/* Header */}
        <header className="container mx-auto px-4 py-6 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={logo} alt="Stakk Finance Logo" width={40} height={40} />
            <span className="text-xl font-semibold">Stakk Finance</span>
          </motion.div>
        </header>
      </Link>
      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          {/* Get Waitlisted Title */}
          <motion.h1
            className="text-5xl font-bold mb-6 text-[#38b6ff]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get Waitlisted
          </motion.h1>

          {/* Wallet Address Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-md mx-auto"
          >
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={walletAddress}
                onChange={handleChange}
                placeholder="Enter your wallet address"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#38b6ff]"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#40E0D0] to-[#4169E1] text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity mt-4"
              >
                Submit
              </button>
            </form>
          </motion.div>

          {/* Success and Error Messages */}
          {successMessage && (
            <motion.div
              className="mt-4 text-green-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {successMessage}
            </motion.div>
          )}
          {errorMessage && (
            <motion.div
              className="mt-4 text-red-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {errorMessage}
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
};

export default LaunchPage;
