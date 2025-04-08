import Head from 'next/head';
import Card from '../components/Card';
import cards from '../data/cards.json';

interface CardData {
  title: string;
  description: string;
  // Add other card properties here
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <PageHead />
      <h1 className="text-3xl font-bold text-center mb-6">📌 부산 부동산 경매 분석 카드 리스트</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cards.length > 0 ? (
          cards.map((card: CardData, index: number) => (
            <Card key={index} data={card} />
          ))
        ) : (
          <p className="text-center col-span-full">데이터를 불러오는 중 문제가 발생했습니다.</p>
        )}
      </div>
    </div>
  );
}

const PageHead = () => (
  <Head>
    <title>경매터 - GPT 부동산 경매 분석</title>
    <meta name="description" content="부산 부동산 경매 분석 카드 리스트" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
);
