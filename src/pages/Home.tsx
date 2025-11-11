import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";

const Home = () => {
  const values = [
    {
      title: "Segurança e Profissionalismo",
      description: "Monitores treinados e certificados com equipamentos premium",
    },
    {
      title: "+500 Eventos Realizados",
      description: "Experiência comprovada em festas inesquecíveis",
    },
    {
      title: "Experiências Personalizadas",
      description: "Cada evento é único e feito sob medida para você",
    },
    {
      title: "Alegria Garantida",
      description: "Transformamos brincadeiras em memórias eternas",
    },
  ];

  const testimonials = [
    {
      name: "Mariana Silva",
      role: "Mãe do Lucas, 6 anos",
      content: "A Vivalegria transformou o aniversário do meu filho em um dia mágico. Profissionais incríveis e as crianças não pararam de brincar!",
      rating: 5,
    },
    {
      name: "Roberto Costa",
      role: "Gerente de Shopping",
      content: "Contratamos para eventos mensais. Organização impecável e as famílias sempre elogiam muito. Recomendo!",
      rating: 5,
    },
    {
      name: "Ana Paula",
      role: "Coordenadora Pedagógica",
      content: "As oficinas criativas são um sucesso! As crianças aprendem brincando e os pais adoram.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "Qual a antecedência mínima para contratar?",
      answer: "Recomendamos agendar com pelo menos 15 dias de antecedência para garantir disponibilidade na data desejada. Para eventos em alta temporada (dezembro e janeiro), sugerimos 30 dias.",
    },
    {
      question: "Vocês levam equipamentos e materiais?",
      answer: "Sim! Levamos todos os equipamentos, materiais para oficinas, kit de segurança e higiene. Você só precisa providenciar o espaço.",
    },
    {
      question: "Quantas crianças cada monitor atende?",
      answer: "Mantemos a proporção de 1 monitor para cada 15 crianças para garantir segurança e atenção individualizada.",
    },
    {
      question: "Posso personalizar o tema do evento?",
      answer: "Com certeza! Trabalhamos com temas personalizados e adaptamos as brincadeiras de acordo com a idade e preferências das crianças.",
    },
    {
      question: "Quais regiões vocês atendem?",
      answer: "Atendemos toda a região do ABC Paulista e Grande São Paulo. Consulte-nos para outras localidades.",
    },
  ];

  return (
    <>
      <SEO
        title="Vivalegria Recreação | Festas Infantis Premium"
        description="Recreação infantil premium com profissionalismo, segurança e alto impacto emocional. Mais de 500 eventos realizados com excelência em São Paulo."
        canonical="/"
      />
      <JsonLd type="organization" />
      <JsonLd type="local-business" />
      <JsonLd type="faq" />
      
      <div className="min-h-screen">
        {/* Hero Section - Minimalist */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
          <div className="container mx-auto px-6 py-48 relative z-10">
            <div className="max-w-6xl mx-auto text-center space-y-12 animate-fade-in">
              <h1 className="leading-[1.05] tracking-tight">
                Onde cada evento<br />vira uma memória eterna
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
                Recreação infantil premium
              </p>
              <div className="pt-8">
                <Button asChild size="lg" className="rounded-full text-base px-12">
                  <Link to="/contratar">
                    Planejar evento
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Subtle background element */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
          </div>
        </section>

      {/* Values Section - Minimalist */}
      <section className="py-40 bg-muted/20 border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="space-y-4 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-2xl font-semibold tracking-tight">{value.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed font-light">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Preview - Minimalist */}
      <section className="py-40 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="mb-6 tracking-tight">Pacotes</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                name: "Classic",
                desc: "Festas de aniversário e reuniões familiares",
                features: ["Monitores especializados", "Brincadeiras temáticas", "Kit segurança"],
              },
              {
                name: "Select",
                desc: "Eventos premium com produção completa",
                features: ["Decoração personalizada", "Oficinas criativas", "Trupe de animadores"],
                featured: true,
              },
              {
                name: "Corporativo",
                desc: "Shoppings, hotéis, escolas e empresas",
                features: ["Recreação temática", "Personagem Solo", "Suporte completo"],
              },
            ].map((pkg, index) => (
              <Card
                key={index}
                className={`p-12 hover:shadow-elegant transition-all duration-500 ${pkg.featured ? 'border-primary' : 'border-border/50'}`}
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-semibold tracking-tight mb-3">{pkg.name}</h3>
                    <p className="text-muted-foreground leading-relaxed font-light">{pkg.desc}</p>
                  </div>
                  <ul className="space-y-3 pt-4 border-t border-border/50">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-sm text-muted-foreground font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild 
                    className="w-full rounded-full mt-4" 
                    variant={pkg.featured ? "default" : "outline"}
                  >
                    <Link to="/pacotes">Saber mais</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Minimalist */}
      <section className="py-40 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-20">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="border-l-2 border-primary pl-8 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <p className="text-2xl text-foreground/90 leading-relaxed font-light mb-8">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-lg">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Minimalist */}
      <section className="py-40 bg-background border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="tracking-tight">Perguntas</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50 pb-6">
                  <AccordionTrigger className="text-left hover:no-underline py-0">
                    <span className="font-semibold text-xl tracking-tight">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4 leading-relaxed text-lg font-light">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA - Minimalist */}
      <section className="py-48 bg-background">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-12">
            <h2 className="text-balance leading-tight tracking-tight">
              Vamos planejar<br />seu evento
            </h2>
            <Button asChild size="lg" className="rounded-full text-base px-12">
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

export default Home;
