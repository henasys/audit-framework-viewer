"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

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
  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(href);
      if (response.ok) {
        window.open(href, "_blank");
      } else {
        alert("PDF 파일이 존재하지 않습니다.");
      }
    } catch (error) {
      alert("PDF 파일을 확인하는 중 오류가 발생했습니다.");
    }
  };

  return (
    <>
      <Link
        href={href}
        onClick={handleClick}
        className="absolute cursor-pointer bg-blue-500/20 hover:bg-blue-500/40 border-2 border-blue-500 rounded-sm transition-all"
        style={{
          top: `${top}px`,
          right: `${right}px`,
          width: `${width}px`,
          height: `${height}px`,
        }}
      />
    </>
  );
}
