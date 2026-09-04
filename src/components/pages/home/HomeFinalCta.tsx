import Button from "@/components/ui/Button";

export default function HomeFinalCta() {
  return (
    <section
      className="w-full bg-laranja"
      style={{
        clipPath: "polygon(0 0, 100% 96px, 100% 100%, 0 100%)",
        marginTop: -96,
        marginBottom: -2,
      }}
    >
      <div
        className="bg-marinho-sombra text-off-white"
        style={{
          clipPath: "polygon(0 5px, 100% calc(96px + 5px), 100% 100%, 0 100%)",
          backgroundImage:
            "linear-gradient(to bottom, var(--color-marinho-sombra) 0%, var(--color-marinho-sombra) 55%, var(--color-marinho) 100%)",
        }}
      >
        <div
          className="max-w-310 mx-auto text-center"
          style={{ padding: "172px 48px 80px" }}
        >
          <p className="text-lg sm:text-xl font-semibold text-white mb-6">
            Vamos construir sua solução juntos?
          </p>
          <Button
            label="Solicitar Orçamento"
            href="/contato?modo=orcamento"
            variant="primary"
            className="inline-flex flex-none px-6"
          />
        </div>
      </div>
    </section>
  );
}
