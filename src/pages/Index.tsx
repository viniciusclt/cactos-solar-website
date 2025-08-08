import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Shield, TrendingUp, Users, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import LeadCapturePopup from "@/components/LeadCapturePopup";
import { useLeadCapture } from "@/hooks/useLeadCapture";
import heroImage from "@/assets/hero-solar-installation.jpg";
import residentialImage from "@/assets/residential-solar.jpg";
import commercialImage from "@/assets/commercial-solar.jpg";
import maintenanceImage from "@/assets/maintenance-solar.jpg";

const Index = () => {
  const { 
    isPopupOpen, 
    currentTrigger, 
    popupTitle, 
    popupDescription, 
    openPopup, 
    closePopup, 
    handleLeadSubmit 
  } = useLeadCapture();

  const handleOrcamentoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openPopup('orcamento');
  };

  const handleCalculadoraClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openPopup('calculadora');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Energia Solar que
            <span className="block text-solar-yellow">Transforma</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in">
            Reduza sua conta de luz em até 95% com nossos sistemas fotovoltaicos de alta qualidade
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button variant="cta" size="xl" onClick={handleOrcamentoClick}>
              Solicitar Orçamento Grátis
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary" onClick={handleCalculadoraClick}>
              Calcular Economia
            </Button>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Por que escolher energia solar?</h2>
            <p className="text-xl text-muted-foreground">Vantagens que fazem a diferença</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-energy transition-all duration-300 border-2 hover:border-solar-green">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-solar rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Economia Real</h3>
                <p className="text-muted-foreground">
                  Reduza sua conta de luz em até 95% e tenha retorno do investimento em poucos anos
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-energy transition-all duration-300 border-2 hover:border-solar-green">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-energy rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Qualidade Garantida</h3>
                <p className="text-muted-foreground">
                  Produtos certificados e garantia de 25 anos nos painéis solares
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-energy transition-all duration-300 border-2 hover:border-solar-green">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-sunset rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Sustentabilidade</h3>
                <p className="text-muted-foreground">
                  Contribua para um planeta mais limpo e valorize seu imóvel
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-xl text-muted-foreground">Soluções completas em energia solar</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-energy transition-all duration-300 transform hover:scale-105">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${residentialImage})` }}></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Residencial</h3>
                <p className="text-muted-foreground mb-4">
                  Sistemas fotovoltaicos para residências com instalação completa e suporte técnico
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/servicos">Saiba Mais</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-energy transition-all duration-300 transform hover:scale-105">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${commercialImage})` }}></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Empresarial</h3>
                <p className="text-muted-foreground mb-4">
                  Projetos de grande porte para indústrias e comércios com máxima eficiência
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/servicos">Saiba Mais</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-energy transition-all duration-300 transform hover:scale-105">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${maintenanceImage})` }}></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Manutenção</h3>
                <p className="text-muted-foreground mb-4">
                  Serviços especializados para garantir máximo desempenho do seu sistema
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/servicos">Saiba Mais</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Números Section */}
      <section className="py-20 bg-gradient-solar text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Resultados que Impressionam</h2>
            <p className="text-xl opacity-90">Nossa trajetória em números</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-6xl font-bold mb-2">500+</div>
              <p className="text-lg opacity-90">Projetos Instalados</p>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold mb-2">10MW</div>
              <p className="text-lg opacity-90">Energia Gerada</p>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold mb-2">95%</div>
              <p className="text-lg opacity-90">Economia Média</p>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold mb-2">100%</div>
              <p className="text-lg opacity-90">Clientes Satisfeitos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">O que nossos clientes dizem</h2>
            <p className="text-xl text-muted-foreground">Experiências reais de economia e sustentabilidade</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-solar-yellow text-solar-yellow" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Instalei o sistema há 2 anos e já economizei mais de R$ 15.000. O atendimento foi excelente e a instalação impecável!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-solar rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Maria Silva</p>
                    <p className="text-sm text-muted-foreground">Residencial - São Paulo</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-solar-yellow text-solar-yellow" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Nossa empresa reduziu 90% da conta de energia. ROI excelente e suporte técnico sempre disponível!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-energy rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">João Santos</p>
                    <p className="text-sm text-muted-foreground">Empresarial - Campinas</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/depoimentos">Ver Todos os Depoimentos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-energy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para Economizar?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Faça uma simulação gratuita e descubra quanto você pode economizar com energia solar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="sunset" size="xl" onClick={handleCalculadoraClick}>
              Calcular Minha Economia
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => openPopup('contato')}>
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>

      {/* Lead Capture Popup */}
      {currentTrigger && (
        <LeadCapturePopup
          isOpen={isPopupOpen}
          onClose={closePopup}
          onSubmit={handleLeadSubmit}
          trigger={currentTrigger}
          title={popupTitle}
          description={popupDescription}
        />
      )}
    </Layout>
  );
};

export default Index;
