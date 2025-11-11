import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import logoVivalegria from "@/assets/logo-vivalegria-transparent.png";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <img src={logoVivalegria} alt="Vivalegria" className="h-12 w-auto" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transformando festas em experiências inesquecíveis desde 2015.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://instagram.com/vivalegria"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com/vivalegria"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/pacotes" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Pacotes
                </Link>
              </li>
              <li>
                <Link to="/oficinas" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Oficinas Criativas
                </Link>
              </li>
              <li>
                <Link to="/quem-somos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link to="/corporativo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Eventos Corporativos
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Festas de Aniversário</li>
              <li>Oficinas Criativas</li>
              <li>Eventos Corporativos</li>
              <li>Recreação em Hotéis</li>
              <li>Shoppings e Escolas</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">São Paulo - SP</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone size={16} className="flex-shrink-0 text-primary" />
                <a href="https://wa.me/5511992049001" className="text-muted-foreground hover:text-foreground transition-colors">
                  (11) 99204-9001
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail size={16} className="flex-shrink-0 text-primary" />
                <a href="mailto:contato@vivalegria.com.br" className="text-muted-foreground hover:text-foreground transition-colors">
                  contato@vivalegria.com.br
                </a>
              </li>
            </ul>
            <p className="text-xs text-muted-foreground mt-3">
              Seg a Sex: 9h–18h<br />
              Sáb: 9h–12h
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vivalegria Recreação. Todos os direitos reservados.
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link to="/privacidade" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Política de Privacidade
            </Link>
            <span className="text-xs text-muted-foreground">•</span>
            <Link to="/termos" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
