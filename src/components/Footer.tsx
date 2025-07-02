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
              <img 
                src="/lovable-uploads/bf9afb8f-07f3-4684-b8ae-40cc79de761c.png" 
                alt="Cactos - Soluções em Energia" 
                className="h-8 w-auto"
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg">Cactos</span>
                <span className="text-sm text-solar-yellow">Soluções em Energia</span>
              </div>
            </div>
            <p className="text-sm text-white/80 mb-4">
              Transformando energia solar em economia e sustentabilidade para sua casa ou empresa no Rio de Janeiro.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/cactos.se" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-solar-yellow transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/5521976811065" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-solar-yellow transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
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
                <span className="text-white/80">(21) 97681-1065</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-white/80">contato@energiacactos.com.br</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1" />
                <span className="text-white/80">
                  Rua Pinho, Anil<br />
                  Rio de Janeiro - RJ
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
            energiacactos.com.br
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;