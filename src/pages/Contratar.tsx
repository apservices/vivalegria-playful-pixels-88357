import { useState } from "react";
import { Check, Plus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import { 
  calculatePackagePrice, 
  calculateWorkshopPrice, 
  formatPrice, 
  childrenRanges,
  type ChildrenRange,
  type PackageType,
  type WorkshopType 
} from "@/utils/pricing";

const Contratar = () => {
  const [selectedPackage, setSelectedPackage] = useState<PackageType | null>(null);
  const [numChildren, setNumChildren] = useState<ChildrenRange>(15);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

  const packages = [
    {
      id: "select" as PackageType,
      name: "Vivalegria Select",
      badge: "MAIS POPULAR",
      features: [
        "4 monitores especializados",
        "6 horas de duração",
        "Decoração temática personalizada",
        "3 oficinas criativas",
        "Trupe de animadores profissionais",
        "Personagem Solo incluso",
      ],
    },
    {
      id: "classic" as PackageType,
      name: "Vivalegria Classic",
      features: [
        "2 monitores especializados",
        "4 horas de duração",
        "Brincadeiras temáticas adaptadas",
        "Kit completo de segurança",
        "1 oficina criativa à escolha",
        "Equipamentos inclusos",
      ],
    },
  ];

  const extras: { id: WorkshopType; name: string }[] = [
    { id: "pintura_basica", name: "Pintura Artística Básica" },
    { id: "pintura_pro", name: "Pintura Artística Profissional" },
    { id: "slime", name: "Oficina Slime" },
    { id: "micangas", name: "Oficina Miçangas" },
    { id: "jardinagem", name: "Oficina Jardinagem" },
    { id: "tela", name: "Pintura em Tela" },
    { id: "cupcake", name: "Cupcake Decorado" },
    { id: "baladinha", name: "Baladinha Kids" },
    { id: "magicas", name: "Show de Mágicas" },
    { id: "baby", name: "Área Baby" },
    { id: "torta", name: "Torta na Cara" },
  ];

  const toggleExtra = (extraId: string) => {
    setSelectedExtras((prev) =>
      prev.includes(extraId) ? prev.filter((id) => id !== extraId) : [...prev, extraId]
    );
  };

  const calculateTotal = () => {
    if (!selectedPackage) return 0;
    
    const basePrice = calculatePackagePrice(selectedPackage, numChildren);
    
    const extrasTotal = selectedExtras.reduce((sum, extraId) => {
      return sum + calculateWorkshopPrice(extraId as WorkshopType, numChildren);
    }, 0);

    return basePrice + extrasTotal;
  };

  return (
    <>
      <SEO
        title="Contratar Serviço | Vivalegria"
        description="Configure seu pacote personalizado e agende seu evento com a Vivalegria"
        canonical="/contratar"
      />

      <div className="min-h-screen pt-20">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-viva-sun/10 via-viva-orange/10 to-viva-warm/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4">Configure Seu Evento Premium</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Monte o pacote perfeito em 4 passos simples
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Configuration */}
            <div className="lg:col-span-2 space-y-8">
              {/* Step 1 - Package Selection */}
              <Card className="p-8">
                <div className="mb-6">
                  <Badge className="mb-2">Passo 1</Badge>
                  <h2 className="text-2xl font-bold">Escolha seu Pacote</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {packages.map((pkg) => (
                    <div
                      key={pkg.id}
                      onClick={() => setSelectedPackage(pkg.id)}
                      className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                        selectedPackage === pkg.id
                          ? "border-primary bg-primary/5 shadow-premium"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      {pkg.badge && (
                        <Badge className="mb-3 bg-primary">{pkg.badge}</Badge>
                      )}
                      <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                      <p className="text-2xl font-bold text-primary mb-2">
                        R$ {formatPrice(calculatePackagePrice(pkg.id, 15))}
                      </p>
                      <p className="text-xs text-muted-foreground mb-4">
                        Base 15 crianças · Recalculado automaticamente
                      </p>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <Check className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Step 2 - Number of Children */}
              {selectedPackage && (
                <Card className="p-8">
                  <div className="mb-6">
                    <Badge className="mb-2">Passo 2</Badge>
                    <h2 className="text-2xl font-bold">Quantidade de Crianças</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {childrenRanges.map((range) => (
                      <button
                        key={range.value}
                        onClick={() => setNumChildren(range.value)}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          numChildren === range.value
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <p className="font-semibold">{range.label}</p>
                        {selectedPackage && (
                          <p className="text-sm text-primary mt-1">
                            R$ {formatPrice(calculatePackagePrice(selectedPackage, range.value))}
                          </p>
                        )}
                      </button>
                    ))}
                  </div>
                </Card>
              )}

              {/* Step 3 - Extras */}
              {selectedPackage && numChildren && (
                <Card className="p-8">
                  <div className="mb-6">
                    <Badge className="mb-2">Passo 3</Badge>
                    <h2 className="text-2xl font-bold">Adicione Extras</h2>
                    <p className="text-muted-foreground mt-2">Opcionais para tornar seu evento ainda mais especial</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {extras.map((extra) => {
                      const isSelected = selectedExtras.includes(extra.id);
                      return (
                        <button
                          key={extra.id}
                          onClick={() => toggleExtra(extra.id)}
                          className={`p-4 rounded-xl border-2 text-left transition-all ${
                            isSelected
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <p className="font-semibold">{extra.name}</p>
                              <p className="text-sm text-primary mt-1">
                                + R$ {formatPrice(calculateWorkshopPrice(extra.id, numChildren))}
                              </p>
                            </div>
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                              isSelected ? "bg-primary text-white" : "bg-muted"
                            }`}>
                              {isSelected ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </Card>
              )}
            </div>

            {/* Right Column - Summary */}
            <div className="lg:col-span-1">
              <Card className="p-8 sticky top-24">
                <h3 className="text-xl font-bold mb-6">Resumo do Pedido</h3>
                
                {selectedPackage ? (
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Pacote selecionado</p>
                      <p className="font-semibold">
                        {packages.find((p) => p.id === selectedPackage)?.name}
                      </p>
                    </div>

                    {numChildren && (
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Quantidade</p>
                        <p className="font-semibold">
                          {childrenRanges.find((r) => r.value === numChildren)?.label}
                        </p>
                        {selectedPackage && (
                          <p className="text-sm text-primary mt-1">
                            Pacote: R$ {formatPrice(calculatePackagePrice(selectedPackage, numChildren))}
                          </p>
                        )}
                      </div>
                    )}

                    {selectedExtras.length > 0 && (
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Extras adicionados</p>
                        <ul className="space-y-1">
                          {selectedExtras.map((extraId) => {
                            const extra = extras.find((e) => e.id === extraId);
                            if (!extra) return null;
                            return (
                              <li key={extraId} className="text-sm flex justify-between">
                                <span>{extra.name}</span>
                                <span className="text-primary">
                                  +R$ {formatPrice(calculateWorkshopPrice(extra.id, numChildren))}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}

                    <div className="pt-6 border-t">
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-lg font-semibold">Total estimado</span>
                        <span className="text-3xl font-bold text-primary">
                          R$ {formatPrice(calculateTotal())}
                        </span>
                      </div>
                      
                      <Button
                        asChild
                        size="lg"
                        className="w-full rounded-xl"
                        disabled={!selectedPackage || !numChildren}
                      >
                        <a
                          href={`https://wa.me/5511992049001?text=Olá! Gostaria de contratar o pacote ${packages.find((p) => p.id === selectedPackage)?.name} para ${childrenRanges.find((r) => r.value === numChildren)?.label}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Solicitar via WhatsApp
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center py-8">
                    Selecione um pacote para começar
                  </p>
                )}
              </Card>
            </div>
          </div>

          {/* Step 4 - Jotform */}
          {selectedPackage && numChildren && (
            <Card className="mt-8 p-8">
              <div className="mb-6">
                <Badge className="mb-2">Passo 4</Badge>
                <h2 className="text-2xl font-bold">Complete o Agendamento</h2>
                <p className="text-muted-foreground mt-2">
                  Preencha o formulário abaixo com os detalhes do seu evento
                </p>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-premium">
                <iframe
                  src="https://form.jotform.com/243466215987670"
                  title="Formulário de Agendamento Vivalegria"
                  className="w-full h-[800px] border-0"
                  allowFullScreen
                />
              </div>
            </Card>
          )}
        </div>
      </div>
    </>
  );
};

export default Contratar;
