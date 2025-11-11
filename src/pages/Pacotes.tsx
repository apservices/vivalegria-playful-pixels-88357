import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import SEO from "@/components/SEO";

const Pacotes = () => {
  const packages = [
    {
      name: "Vivalegria Classic",
      badge: null,
      audience: "Festas de aniversário e reuniões familiares",
      description: "O pacote essencial para garantir diversão e segurança na sua festa",
      features: [
        "2 monitores especializados",
        "4 horas de duração",
        "Brincadeiras temáticas adaptadas à idade",
        "Kit completo de segurança e higiene",
        "1 oficina criativa à escolha",
        "Equipamentos e materiais inclusos",
      ],
      color: "viva-sun",
    },
    {
      name: "Vivalegria Select",
      badge: "MAIS POPULAR",
      audience: "Eventos premium com produção completa",
      description: "A experiência premium com tudo incluído para um evento inesquecível",
      features: [
        "4 monitores especializados",
        "6 horas de duração",
        "Decoração temática personalizada",
        "3 oficinas criativas",
        "Trupe de animadores profissionais",
        "Personagem Solo incluso",
        "Fotografia e registro do evento",
        "Coordenação completa",
      ],
      color: "viva-orange",
      featured: true,
    },
    {
      name: "Oficinas Criativas",
      badge: null,
      audience: "Aniversários e eventos educativos",
      description: "Oficinas que estimulam criatividade e proporcionam lembranças únicas",
      features: [
        "2 monitores especializados",
        "3 horas de duração",
        "Escolha entre 5 oficinas temáticas",
        "Materiais premium inclusos",
        "Cada criança leva sua criação",
        "Certificado de participação",
      ],
      color: "viva-blue",
    },
    {
      name: "Corporativo Kids",
      badge: null,
      audience: "Shoppings, hotéis, escolas e empresas",
      description: "Soluções corporativas para encantar famílias em qualquer ambiente",
      features: [
        "6+ monitores (sob demanda)",
        "8 horas ou período customizado",
        "Recreação temática corporativa",
        "Personagem Solo e extras",
        "Suporte completo e logística",
        "Relatórios de satisfação",
        "Seguro de responsabilidade civil",
      ],
      color: "viva-sun",
    },
  ];

  const comparison = [
    { feature: "Número de monitores", classic: "2", select: "4", oficinas: "2", corporativo: "6+" },
    { feature: "Tempo de duração", classic: "4 horas", select: "6 horas", oficinas: "3 horas", corporativo: "8+ horas" },
    { feature: "Oficinas inclusas", classic: "1", select: "3", oficinas: "Sob demanda", corporativo: "Sob demanda" },
    { feature: "Personagens", classic: "Opcional", select: "Solo incluso", oficinas: "—", corporativo: "Solo + extras" },
    { feature: "Decoração", classic: "—", select: "Completa", oficinas: "—", corporativo: "Sob demanda" },
    { feature: "Fotografia", classic: "—", select: "Inclusa", oficinas: "—", corporativo: "Sob demanda" },
  ];

  return (
    <>
      <SEO
        title="Pacotes de Recreação | Vivalegria"
        description="Escolha o pacote perfeito: Classic, Select, Oficinas Criativas ou Corporativo Kids. Personalizamos tudo para o seu evento."
        canonical="/pacotes"
      />

      <div className="min-h-screen pt-20">
        {/* Hero */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-6 text-balance">Escolha o Pacote Perfeito</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Cada opção foi desenhada para garantir diversão, segurança e magia. Personalizamos tudo de acordo com suas necessidades.
            </p>
          </div>
        </section>

      {/* Packages Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`p-8 hover-lift ${pkg.featured ? 'border-primary border-2 shadow-hover' : ''}`}
              >
                {pkg.badge && (
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
                    {pkg.badge}
                  </span>
                )}
                <h2 className="text-3xl font-bold mb-2">{pkg.name}</h2>
                <p className="text-sm text-primary font-semibold mb-3">{pkg.audience}</p>
                <p className="text-muted-foreground mb-4">{pkg.description}</p>
                <div className="p-3 bg-gradient-subtle rounded-lg mb-6">
                  <p className="text-sm font-semibold">Base: 15 crianças</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Valor recalculado para 20, 30, 40 ou 50 crianças
                  </p>
                </div>
                
                <div className="space-y-3 mb-8">
                  <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                    O que está incluso:
                  </h3>
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button asChild className="w-full rounded-full" variant={pkg.featured ? "default" : "outline"}>
                  <Link to="/contratar">
                    Solicitar orçamento
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Compare os Pacotes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Veja lado a lado o que cada pacote oferece
            </p>
          </div>

          <div className="max-w-6xl mx-auto overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Recurso</TableHead>
                  <TableHead>Classic</TableHead>
                  <TableHead>Select</TableHead>
                  <TableHead>Oficinas</TableHead>
                  <TableHead>Corporativo</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparison.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{row.feature}</TableCell>
                    <TableCell>{row.classic}</TableCell>
                    <TableCell className="bg-primary/5 font-semibold">{row.select}</TableCell>
                    <TableCell>{row.oficinas}</TableCell>
                    <TableCell>{row.corporativo}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-balance">Não encontrou o pacote ideal?</h2>
            <p className="text-xl text-muted-foreground">
              Criamos soluções personalizadas para cada tipo de evento. Fale conosco e vamos desenhar juntos o pacote perfeito.
            </p>
            <Button asChild size="lg" className="rounded-full px-10 shadow-premium">
              <Link to="/contratar">
                Falar com especialista
              </Link>
            </Button>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Pacotes;
