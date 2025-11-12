import { CheckCircle2 } from "lucide-react";
import SEO from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const Termos = () => {
  return (
    <>
      <SEO
        title="Termos e Condições | Vivalegria"
        description="Termos e Condições da Vivalegria Recreação. Conheça as condições para contratação de nossos serviços."
        canonical="/termos"
      />
      
      <div className="min-h-screen pt-20 bg-background">
        {/* Hero */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <h1 className="text-balance">Termos e Condições</h1>
              <p className="text-lg text-muted-foreground">
                Políticas e diretrizes para garantir eventos seguros e bem-sucedidos
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <Accordion type="single" collapsible defaultValue="item-1" className="space-y-4">
                {/* 1. Pagamentos */}
                <AccordionItem value="item-1" className="border rounded-xl overflow-hidden bg-card">
                  <AccordionTrigger className="px-8 py-6 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#FFD836]/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#FF731D] font-bold">1</span>
                      </div>
                      <h2 className="text-xl font-bold text-left">Pagamentos</h2>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#FF731D] mt-1 flex-shrink-0" />
                        <span>
                          <strong>50% no ato da reserva:</strong> Para garantir sua data, é necessário realizar o pagamento de 50% do valor total do serviço contratado.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#FF731D] mt-1 flex-shrink-0" />
                        <span>
                          <strong>50% até 24 horas antes do evento:</strong> O saldo restante deve ser quitado com no mínimo 24 horas de antecedência.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#FF731D] mt-1 flex-shrink-0" />
                        <span>
                          <strong>Importante:</strong> A falta de pagamento no prazo estipulado inviabiliza a realização do evento.
                        </span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* 2. Cancelamento */}
                <AccordionItem value="item-2" className="border rounded-xl overflow-hidden bg-card">
                  <AccordionTrigger className="px-8 py-6 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#FFD836]/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#FF731D] font-bold">2</span>
                      </div>
                      <h2 className="text-xl font-bold text-left">Política de Cancelamento</h2>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#FF731D] mt-1 flex-shrink-0" />
                        <span>
                          <strong>Cancelamento com 7 dias ou mais de antecedência:</strong> Multa de 50% do valor total contratado.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#FF731D] mt-1 flex-shrink-0" />
                        <span>
                          <strong>Cancelamento com menos de 7 dias de antecedência:</strong> Multa de 80% do valor total contratado.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#FF731D] mt-1 flex-shrink-0" />
                        <span>
                          Os valores pagos após aplicação da multa serão devolvidos em até 15 dias úteis.
                        </span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* 3. Segurança */}
                <AccordionItem value="item-3" className="border rounded-xl overflow-hidden bg-card">
                  <AccordionTrigger className="px-8 py-6 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#FFD836]/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#FF731D] font-bold">3</span>
                      </div>
                      <h2 className="text-xl font-bold text-left">Segurança e Ambiente</h2>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#FF731D] mt-1 flex-shrink-0" />
                        <span>
                          A Vivalegria não realiza eventos em ambientes que apresentem riscos à integridade das crianças ou da equipe.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#FF731D] mt-1 flex-shrink-0" />
                        <span>
                          O contratante é responsável por garantir um espaço adequado e seguro para a realização das atividades.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#FF731D] mt-1 flex-shrink-0" />
                        <span>
                          Caso o ambiente seja considerado inadequado no dia do evento, a Vivalegria se reserva o direito de não realizar o serviço, sem devolução de valores.
                        </span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* 4. Infraestrutura */}
                <AccordionItem value="item-4" className="border rounded-xl overflow-hidden bg-card">
                  <AccordionTrigger className="px-8 py-6 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#FFD836]/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#FF731D] font-bold">4</span>
                      </div>
                      <h2 className="text-xl font-bold text-left">Requisitos de Infraestrutura</h2>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#FF731D] mt-1 flex-shrink-0" />
                        <span>
                          <strong>Espaço mínimo:</strong> 2m x 3m para montagem das atividades.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#FF731D] mt-1 flex-shrink-0" />
                        <span>
                          <strong>Oficinas criativas:</strong> Necessitam de mesas e cadeiras adequadas para o número de crianças.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#FF731D] mt-1 flex-shrink-0" />
                        <span>
                          <strong>Baladinha Kids:</strong> Requer tomada elétrica 110V ou 220V próxima ao local da atividade.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#FF731D] mt-1 flex-shrink-0" />
                        <span>
                          <strong>Eventos externos:</strong> O contratante deve fornecer estrutura de cobertura (tenda) caso necessário.
                        </span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* 5. Condições Climáticas */}
                <AccordionItem value="item-5" className="border rounded-xl overflow-hidden bg-card">
                  <AccordionTrigger className="px-8 py-6 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#FFD836]/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#FF731D] font-bold">5</span>
                      </div>
                      <h2 className="text-xl font-bold text-left">Condições Climáticas</h2>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#FF731D] mt-1 flex-shrink-0" />
                        <span>
                          Para eventos ao ar livre, o contratante deve ter um plano alternativo (espaço coberto interno) em caso de chuva ou condições climáticas adversas.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#FF731D] mt-1 flex-shrink-0" />
                        <span>
                          A Vivalegria não se responsabiliza por atrasos ou impossibilidade de realização devido a condições climáticas extremas, mas trabalhará em conjunto com o contratante para encontrar soluções.
                        </span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* 6. Uso de Imagem */}
                <AccordionItem value="item-6" className="border rounded-xl overflow-hidden bg-card">
                  <AccordionTrigger className="px-8 py-6 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#FFD836]/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#FF731D] font-bold">6</span>
                      </div>
                      <h2 className="text-xl font-bold text-left">Uso de Imagem</h2>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#FF731D] mt-1 flex-shrink-0" />
                        <span>
                          A Vivalegria pode registrar fotos e vídeos durante o evento para fins institucionais e de divulgação em redes sociais e site oficial.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#FF731D] mt-1 flex-shrink-0" />
                        <span>
                          Caso não deseje autorizar o uso de imagem, o contratante deve informar por escrito antes do evento.
                        </span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* 7. Privacidade LGPD */}
                <AccordionItem value="item-7" className="border rounded-xl overflow-hidden bg-card">
                  <AccordionTrigger className="px-8 py-6 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#FFD836]/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#FF731D] font-bold">7</span>
                      </div>
                      <h2 className="text-xl font-bold text-left">Privacidade e Proteção de Dados (LGPD)</h2>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#FF731D] mt-1 flex-shrink-0" />
                        <span>
                          Todos os dados pessoais coletados pela Vivalegria são utilizados exclusivamente para fins de prestação de serviço e comunicação relacionada ao evento contratado.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#FF731D] mt-1 flex-shrink-0" />
                        <span>
                          Seus dados não serão compartilhados com terceiros sem autorização expressa.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#FF731D] mt-1 flex-shrink-0" />
                        <span>
                          Você pode solicitar a exclusão de seus dados a qualquer momento através do e-mail: contato@vivalegria.com.br
                        </span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* 8. Responsabilidades */}
                <AccordionItem value="item-8" className="border rounded-xl overflow-hidden bg-card">
                  <AccordionTrigger className="px-8 py-6 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#FFD836]/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#FF731D] font-bold">8</span>
                      </div>
                      <h2 className="text-xl font-bold text-left">Responsabilidades Gerais</h2>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#FF731D] mt-1 flex-shrink-0" />
                        <span>
                          <strong>Supervisão compartilhada:</strong> Embora a Vivalegria forneça monitores especializados, pais e responsáveis devem manter supervisão geral das crianças durante o evento.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#FF731D] mt-1 flex-shrink-0" />
                        <span>
                          <strong>Itens pessoais:</strong> A Vivalegria não se responsabiliza por objetos pessoais perdidos ou danificados durante o evento.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#FF731D] mt-1 flex-shrink-0" />
                        <span>
                          <strong>Alergias e restrições:</strong> É responsabilidade do contratante informar previamente sobre alergias alimentares ou necessidades especiais das crianças.
                        </span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Acceptance */}
              <Card className="p-8 bg-[#FFF8E6]">
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-bold">Aceitação dos Termos</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Ao contratar os serviços da Vivalegria Recreação, você declara que leu, compreendeu e concorda com todos os termos e condições descritos nesta página.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Última atualização: Janeiro de 2025
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Termos;