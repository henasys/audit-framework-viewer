import { notFound } from "next/navigation";

interface PageProps {
  params: {
    code: string;
  };
}

export default function CodePage({ params }: PageProps) {
  const { code } = params;

  // Here you can add logic to validate the code and fetch the corresponding PDF
  // For now, we'll just display the code parameter
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">코드: {code}</h1>
      {/* Add your PDF viewer component here */}
      <div className="bg-gray-100 p-4 rounded">
        <p>PDF 파일을 표시할 영역입니다.</p>
      </div>
    </div>
  );
}
