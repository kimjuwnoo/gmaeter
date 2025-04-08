// components/Card.tsx

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

const Card = ({ data }: CardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-900">사건번호: {data.사건번호}</h2>
        <p className="text-sm text-gray-500">물건종류: {data.물건종류}</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <span className="text-gray-700 font-semibold">감정가</span>
          <p className="text-gray-900 font-medium">{data.감정가}</p>
        </div>
        <div>
          <span className="text-gray-700 font-semibold">최저입찰가</span>
          <p className="text-gray-900 font-medium">{data.최저입찰가}</p>
        </div>
        <div className="col-span-2">
          <span className="text-gray-700 font-semibold">매각기일</span>
          <p className="text-gray-900 font-medium">{data.매각기일}</p>
        </div>
        <div className="col-span-2">
          <span className="text-gray-700 font-semibold">요약분석</span>
          <p className="text-gray-600">{data.요약분석}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
