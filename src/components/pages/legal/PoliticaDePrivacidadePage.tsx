import Link from "next/link";
import LegalLayout from "./LegalLayout";

export default function PoliticaDePrivacidadePage() {
  return (
    <LegalLayout
      title="Política de Privacidade"
      updatedAt="4 de setembro de 2026"
      intro="Esta Política de Privacidade explica como a Delta Soluções em Impressão Ltda ('Delta Soluções', 'nós') coleta, usa, armazena e protege os dados pessoais fornecidos por você ao usar os formulários deste site, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD)."
      sections={[
        {
          id: "controlador",
          title: "Quem é o controlador dos dados",
          body: (
            <p>
              A controladora dos dados pessoais tratados por meio deste site é a Delta
              Soluções em Impressão Ltda, com sede em São Paulo - SP. Para exercer seus
              direitos ou tirar dúvidas sobre esta política, use o e-mail{" "}
              <a href="mailto:matheus@groupmaxi.com.br" className="text-laranja-profundo underline">
                matheus@groupmaxi.com.br
              </a>{" "}
              ou o formulário na página{" "}
              <Link href="/contato" className="text-laranja-profundo underline">
                Contato
              </Link>
              .
            </p>
          ),
        },
        {
          id: "quais-dados",
          title: "Quais dados coletamos",
          body: (
            <>
              <p>
                Coletamos dados de duas formas: (i) os que você informa voluntariamente
                nos formulários de contato, e (ii) dados de navegação coletados
                automaticamente por cookies de audiência (Google Analytics), descritos na
                seção{" "}
                <a href="#cookies-e-analytics" className="text-laranja-profundo underline">
                  Cookies e Google Analytics
                </a>{" "}
                abaixo.
              </p>
              <p>
                Os dados pessoais fornecidos nos formulários são os que você mesmo
                informa, de forma voluntária, ao preencher um dos formulários da página{" "}
                <Link href="/contato" className="text-laranja-profundo underline">
                  Contato
                </Link>
                :
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-1.5">
                <li>
                  <strong>Contato:</strong> nome, e-mail, telefone (opcional), assunto e
                  mensagem.
                </li>
                <li>
                  <strong>Orçamento:</strong> nome, e-mail, telefone, empresa, tipo de
                  material, quantidade, prazo desejado, informação sobre arte pronta,
                  mensagem e, quando enviados, arquivos de arte (imagens, PDF ou similares).
                </li>
                <li>
                  <strong>Revendedor:</strong> nome, e-mail, telefone, empresa, CNPJ,
                  cidade/UF e mensagem.
                </li>
              </ul>
              <p>
                Também é usado um campo oculto anti-spam (honeypot), que não coleta dados
                pessoais e serve apenas para identificar preenchimentos automatizados por
                robôs.
              </p>
            </>
          ),
        },
        {
          id: "cookies-e-analytics",
          title: "Cookies e Google Analytics",
          body: (
            <>
              <p>
                Utilizamos o Google Analytics para entender de onde vêm os acessos ao
                nosso site (por exemplo, busca orgânica, redes sociais ou anúncios) e como
                as páginas são navegadas, o que nos ajuda a melhorar o conteúdo e a
                experiência de quem visita. Para isso, o Google Analytics instala cookies
                no seu navegador e coleta dados como endereço IP, tipo de dispositivo,
                navegador, páginas visitadas e origem do acesso.
              </p>
              <p>
                Esses dados são tratados de forma agregada e estatística — não usamos o
                Google Analytics para identificar você individualmente. O tratamento se
                baseia no nosso legítimo interesse em compreender e melhorar o desempenho
                do site (art. 7º, IX, da LGPD), sempre de forma proporcional e
                transparente.
              </p>
              <p>
                O Google Analytics é operado pelo Google LLC, o que pode envolver
                transferência internacional de dados para os Estados Unidos e outros
                países onde o Google mantém servidores. Você pode saber mais sobre como o
                Google trata esses dados na política de privacidade do Google e, se
                preferir não ser rastreado, pode instalar o complemento de opt-out do
                Google Analytics ou bloquear cookies nas configurações do seu navegador.
              </p>
            </>
          ),
        },
        {
          id: "finalidade-base-legal",
          title: "Para que usamos seus dados e em qual base legal",
          body: (
            <>
              <p>
                Usamos os dados enviados nos formulários exclusivamente para: responder à
                sua mensagem, elaborar e negociar orçamentos, avaliar solicitações de
                parceria comercial (revenda) e manter contato relacionado à sua solicitação.
                Os dados de navegação coletados pelo Google Analytics são usados apenas
                para monitorar a origem dos acessos e o desempenho do site.
              </p>
              <p>
                O tratamento dos dados de formulário se baseia na sua execução de
                procedimentos preliminares a contrato e no consentimento que você fornece
                ao marcar a caixa de aceite dos Termos de Uso e desta Política antes de
                enviar o formulário (art. 7º, incisos I e V, da LGPD). Já o tratamento dos
                dados de navegação via Google Analytics se baseia em nosso legítimo
                interesse (art. 7º, IX, da LGPD), conforme detalhado na seção{" "}
                <a href="#cookies-e-analytics" className="text-laranja-profundo underline">
                  Cookies e Google Analytics
                </a>
                .
              </p>
            </>
          ),
        },
        {
          id: "compartilhamento",
          title: "Com quem compartilhamos seus dados",
          body: (
            <>
              <p>
                Os dados enviados pelos formulários são encaminhados por e-mail à nossa
                equipe comercial por meio da plataforma de envio de e-mails transacionais{" "}
                <strong>Resend</strong>, que atua como nossa operadora de dados apenas para
                viabilizar essa entrega. Os dados de navegação coletados pelos cookies de
                audiência são tratados pelo <strong>Google Analytics</strong> (Google LLC),
                conforme a seção{" "}
                <a href="#cookies-e-analytics" className="text-laranja-profundo underline">
                  Cookies e Google Analytics
                </a>
                .
              </p>
              <p>
                Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros
                para fins de marketing. Podemos divulgar dados quando exigido por lei, ordem
                judicial ou autoridade competente.
              </p>
            </>
          ),
        },
        {
          id: "armazenamento-retencao",
          title: "Armazenamento e prazo de retenção",
          body: (
            <p>
              Não mantemos um banco de dados próprio com as respostas dos formulários — os
              dados chegam até nós por e-mail. Eles ficam armazenados na caixa de e-mail da
              nossa equipe comercial pelo tempo necessário para atender sua solicitação e
              cumprir eventuais obrigações legais, contratuais ou fiscais, sendo descartados
              quando deixarem de ser necessários para essas finalidades.
            </p>
          ),
        },
        {
          id: "seguranca",
          title: "Segurança dos dados",
          body: (
            <p>
              Adotamos medidas técnicas e administrativas razoáveis para proteger seus
              dados contra acessos não autorizados e situações de perda, alteração ou
              vazamento, incluindo o uso de conexão segura (HTTPS) no envio dos formulários
              e de um serviço de e-mail transacional com práticas de segurança próprias.
            </p>
          ),
        },
        {
          id: "direitos-do-titular",
          title: "Seus direitos como titular dos dados",
          body: (
            <>
              <p>Nos termos do art. 18 da LGPD, você pode solicitar, a qualquer momento:</p>
              <ul className="list-disc pl-5 flex flex-col gap-1.5">
                <li>confirmação da existência de tratamento dos seus dados;</li>
                <li>acesso aos dados que temos sobre você;</li>
                <li>correção de dados incompletos, inexatos ou desatualizados;</li>
                <li>
                  anonimização, bloqueio ou eliminação de dados desnecessários ou tratados
                  em desconformidade com a LGPD;
                </li>
                <li>informação sobre com quem compartilhamos seus dados;</li>
                <li>revogação do consentimento e eliminação dos dados tratados com base nele;</li>
                <li>
                  revisão de decisões automatizadas, quando aplicável — o que não ocorre
                  hoje neste site.
                </li>
              </ul>
              <p>
                Para exercer qualquer desses direitos, entre em contato pelo e-mail{" "}
                <a href="mailto:matheus@groupmaxi.com.br" className="text-laranja-profundo underline">
                  matheus@groupmaxi.com.br
                </a>
                . Responderemos dentro dos prazos previstos na LGPD.
              </p>
            </>
          ),
        },
        {
          id: "criancas",
          title: "Dados de crianças e adolescentes",
          body: (
            <p>
              Nosso site não é direcionado a menores de 18 anos e os formulários não devem
              ser preenchidos por eles. Se identificarmos que dados de uma criança ou
              adolescente foram enviados sem o devido consentimento dos responsáveis,
              eles serão excluídos.
            </p>
          ),
        },
        {
          id: "alteracoes",
          title: "Alterações desta política",
          body: (
            <p>
              Podemos atualizar esta Política de Privacidade sempre que necessário, por
              exemplo em razão de mudanças no site, nos formulários ou na legislação
              aplicável. A data no topo desta página indica a versão vigente.
            </p>
          ),
        },
        {
          id: "contato-dpo",
          title: "Contato",
          body: (
            <p>
              Dúvidas, solicitações ou reclamações relacionadas ao tratamento de dados
              pessoais podem ser enviadas para{" "}
              <a href="mailto:matheus@groupmaxi.com.br" className="text-laranja-profundo underline">
                matheus@groupmaxi.com.br
              </a>{" "}
              ou pelo formulário na página{" "}
              <Link href="/contato" className="text-laranja-profundo underline">
                Contato
              </Link>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
