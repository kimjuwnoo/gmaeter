// /pages/list.tsx
import { useEffect, useState } from "react";
import AuctionCard from "../components/AuctionCard";
import auctionsData from "../data/sample-auctions.json";

export default function ListPage() {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    setAuctions(auctionsData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">경매 사건 리스트</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {auctions.map((auction) => (
          <AuctionCard key={auction.id} auction={auction} />
        ))}
      </div>
    </div>
  );
}
