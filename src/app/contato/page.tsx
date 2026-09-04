import ContatoPage from "@/components/pages/contato/ContatoPage";

type Props = {
  searchParams: Promise<{ modo?: string }>;
};

export default async function Page({ searchParams }: Props) {
  const { modo } = await searchParams;
  return <ContatoPage initialModo={modo} />;
}
