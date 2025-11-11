import { Link } from "react-router-dom";
import { ArrowRight, Shield, Users, Star, Heart, CheckCircle2, Quote } from "lucide-react";
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
import heroImage from "@/assets/hero-balloons.jpg";
import soloMascot from "@/assets/solo-mascot.png";

const Home = () => {
  const values = [
    {
      icon: Shield,
      title: "Segurança e Profissionalismo",
      description: "Monitores treinados e certificados com equipamentos premium",
    },
    {
      icon: Users,
      title: "+500 Eventos Realizados",
      description: "Experiência comprovada em festas inesquecíveis",
    },
    {
      icon: Star,
      title: "Experiências Personalizadas",
      description: "Cada evento é único e feito sob medida para você",
    },
    {
      icon: Heart,
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
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
          </div>
          
          <div className="container mx-auto px-4 py-32 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
              <h1 className="text-balance leading-tight">
                Vivalegria. Onde cada evento vira uma memória eterna.
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto text-balance leading-relaxed">
                Recreação infantil premium com profissionalismo, segurança e alto impacto emocional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button asChild size="lg" className="rounded-full text-lg px-8 h-14 group shadow-premium">
                  <Link to="/contratar">
                    Quero meu evento
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full text-lg px-8 h-14">
                  <Link to="/pacotes">Ver pacotes</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

      {/* Values Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="mb-4">Por que escolher a Vivalegria?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Excelência em cada detalhe para garantir a festa dos sonhos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-8 text-center hover-lift border-2 hover:border-primary/50 animate-fade-in shadow-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 mx-auto w-20 h-20 flex items-center justify-center">
                  <img src={soloMascot} alt="Mascote Solo" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Preview */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Nossos Pacotes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Escolha o pacote perfeito para o seu evento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Vivalegria Classic",
                desc: "Festas de aniversário e reuniões familiares",
                features: ["Monitores especializados", "Brincadeiras temáticas", "Kit segurança"],
                color: "viva-sun",
              },
              {
                name: "Vivalegria Select",
                desc: "Eventos premium com produção completa",
                features: ["Decoração personalizada", "Oficinas criativas", "Trupe de animadores"],
                color: "viva-orange",
                featured: true,
              },
              {
                name: "Corporativo Kids",
                desc: "Shoppings, hotéis, escolas e empresas",
                features: ["Recreação temática", "Personagem Solo", "Suporte completo"],
                color: "viva-blue",
              },
            ].map((pkg, index) => (
              <Card
                key={index}
                className={`p-8 hover-lift ${pkg.featured ? 'border-primary border-2 shadow-hover' : ''}`}
              >
                {pkg.featured && (
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
                    MAIS POPULAR
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-muted-foreground mb-6">{pkg.desc}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full rounded-full" variant={pkg.featured ? "default" : "outline"}>
                  <Link to="/pacotes">Saber mais</Link>
                </Button>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/pacotes">Ver todos os pacotes</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">O que dizem sobre nós</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Famílias e empresas confiam na Vivalegria para transformar festas em experiências inesquecíveis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 hover-lift">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{testimonial.content}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Perguntas Frequentes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tudo que você precisa saber sobre nossos serviços
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg px-6 border-2">
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-warm">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-balance text-white">Vamos transformar sua festa em um momento único</h2>
            <p className="text-xl text-white/90">
              Entre em contato agora e garanta a melhor recreação para o seu evento
            </p>
            <Button asChild size="lg" className="rounded-full text-lg px-10 h-14 shadow-premium bg-white text-viva-orange hover:bg-white/90">
              <Link to="/contratar">
                Contratar Agora
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
