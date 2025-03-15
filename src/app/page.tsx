import Image from "next/image";
import ImageLink from "@/components/ImageLink";
import { CodePdfList, getFileInfo } from "@/components/CodePdfUtil";

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
          {CodePdfList.map((item) => {
            const { url, top, height } = getFileInfo(item.order);
            return (
              <ImageLink
                key={item.order}
                href={url}
                top={top}
                right={20}
                width={325}
                height={height}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
