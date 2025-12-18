import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="footer footer-center bg-base-100 text-base-content py-10">
      
      {/* Logo & Tagline */}
      <div>
        <h2 className="text-2xl font-bold">
          <span className="text-primary">Auction</span>
          <span className="text-warning">Gallery</span>
        </h2>
        <p className="mt-1 text-sm tracking-wide">
          Bid. <span className="mx-1">Win.</span> Own.
        </p>
      </div>

      {/* Navigation Links */}
      <nav className="flex gap-6 text-sm">
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Auctions</a>
        <a className="link link-hover">Categories</a>
        <a className="link link-hover">How it works</a>
      </nav>

      {/* Copyright */}
      <div>
        <p className="text-xs opacity-70">
          © 2025 AuctionHub. All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
