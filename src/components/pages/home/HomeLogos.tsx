"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const LOGOS = [
  {
    src: "/images/logos/clientes/moderna.webp",
    alt: "Moderna",
    width: 1280,
    height: 295,
  },
  {
    src: "/images/logos/clientes/azulla.png",
    alt: "Azulla",
    width: 400,
    height: 180,
  },
  {
    src: "/images/logos/clientes/citadel.png",
    alt: "Citadel",
    width: 480,
    height: 126,
  },
  {
    src: "/images/logos/clientes/mrveggy.webp",
    alt: "Mr. Veggy",
    width: 1168,
    height: 380,
  },
  {
    src: "/images/logos/clientes/terumo.png",
    alt: "Terumo",
    width: 800,
    height: 450,
  },
  {
    src: "/images/logos/clientes/genebra-chocolates.png",
    alt: "Genebra Chocolates",
    width: 400,
    height: 175,
  },
];

export default function HomeLogos() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const isDragging = useRef(false);
  const isPaused = useRef(false);
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.4;
    let frame: number;

    const applyOffset = () => {
      const half = track.scrollWidth / 2;
      if (half === 0) return;
      let offset = offsetRef.current % half;
      if (offset > 0) offset -= half;
      track.style.transform = `translateX(${offset}px)`;
    };

    const step = () => {
      if (!isPaused.current && !isDragging.current) {
        offsetRef.current -= speed;
        applyOffset();
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frame);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    isPaused.current = true;
    dragStartX.current = e.clientX;
    dragStartOffset.current = offsetRef.current;
    viewportRef.current?.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    const delta = e.clientX - dragStartX.current;
    offsetRef.current = dragStartOffset.current + delta;

    const track = trackRef.current;
    const half = track.scrollWidth / 2;
    if (half > 0) {
      let offset = offsetRef.current % half;
      if (offset > 0) offset -= half;
      track.style.transform = `translateX(${offset}px)`;
    }
  };

  const endDrag = () => {
    isDragging.current = false;
    setTimeout(() => {
      isPaused.current = false;
    }, 1200);
  };

  return (
    <section className="w-full bg-off-white border-b border-borda">
      <div className="max-w-310 mx-auto px-6 md:px-12 py-6 md:py-7">
        <div className="flex flex-col items-center md:flex-row md:items-center gap-4 md:gap-9">
          <p className="text-sm md:text-base font-semibold tracking-[0.08em] uppercase shrink-0 text-marinho text-center md:text-left whitespace-nowrap">
            Empresas que confiam na Delta
          </p>

          <div
            ref={viewportRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onPointerLeave={endDrag}
            className="md:hidden w-full flex-1 overflow-hidden touch-pan-y select-none cursor-grab active:cursor-grabbing"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 24px, black calc(100% - 24px), transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 24px, black calc(100% - 24px), transparent)",
            }}
          >
            <div ref={trackRef} className="flex w-max will-change-transform">
              {[...LOGOS, ...LOGOS].map((logo, i) => (
                <div
                  key={i}
                  className="h-[46px] w-[140px] mr-9 flex items-center justify-center shrink-0"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="max-h-11.5 max-w-35 w-auto h-auto object-contain grayscale opacity-80"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:grid grid-cols-6 gap-9 items-center flex-1">
            {LOGOS.map((logo) => (
              <div
                key={logo.src}
                className="h-[46px] flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="max-h-11.5 max-w-full w-auto h-auto object-contain grayscale opacity-80 transition hover:grayscale-0 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
