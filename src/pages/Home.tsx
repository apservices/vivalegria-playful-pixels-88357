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
            <div className="absolute inset-0 bg-gradient-hero"></div>
          </div>
          
          <div className="container mx-auto px-6 py-40 relative z-10">
            <div className="max-w-5xl mx-auto text-center space-y-10 animate-fade-in">
              <h1 className="text-balance leading-tight">
                Vivalegria. Onde cada evento vira uma memória eterna.
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto text-balance leading-relaxed font-medium">
                Recreação infantil premium com profissionalismo, segurança e alto impacto emocional.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-6">
                <Button asChild size="lg" className="rounded-full text-lg px-10 group">
                  <Link to="/contratar">
                    Quero meu evento
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full text-lg px-10">
                  <Link to="/pacotes">Ver pacotes</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

      {/* Values Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="mb-6">Por que escolher a Vivalegria?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Excelência em cada detalhe para garantir a festa dos sonhos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-10 text-center hover-lift border hover:border-primary/30 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 mx-auto w-24 h-24 flex items-center justify-center">
                  <img src={soloMascot} alt="Mascote Solo" className="w-full h-full object-contain drop-shadow-md" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Preview */}
      <section className="py-32 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="mb-6">Nossos Pacotes</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Escolha o pacote perfeito para o seu evento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
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
                className={`p-10 hover-lift ${pkg.featured ? 'border-primary border-2 shadow-elegant' : 'border hover:border-primary/30'}`}
              >
                {pkg.featured && (
                  <span className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-full mb-6 inline-block">
                    MAIS POPULAR
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-3">{pkg.name}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">{pkg.desc}</p>
                <ul className="space-y-4 mb-10">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full rounded-full" variant={pkg.featured ? "default" : "outline"}>
                  <Link to="/pacotes">Saber mais</Link>
                </Button>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/pacotes">Ver todos os pacotes</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="mb-6">O que dizem sobre nós</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Famílias e empresas confiam na Vivalegria para transformar festas em experiências inesquecíveis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-10 hover-lift border hover:border-primary/30">
                <Quote className="w-12 h-12 text-secondary/40 mb-6" />
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-8 leading-relaxed text-base">{testimonial.content}</p>
                <div>
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="mb-6">Perguntas Frequentes</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Tudo que você precisa saber sobre nossos serviços
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-5">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-2xl px-8 border hover:border-primary/30 transition-colors">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-bold text-lg">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-warm">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-10">
            <h2 className="text-balance text-white leading-tight">Vamos transformar sua festa em um momento único</h2>
            <p className="text-2xl text-white/95 leading-relaxed font-medium">
              Entre em contato agora e garanta a melhor recreação para o seu evento
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/95 rounded-full text-lg px-12 shadow-[0_12px_48px_rgba(0,0,0,0.3)]">
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
