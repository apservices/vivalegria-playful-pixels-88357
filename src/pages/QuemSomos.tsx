import { Heart, Award, Users, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import SEO from "@/components/SEO";
import soloMascot from "@/assets/solo-mascot.png";

const QuemSomos = () => {
  const timeline = [
    { year: "2015", event: "Fundação da Vivalegria", desc: "Início da jornada com foco em festas infantis memoráveis" },
    { year: "2017", event: "Lançamento do mascote Solo", desc: "Criação do personagem que se tornou símbolo da alegria" },
    { year: "2019", event: "Expansão para eventos corporativos", desc: "Passamos a atender shoppings, hotéis e empresas" },
    { year: "2023", event: "Mais de 500 eventos realizados", desc: "Consolidação como referência em recreação premium" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Paixão",
      description: "Amamos o que fazemos e isso se reflete em cada evento",
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Buscamos sempre superar expectativas com qualidade premium",
    },
    {
      icon: Users,
      title: "Empatia",
      description: "Entendemos cada família e personalizamos cada experiência",
    },
    {
      icon: Target,
      title: "Comprometimento",
      description: "Segurança e profissionalismo em primeiro lugar, sempre",
    },
  ];

  const team = [
    {
      role: "Fundadora & CEO",
      description: "Pedagoga com 15 anos de experiência em educação infantil e eventos",
    },
    {
      role: "Coordenadora de Recreação",
      description: "Especialista em brincadeiras lúdicas e desenvolvimento infantil",
    },
    {
      role: "Equipe de Monitores",
      description: "Profissionais treinados, certificados e apaixonados por alegria",
    },
  ];

  return (
    <>
      <SEO
        title="Quem Somos | Vivalegria Recreação"
        description="Conheça a história da Vivalegria: mais de 10 anos transformando festas em experiências inesquecíveis com profissionalismo e alegria."
        canonical="/quem-somos"
      />

      <div className="min-h-screen pt-20">
        {/* Hero */}
        <section className="py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-6 text-balance">Nossa História</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              Acreditamos que brincar é a forma mais bonita de aprender e criar memórias. Somos uma equipe apaixonada por transformar eventos em experiências de alegria e magia.
            </p>
          </div>
        </section>

      {/* Numbers */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Eventos Realizados</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">95</div>
              <p className="text-muted-foreground">NPS de Satisfação</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">10</div>
              <p className="text-muted-foreground">Anos de História</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Nossa Trajetória</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma década de alegria, aprendizado e evolução constante
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 items-start animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{item.year}</span>
                  </div>
                </div>
                <Card className="flex-1 p-6 hover-lift">
                  <h3 className="text-xl font-bold mb-2">{item.event}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Nossos Valores</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              O que nos move e inspira em cada evento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center hover-lift shadow-card">
                <div className="mx-auto w-20 h-20 flex items-center justify-center mb-4">
                  <img src={soloMascot} alt="Mascote Solo" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Nossa Equipe</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Profissionais dedicados e apaixonados por criar alegria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="p-8 text-center hover-lift">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary via-accent to-secondary mx-auto mb-4"></div>
                <h3 className="text-lg font-bold mb-2">{member.role}</h3>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="py-24 bg-gradient-to-br from-secondary/10 via-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-10">
              <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Transformar festas e eventos em experiências inesquecíveis, proporcionando alegria, segurança e aprendizado lúdico para cada criança, enquanto tranquilizamos e encantamos as famílias com profissionalismo e cuidado.
              </p>
            </Card>
            <Card className="p-10">
              <h3 className="text-2xl font-bold mb-4">Nossa Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser a referência nacional em recreação infantil premium, reconhecida pela excelência, inovação e pelo impacto positivo na vida de milhares de crianças e famílias.
              </p>
            </Card>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default QuemSomos;
