import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

const Auction = () => {
  const [auctionItems, setAuctionItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [totalBids, setTotalBids] = useState(0);

  useEffect(() => {
    fetch("auction_items.json")
      .then((res) => res.json())
      .then((data) => setAuctionItems(data));
  }, []);

  const toggleFavorite = (item) => {
    setFavorites((prev) => {
      const isFavorite = prev.find((f) => f.id === item.id);
      let updatedFavorites;

      if (isFavorite) {
        updatedFavorites = prev.filter((f) => f.id !== item.id);
        setTotalBids((prevTotal) => prevTotal - parseFloat(item.bid));
      } else {
        updatedFavorites = [...prev, item];
        setTotalBids((prevTotal) => prevTotal + parseFloat(item.bid));
      }

      return updatedFavorites;
    });
  };

  return (
    <section id="auction">
      <div className="bg-base-200 min-h-screen p-6">
        <div className="p-6 text-center">
          <h2 className="text-2xl font-bold mb-1">Active Auctions</h2>
          <p className="text-sm text-gray-500 mb-4">
            Discover and bid on extraordinary items
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Auction Table */}
          <div className="lg:col-span-2">
            <div className="card bg-base-100 shadow">
              <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Items</th>
                      <th>Current Bid</th>
                      <th>Time Left</th>
                      <th>Bid Now</th>
                    </tr>
                  </thead>
                  <tbody>
                    {auctionItems.map((item) => (
                      <tr key={item.id} className="hover">
                        <td className="flex items-center gap-3">
                          <img
                            className="auction_itemsImg w-12 h-12 rounded"
                            src={item.image}
                            alt={item.title}
                          />
                          <span className="font-medium">{item.title}</span>
                        </td>
                        <td className="font-semibold">${item.bid}</td>
                        <td className="text-primary">{item.time}</td>
                        <td>
                          <button
                            onClick={() => toggleFavorite(item)}
                            className="btn btn-ghost btn-sm"
                          >
                            <Heart
                              className={`w-5 h-5 ${
                                favorites.find((f) => f.id === item.id)
                                  ? "fill-red-500 text-red-500"
                                  : "text-gray-500"
                              }`}
                            />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Favorites Sidebar */}
          <div className="card bg-base-100 shadow h-fit">
            <div className="card-body">
              <h3 className="card-title flex items-center gap-2">
                ❤️ Favorite Items
              </h3>

              {favorites.length === 0 ? (
                <div className="text-center text-gray-500 mt-6">
                  <p className="font-medium">No favorites yet</p>
                  <p className="text-sm mt-1">
                    Click the heart icon on any item to add it to your favorites
                  </p>
                </div>
              ) : (
                <ul className="space-y-4 mt-4">
                  {favorites.map((fav) => (
                    <li
                      key={fav.id}
                      className="flex items-center gap-3 text-sm font-medium"
                    >
                      <img
                        src={fav.image}
                        alt={fav.title}
                        className="auction_itemsImg rounded"
                      />
                      <div className="flex flex-col">
                        <span>{fav.title}</span>
                        <span className="text-gray-500 text-sm">
                          Bid: ${fav.bid}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              <div className="divider"></div>

              <div className="flex justify-between font-semibold">
                <span>Total bids Amount</span>
                <span>${totalBids.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auction;
