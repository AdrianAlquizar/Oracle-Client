const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const walletFilePath = 'wallets.json';

// Load existing wallets
const loadWallets = () => {
  try {
    const data = fs.readFileSync(walletFilePath);
    return JSON.parse(data);
  } catch (error) {
    return []; // Return empty array if file not found or error
  }
};

// Save wallet
app.post('/api/wallet', (req, res) => {
  const { walletAddress } = req.body;
  const wallets = loadWallets();

  // Check if wallet already exists
  if (wallets.includes(walletAddress)) {
    return res.status(400).json({ message: 'Wallet address already exists.' });
  }

  // Add wallet to the list
  wallets.push(walletAddress);
  fs.writeFileSync(walletFilePath, JSON.stringify(wallets));
  res.status(200).json({ message: 'Wallet address saved successfully.' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
