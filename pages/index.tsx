import Head from 'next/head';
import Card from '@/components/Card'; // 경로 주의!
import cards from '@/data/cards.json'; // 경로 주의!

// ✅ 정확한 타입 정의
type AuctionCard = {
  사건번호: string;
  물건종류: string;
  감정가: string;
  최저입찰가: string;
  매각기일: string;
  요약분석: string;
};

export default function Home() {
  return (
    <>
      <Head>
        <title>경매터 - Gmaeter</title>
      </Head>
      <main className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-6">부동산 경매 매물 분석</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cards.map((card: AuctionCard, index: number) => (
            <Card key={index} data={card} />
          ))}
        </div>
      </main>
    </>
  );
}
