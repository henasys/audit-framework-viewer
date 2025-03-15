import Image from "next/image";
import ImageLink from "@/components/ImageLink";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center">
        <Image
          src="/framework.png"
          alt="감리점검 프레임워크"
          width={800}
          height={600}
          priority
        />
        <div className="relative">
          <Image
            src="/codes.png"
            alt="감리점검 코드"
            width={800}
            height={600}
          />
          <ImageLink
            href="/data/EA01-1.pdf"
            top={44}
            right={20}
            width={325}
            height={26}
          />
        </div>
      </main>
    </>
  );
}
