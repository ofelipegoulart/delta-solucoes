"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ZoomImageProps = {
  src: string;
  alt: string;
  sizes?: string;
  cover?: boolean;
};

export default function ZoomImage({ src, alt, sizes, cover }: ZoomImageProps) {
  const [origin, setOrigin] = useState("50% 50%");
  const [zoomed, setZoomed] = useState(false);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isDesktop = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(min-width: 768px) and (hover: hover) and (pointer: fine)").matches;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop() || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setOrigin(`${x}% ${y}%`);
  };

  const handleMouseEnter = () => {
    if (isDesktop()) setZoomed(true);
  };

  const handleMouseLeave = () => {
    setZoomed(false);
    setOrigin("50% 50%");
  };

  return (
    <>
      <div
        ref={containerRef}
        role="button"
        tabIndex={0}
        aria-label={`Ampliar imagem: ${alt}`}
        className="relative h-full w-full overflow-hidden cursor-pointer md:cursor-crosshair"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => setOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={`${
            cover ? "object-cover" : "object-contain p-2"
          } transition-transform duration-700 ease-out`}
          style={{
            transformOrigin: origin,
            transform: zoomed ? "scale(2)" : "scale(1)",
          }}
          sizes={sizes}
        />
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-600/60 p-6"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative bg-white rounded-lg shadow-xl p-6 max-h-[85vh] max-w-[85vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar"
              className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-800 text-xl leading-none hover:bg-neutral-200"
            >
              ×
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className="max-h-[75vh] max-w-[75vw] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
