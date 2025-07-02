import { Link } from "react-router-dom";
import { Sun, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-solar-green-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-solar-yellow rounded-lg flex items-center justify-center">
                <Sun className="w-6 h-6 text-solar-green-dark" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg">Cactos</span>
                <span className="text-sm text-solar-yellow">Energia Solar</span>
              </div>
            </div>
            <p className="text-sm text-white/80 mb-4">
              Transformando energia solar em economia e sustentabilidade para sua casa ou empresa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-solar-yellow transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-solar-yellow transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-solar-yellow transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/80 hover:text-solar-yellow transition-colors">Início</Link></li>
              <li><Link to="/sobre" className="text-white/80 hover:text-solar-yellow transition-colors">Sobre</Link></li>
              <li><Link to="/servicos" className="text-white/80 hover:text-solar-yellow transition-colors">Serviços</Link></li>
              <li><Link to="/depoimentos" className="text-white/80 hover:text-solar-yellow transition-colors">Depoimentos</Link></li>
              <li><Link to="/calculadora" className="text-white/80 hover:text-solar-yellow transition-colors">Calculadora</Link></li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><span className="text-white/80">Energia Solar Residencial</span></li>
              <li><span className="text-white/80">Energia Solar Empresarial</span></li>
              <li><span className="text-white/80">Manutenção de Sistemas</span></li>
              <li><span className="text-white/80">Consultoria Energética</span></li>
              <li><span className="text-white/80">Financiamento Solar</span></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-white/80">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-white/80">contato@energiacactos.com.br</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1" />
                <span className="text-white/80">
                  Rua das Energias, 123<br />
                  São Paulo - SP<br />
                  CEP: 01234-567
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2024 Cactos - Soluções em Energia. Todos os direitos reservados.
          </p>
          <p className="text-white/60 text-xs mt-2">
            Desenvolvimento: energiacactos.com.br
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;