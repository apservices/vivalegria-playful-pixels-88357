import { useLocation } from "react-router-dom";

interface JsonLdProps {
  type?: "organization" | "local-business" | "faq";
}

const JsonLd = ({ type = "organization" }: JsonLdProps) => {
  const location = useLocation();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vivalegria Recreação",
    "url": "https://vivalegria.com.br",
    "logo": "https://vivalegria.com.br/logo-vivalegria.jpg",
    "description": "Recreação infantil premium com profissionalismo, segurança e alto impacto emocional. Mais de 500 eventos realizados com excelência.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Exemplo, 123",
      "addressLocality": "Santo André",
      "addressRegion": "SP",
      "postalCode": "09000-000",
      "addressCountry": "BR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-11-96598-2251",
      "contactType": "customer service",
      "areaServed": "BR",
      "availableLanguage": "Portuguese"
    },
    "sameAs": [
      "https://instagram.com/vivalegria",
      "https://facebook.com/vivalegria"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Vivalegria Recreação",
    "image": "https://vivalegria.com.br/logo-vivalegria.jpg",
    "priceRange": "$$",
    "telephone": "+55-11-96598-2251",
    "email": "contato@vivalegria.com.br",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Exemplo, 123",
      "addressLocality": "Santo André",
      "addressRegion": "SP",
      "postalCode": "09000-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -23.6,
      "longitude": -46.5
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "12:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qual a antecedência mínima para contratar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Recomendamos agendar com pelo menos 15 dias de antecedência para garantir disponibilidade na data desejada. Para eventos em alta temporada (dezembro e janeiro), sugerimos 30 dias."
        }
      },
      {
        "@type": "Question",
        "name": "Vocês levam equipamentos e materiais?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim! Levamos todos os equipamentos, materiais para oficinas, kit de segurança e higiene. Você só precisa providenciar o espaço."
        }
      },
      {
        "@type": "Question",
        "name": "Quantas crianças cada monitor atende?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mantemos a proporção de 1 monitor para cada 15 crianças para garantir segurança e atenção individualizada."
        }
      },
      {
        "@type": "Question",
        "name": "Posso personalizar o tema do evento?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Com certeza! Trabalhamos com temas personalizados e adaptamos as brincadeiras de acordo com a idade e preferências das crianças."
        }
      },
      {
        "@type": "Question",
        "name": "Quais regiões vocês atendem?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Atendemos toda a região do ABC Paulista e Grande São Paulo. Consulte-nos para outras localidades."
        }
      }
    ]
  };

  const getSchema = () => {
    switch (type) {
      case "local-business":
        return localBusinessSchema;
      case "faq":
        return faqSchema;
      default:
        return organizationSchema;
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(getSchema()) }}
    />
  );
};

export default JsonLd;
