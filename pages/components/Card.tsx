interface CardProps {
  data: {
    사건번호: string;
    물건종류: string;
    감정가: string;
    최저입찰가: string;
    매각기일: string;
    요약분석: string;
  };
}

export default function Card({ data }: CardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h2 className="text-lg font-bold mb-2">{data.사건번호} - {data.물건종류}</h2>
      <p>감정가: {data.감정가}</p>
      <p>최저입찰가: {data.최저입찰가}</p>
      <p>매각기일: {data.매각기일}</p>
      <div className="mt-2 text-sm text-gray-600 whitespace-pre-line">{data.요약분석}</div>
    </div>
  );
}