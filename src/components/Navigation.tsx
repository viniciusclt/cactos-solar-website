import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Phone } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { name: "Início", path: "/" },
    { name: "Sobre", path: "/sobre" },
    { name: "Serviços", path: "/servicos" },
    { name: "Depoimentos", path: "/depoimentos" },
    { name: "Calculadora", path: "/calculadora" },
    { name: "Contato", path: "/contato" },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/bf9afb8f-07f3-4684-b8ae-40cc79de761c.png" 
              alt="Cactos - Soluções em Energia" 
              className="h-10 w-auto"
            />
            <div className="flex flex-col">
              <span className="font-bold text-lg text-solar-green">Cactos</span>
              <span className="text-xs text-muted-foreground">Soluções em Energia</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors ${
                  isActive(item.path)
                    ? "text-solar-green"
                    : "text-foreground hover:text-solar-green"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+5521976811065" className="flex items-center text-sm text-muted-foreground hover:text-solar-green">
              <Phone className="w-4 h-4 mr-1" />
              (21) 97681-1065
            </a>
            <Button variant="cta" size="sm" asChild>
              <a 
                href="https://wa.me/5521976811065?text=Vim%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20orçamento"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar Orçamento
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-solar-green"
                      : "text-foreground hover:text-solar-green"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t">
                <a href="tel:+5521976811065" className="flex items-center text-sm text-muted-foreground mb-4">
                  <Phone className="w-4 h-4 mr-2" />
                  (21) 97681-1065
                </a>
                <Button variant="cta" className="w-full" asChild>
                  <a 
                    href="https://wa.me/5521976811065?text=Vim%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20orçamento"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                  >
                    Solicitar Orçamento
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;