export default function ClientesLogos() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-10 md:pb-14">
      <div className="wf-box rounded-lg p-4 sm:p-6">
        <span className="inline-block text-[10px] sm:text-xs bg-neutral-800 text-white px-2 py-1 rounded mb-4">
          04 · LOGOS DE CLIENTES (faixa discreta)
        </span>
        <div className="flex items-center gap-6 overflow-x-auto md:overflow-visible md:justify-between pb-1 md:pb-0">
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className="wf-img rounded shrink-0 w-20 h-9 flex items-center justify-center text-[9px] text-neutral-500 opacity-70"
            >
              logo {n}
            </div>
          ))}
        </div>
        <p className="text-[10px] text-neutral-400 mt-3">
          ↳ reforço visual, não protagonista — mesmos logos já usados na Home
        </p>
      </div>
    </section>
  );
}
