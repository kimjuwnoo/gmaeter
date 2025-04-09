import Link from "next/link";

export default function AuctionCard({ auction }) {
  return (
    <Link href={`/detail/${auction.id}`}>
      <div className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
        <h2 className="text-xl font-semibold mb-2">{auction.caseNumber}</h2>
        <p className="text-gray-700">📅 매각기일: {auction.saleDate}</p>
        <p className="text-gray-700">📍 소재지: {auction.address}</p>
        <p className="text-gray-700">💰 감정가: {auction.appraisalPrice.toLocaleString()}원</p>
      </div>
    </Link>
  );
}
