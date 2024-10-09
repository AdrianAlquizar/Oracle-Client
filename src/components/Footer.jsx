import React from 'react';
import { Link } from 'react-router-dom'; // Use react-router-dom for routing
import Logo from '../components/logo.png'

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white border-t">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2">
            <img src={Logo} alt="Stakk Finance Logo" width={40} height={40} />
              <span className="font-bold text-xl">Stakk Finance</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Empowering DeFi through innovative staking solutions.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm hover:underline">
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/docs" className="text-sm hover:underline">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/stakkfinance"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://twitter.com/stakkfinance"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://discord.gg/stakkfinance"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                
                <span className="sr-only">Discord</span>
              </a>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2">Subscribe to our newsletter</h4>
              <form className="flex space-x-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border rounded px-3 py-2 max-w-[200px] text-sm"
                  required
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded text-sm hover:bg-blue-600 transition">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Stakk Finance. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
