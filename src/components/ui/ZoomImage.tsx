"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ZoomImageProps = {
  src: string;
  alt: string;
  sizes?: string;
  cover?: boolean;
  objectPosition?: string;
  hoverZoomToggle?: boolean;
};

function CursorIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 3l14 6.5-6 1.7-1.7 6L5 3z"
        fill="currentColor"
      />
    </svg>
  );
}

function MagnifierIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="2" />
      <line x1="15.3" y1="15.3" x2="21" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function ZoomImage({
  src,
  alt,
  sizes,
  cover,
  objectPosition,
  hoverZoomToggle,
}: ZoomImageProps) {
  const [open, setOpen] = useState(false);
  const [hoverZoomEnabled, setHoverZoomEnabled] = useState(false);
  const [origin, setOrigin] = useState("50% 50%");
  const [zoomed, setZoomed] = useState(false);
  const imageWrapRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!open) {
      setHoverZoomEnabled(false);
      setZoomed(false);
    }
  }, [open]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hoverZoomEnabled || !imageWrapRef.current) return;
    const rect = imageWrapRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setOrigin(`${x}% ${y}%`);
  };

  const handleMouseEnter = () => {
    if (hoverZoomEnabled) setZoomed(true);
  };

  const handleMouseLeave = () => {
    setZoomed(false);
    setOrigin("50% 50%");
  };

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        aria-label={`Ampliar imagem: ${alt}`}
        className="relative h-full w-full overflow-hidden cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={cover ? "object-cover" : "object-contain p-2"}
          style={{ objectPosition }}
          sizes={sizes}
        />
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-600/60 p-6"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative bg-white rounded-lg shadow-xl p-6 w-[min(90vw,900px)] h-[min(85vh,800px)]"
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

            {hoverZoomToggle && (
              <div className="hidden md:flex absolute top-12 right-2 flex-col gap-1.5">
                <button
                  type="button"
                  onClick={() => setHoverZoomEnabled(false)}
                  aria-label="Cursor normal"
                  aria-pressed={!hoverZoomEnabled}
                  className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                    !hoverZoomEnabled
                      ? "bg-laranja-profundo text-white"
                      : "bg-neutral-100 text-neutral-800 hover:bg-neutral-200"
                  }`}
                >
                  <CursorIcon />
                </button>
                <button
                  type="button"
                  onClick={() => setHoverZoomEnabled(true)}
                  aria-label="Ativar zoom ao passar o mouse"
                  aria-pressed={hoverZoomEnabled}
                  className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                    hoverZoomEnabled
                      ? "bg-laranja-profundo text-white"
                      : "bg-neutral-100 text-neutral-800 hover:bg-neutral-200"
                  }`}
                >
                  <MagnifierIcon />
                </button>
              </div>
            )}

            <div
              ref={imageWrapRef}
              className={`h-full w-full overflow-hidden ${
                hoverZoomEnabled ? "cursor-zoom-in" : ""
              }`}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={alt}
                className="h-full w-full object-contain transition-transform duration-300 ease-out"
                style={{
                  transformOrigin: origin,
                  transform: zoomed ? "scale(2)" : "scale(1)",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
