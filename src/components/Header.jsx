import React, { useRef } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { motion } from 'framer-motion';
import logo from '../components/logo.svg'; // Assuming you have this logo
import heroLogo from '../components/logo.png'; // Assuming you have this logo
import { WalletModalButton } from '@solana/wallet-adapter-react-ui';

function Header() {
  const walletModalButtonRef = useRef(null); // Create a ref for the WalletModalButton
  const { connected } = useWallet(); // Get connection status

  const handleLaunchAppClick = () => {
    // Trigger the WalletModalButton click event
    if (walletModalButtonRef.current) {
      walletModalButtonRef.current.click();
    }
  };

  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white flex flex-col">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo.svg for the header */}
          <img src={logo} alt="Stakk Finance Logo" width={40} height={40} />
          <span className="text-xl font-semibold">Stakk Finance</span>
        </motion.div>

        {/* Launch App Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
           <button
            className="bg-gradient-to-r from-[#40E0D0] to-[#4169E1] text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity"
            
          >
            <WalletModalButton ref={walletModalButtonRef} style={{ display: 'none' }} />
            Launch App
          </button>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          {/* Hero Image */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Use logo.png for the larger hero logo */}
            <img src={heroLogo} alt="Stakk Finance Hero Logo" width={300} height={300} className="mx-auto" />
          </motion.div>

          {/* Hero Text */}
          <motion.h1
            className="text-5xl font-bold mb-4 text-[#38b6ff]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Stakk Finance
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Maximize yields, participate in DAOs, farm airdrops - all by just staking one asset.
          </motion.p>
        </div>
      </main>
       {/* Hidden Wallet Modal Button */}
       <WalletModalButton ref={walletModalButtonRef} style={{ display: 'none' }} />
    </div>
  );
}

export default Header;
