"use client";

import { useEffect, useRef } from "react";

const LOGOS = [1, 2, 3, 4, 5, 6];

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
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-9">
          <p className="text-[11px] font-medium tracking-[0.16em] uppercase opacity-65 max-w-[170px] shrink-0 text-tinta">
            Empresas que confiam na Delta
          </p>

          <div
            ref={viewportRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onPointerLeave={endDrag}
            className="md:hidden flex-1 overflow-hidden touch-pan-y select-none cursor-grab active:cursor-grabbing"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 24px, black calc(100% - 24px), transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 24px, black calc(100% - 24px), transparent)",
            }}
          >
            <div ref={trackRef} className="flex w-max will-change-transform">
              {[...LOGOS, ...LOGOS].map((n, i) => (
                <div
                  key={i}
                  className="h-[46px] w-[140px] mr-9 rounded flex items-center justify-center text-[9px] text-grafite/70 bg-cinza-claro/40 border border-dashed border-borda shrink-0"
                >
                  logo {n}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:grid grid-cols-4 gap-9 items-center flex-1">
            {LOGOS.slice(0, 4).map((n) => (
              <div
                key={n}
                className="h-[46px] rounded flex items-center justify-center text-[9px] text-grafite/70 bg-cinza-claro/40 border border-dashed border-borda"
              >
                logo {n}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
