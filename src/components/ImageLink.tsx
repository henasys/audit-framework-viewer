import Link from "next/link";

interface ImageLinkProps {
  href: string;
  top: number;
  right: number;
  width: number;
  height: number;
}

export default function ImageLink({
  href,
  top,
  right,
  width,
  height,
}: ImageLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute cursor-pointer bg-blue-500/20 hover:bg-blue-500/40 border-2 border-blue-500 rounded-sm transition-all"
      style={{
        top: `${top}px`,
        right: `${right}px`,
        width: `${width}px`,
        height: `${height}px`,
      }}
    />
  );
}
