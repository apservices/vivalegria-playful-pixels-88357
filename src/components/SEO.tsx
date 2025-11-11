import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

const SEO = ({
  title = "Vivalegria Recreação | Festas Infantis Premium",
  description = "Recreação infantil premium com profissionalismo, segurança e alto impacto emocional. Mais de 500 eventos realizados com excelência em São Paulo.",
  keywords = "recreação infantil, festas infantis, animação de festas, oficinas criativas, eventos corporativos infantis, recreação SP, ABC Paulista",
  ogImage = "/logo-vivalegria.jpg",
  canonical,
}: SEOProps) => {
  const siteUrl = "https://vivalegria.com.br";
  const fullTitle = title.includes("Vivalegria") ? title : `${title} | Vivalegria Recreação`;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={`${siteUrl}${canonical}`} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical ? `${siteUrl}${canonical}` : siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:locale" content="pt_BR" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical ? `${siteUrl}${canonical}` : siteUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Portuguese" />
      <meta name="author" content="Vivalegria Recreação" />
    </Helmet>
  );
};

export default SEO;
