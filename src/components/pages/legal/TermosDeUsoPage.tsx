import Link from "next/link";
import LegalLayout from "./LegalLayout";

export default function TermosDeUsoPage() {
  return (
    <LegalLayout
      title="Termos de Uso"
      updatedAt="4 de setembro de 2026"
      intro="Estes Termos de Uso regulam o acesso e a utilização do site da Delta Soluções em Impressão Ltda ('Delta Soluções', 'nós'). Ao navegar neste site ou enviar um formulário de contato, você concorda com as condições abaixo."
      sections={[
        {
          id: "quem-somos",
          title: "Quem somos",
          body: (
            <p>
              A Delta Soluções em Impressão Ltda é uma gráfica sediada em São Paulo - SP,
              que atua com embalagens, materiais promocionais, rótulos e etiquetas.
              O contato oficial está disponível na página{" "}
              <Link href="/contato" className="text-laranja-profundo underline">
                Contato
              </Link>
              .
            </p>
          ),
        },
        {
          id: "uso-do-site",
          title: "Uso do site",
          body: (
            <>
              <p>
                O site tem caráter institucional e comercial: apresentar nossos produtos e
                serviços, e permitir que visitantes solicitem orçamentos, entrem em contato
                ou pediam para se tornar revendedores.
              </p>
              <p>
                Ao usar o site, você concorda em não: (i) fornecer informações falsas nos
                formulários; (ii) tentar acessar áreas restritas ou comprometer a segurança
                do site; (iii) usar o site para enviar spam, vírus ou qualquer conteúdo
                ilícito; (iv) copiar, reproduzir ou redistribuir o conteúdo do site sem
                autorização prévia.
              </p>
            </>
          ),
        },
        {
          id: "formularios",
          title: "Formulários de contato e orçamento",
          body: (
            <>
              <p>
                Ao preencher os formulários de Contato, Orçamento ou Revendedor, você envia
                voluntariamente dados pessoais e, quando aplicável, arquivos de arte para
                orçamento. Esses dados são usados exclusivamente para responder à sua
                solicitação, conforme detalhado na nossa{" "}
                <Link href="/politica-de-privacidade" className="text-laranja-profundo underline">
                  Política de Privacidade
                </Link>
                .
              </p>
              <p>
                O envio de um formulário não gera, por si só, nenhum contrato, orçamento
                fechado ou obrigação de fornecimento — trata-se apenas do início de uma
                conversa comercial, que será formalizada separadamente caso avance.
              </p>
            </>
          ),
        },
        {
          id: "propriedade-intelectual",
          title: "Propriedade intelectual",
          body: (
            <>
              <p>
                Marca, logotipo, textos e demais conteúdos originais deste site pertencem à
                Delta Soluções em Impressão Ltda e são protegidos pela legislação de
                propriedade intelectual aplicável. É proibida a reprodução total ou parcial
                sem autorização prévia por escrito.
              </p>
              <p>
                As imagens exibidas no site têm origens distintas e nem todas são de
                titularidade da Delta Soluções:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-1.5">
                <li>
                  Parte das imagens é licenciada de bancos de imagens de terceiros, como
                  iStock e Unsplash, e utilizada dentro dos termos de licença de cada
                  plataforma. Os direitos autorais dessas imagens pertencem aos respectivos
                  fotógrafos, ilustradores ou agências, não à Delta Soluções.
                </li>
                <li>
                  Parte das imagens retrata produtos, embalagens ou materiais produzidos
                  para clientes da Delta Soluções, exibidos a título de portfólio com a
                  autorização desses clientes. Marcas, embalagens e produtos de terceiros
                  eventualmente visíveis nessas imagens pertencem aos seus respectivos
                  titulares.
                </li>
              </ul>
              <p>
                A exibição dessas imagens não representa cessão de direitos autorais nem
                autorização para uso por terceiros. Caso você seja titular de direitos sobre
                alguma imagem publicada neste site e entenda que ela foi usada de forma
                indevida, entre em contato pelo e-mail{" "}
                <a href="mailto:matheus@groupmaxi.com.br" className="text-laranja-profundo underline">
                  matheus@groupmaxi.com.br
                </a>{" "}
                informando a página e a imagem em questão; avaliaremos o pedido e, se
                procedente, faremos a remoção ou substituição em prazo razoável.
              </p>
            </>
          ),
        },
        {
          id: "links-externos",
          title: "Links e serviços de terceiros",
          body: (
            <p>
              O site pode conter links para redes sociais e outros serviços de terceiros
              (como WhatsApp e Instagram). Não nos responsabilizamos pelo conteúdo,
              políticas de privacidade ou práticas desses serviços externos.
            </p>
          ),
        },
        {
          id: "limitacao-responsabilidade",
          title: "Limitação de responsabilidade",
          body: (
            <p>
              Empregamos esforços razoáveis para manter as informações do site atualizadas
              e corretas, mas não garantimos ausência total de erros, indisponibilidades ou
              interrupções. Informações sobre produtos, prazos e condições comerciais devem
              ser confirmadas diretamente conosco antes de qualquer decisão de compra.
            </p>
          ),
        },
        {
          id: "alteracoes",
          title: "Alterações destes termos",
          body: (
            <p>
              Podemos atualizar estes Termos de Uso a qualquer momento, para refletir
              mudanças no site ou na legislação aplicável. A data no topo desta página
              indica a versão vigente.
            </p>
          ),
        },
        {
          id: "lei-e-foro",
          title: "Lei aplicável e foro",
          body: (
            <p>
              Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica
              eleito o foro da Comarca de São Paulo - SP para dirimir quaisquer controvérsias
              decorrentes destes Termos, com renúncia a qualquer outro, por mais privilegiado
              que seja.
            </p>
          ),
        },
        {
          id: "contato",
          title: "Contato",
          body: (
            <p>
              Dúvidas sobre estes Termos de Uso podem ser enviadas pelo formulário na página{" "}
              <Link href="/contato" className="text-laranja-profundo underline">
                Contato
              </Link>{" "}
              ou pelo e-mail{" "}
              <a href="mailto:matheus@groupmaxi.com.br" className="text-laranja-profundo underline">
                matheus@groupmaxi.com.br
              </a>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
