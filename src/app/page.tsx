import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center">
        <Image
          src="/framework.png"
          alt="감리점검 프레임워크"
          width={800}
          height={600}
          priority
        />
        <Image src="/codes.png" alt="감리점검 코드" width={800} height={600} />
      </main>
    </div>
  );
}
