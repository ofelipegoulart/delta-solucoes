type FotoPendenteProps = {
  label: string;
  height: string;
  tone?: "morno" | "branco";
};

export default function FotoPendente({
  label,
  height,
  tone = "morno",
}: FotoPendenteProps) {
  return (
    <div
      className={`flex items-center justify-center text-center border border-dashed border-borda-morna ${
        tone === "branco" ? "bg-branco" : "bg-off-white-morno"
      }`}
      style={{ height }}
    >
      <span
        className="font-semibold uppercase text-laranja-profundo"
        style={{ fontSize: 11, letterSpacing: "0.08em", padding: "0 16px" }}
      >
        {label}
      </span>
    </div>
  );
}
