import Head from 'next/head';
import Card from '../components/Card';
import cards from '../data/cards.json';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <Head>
        <title>경매터 - GPT 부동산 경매 분석</title>
      </Head>

      <h1 className="text-3xl font-bold text-center mb-6">부산 부동산 경매 분석 카드 리스트</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <Card key={index} data={card} />
        ))}
      </div>
    </div>
  );
}