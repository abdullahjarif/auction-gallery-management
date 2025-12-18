import React from "react";

const Banner = () => {
  return (
    <section id="banner" className="banner">
     
      <div className="overlay"></div>

      
      <div className="content">
        <h1 className="title">
          Bid on Unique Items from <br /> Around the World
        </h1>

        <p className="subtitle">
          Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
        </p>

        <button
          className="
                px_toggle px-6 py-3
                rounded-full
                bg-white text-black font-semibold
                cursor-pointer
                transition-all duration-300 ease-out
                hover:bg-red-600 hover:text-white
                hover:scale-105
                hover:shadow-lg hover:shadow-red-500/40
                active:scale-95
                focus:outline-none 
            "
        >
          Explore Auctions
        </button>
      </div>
    </section>
  );
};

export default Banner;
