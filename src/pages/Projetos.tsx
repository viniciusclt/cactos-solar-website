import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Zap, Calendar, TrendingDown } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import projetoResidencial from "@/assets/projeto-residencial-rj.jpg";
import projetoComercial from "@/assets/projeto-comercial-rj.jpg";
import instalacaoProcesso from "@/assets/instalacao-processo.jpg";

const Projetos = () => {
  const projetos = [
    {
      id: 1,
      titulo: "Sistema Residencial - Barra da Tijuca",
      tipo: "Residencial",
      potencia: "8,4 kW",
      local: "Barra da Tijuca, RJ",
      economia: "95%",
      conclusao: "2024",
      imagem: projetoResidencial,
      descricao: "Instalação completa de sistema fotovoltaico em residência de alto padrão, com 21 módulos de 400W cada.",
      detalhes: {
        concessionaria: "Light",
        economia_mensal: "R$ 850",
        payback: "4,2 anos",
        co2_evitado: "6,8 ton/ano"
      }
    },
    {
      id: 2,
      titulo: "Indústria - Zona Oeste",
      tipo: "Industrial",
      potencia: "240 kW",
      local: "Campo Grande, RJ",
      economia: "88%",
      conclusao: "2024",
      imagem: projetoComercial,
      descricao: "Grande projeto industrial com sistema rooftop, reduzindo significativamente os custos operacionais.",
      detalhes: {
        concessionaria: "Enel",
        economia_mensal: "R$ 18.500",
        payback: "3,8 anos",
        co2_evitado: "156 ton/ano"
      }
    },
    {
      id: 3,
      titulo: "Comércio - Centro do Rio",
      tipo: "Comercial",
      potencia: "45 kW",
      local: "Centro, RJ",
      economia: "92%",
      conclusao: "2024",
      imagem: instalacaoProcesso,
      descricao: "Sistema para loja comercial com excelente aproveitamento da área disponível.",
      detalhes: {
        concessionaria: "Light",
        economia_mensal: "R$ 3.200",
        payback: "4,1 anos",
        co2_evitado: "28 ton/ano"
      }
    }
  ];

  const estatisticas = [
    { numero: "300+", texto: "Projetos Instalados" },
    { numero: "15MW+", texto: "Potência Total Instalada" },
    { numero: "2.400+", texto: "Toneladas de CO₂ Evitadas" },
    { numero: "R$ 1,2M+", texto: "Economia Total Gerada" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-energy text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Nossos Projetos</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Conheça alguns dos projetos de energia solar que transformaram a vida dos nossos 
            clientes, gerando economia real e contribuindo para um futuro mais sustentável.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {estatisticas.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-solar-yellow mb-2">
                  {stat.numero}
                </div>
                <div className="text-sm md:text-base opacity-90">{stat.texto}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria de Projetos */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Projetos em Destaque</h2>
            <p className="text-xl text-muted-foreground">
              Cada projeto é único e desenvolvido especialmente para as necessidades do cliente
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projetos.map((projeto) => (
              <Card key={projeto.id} className="overflow-hidden hover:shadow-energy transition-all duration-300">
                <div className="relative">
                  <img 
                    src={projeto.imagem} 
                    alt={projeto.titulo}
                    className="w-full h-64 object-cover"
                  />
                  <Badge 
                    className="absolute top-4 left-4 bg-gradient-solar text-white border-0"
                  >
                    {projeto.tipo}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{projeto.titulo}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{projeto.descricao}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-solar-green" />
                      <span className="text-sm font-semibold">{projeto.potencia}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingDown className="w-4 h-4 text-solar-green" />
                      <span className="text-sm font-semibold">{projeto.economia}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{projeto.local}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{projeto.conclusao}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div><strong>Concessionária:</strong> {projeto.detalhes.concessionaria}</div>
                      <div><strong>Economia/mês:</strong> {projeto.detalhes.economia_mensal}</div>
                      <div><strong>Payback:</strong> {projeto.detalhes.payback}</div>
                      <div><strong>CO₂ evitado:</strong> {projeto.detalhes.co2_evitado}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de Projeto */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Soluções para Cada Necessidade</h2>
            <p className="text-xl text-muted-foreground">
              Atendemos desde residências até grandes indústrias
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-energy transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-solar rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Residencial</h3>
                <p className="text-muted-foreground mb-4">
                  Sistemas personalizados para residências, garantindo máxima economia na conta de luz.
                </p>
                <ul className="text-sm text-muted-foreground text-left space-y-1">
                  <li>• Potência: 3kW a 15kW</li>
                  <li>• Economia: até 95%</li>
                  <li>• Payback: 3-5 anos</li>
                  <li>• Homologação completa</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-energy transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-energy rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Comercial</h3>
                <p className="text-muted-foreground mb-4">
                  Soluções para empresas que buscam reduzir custos operacionais com energia limpa.
                </p>
                <ul className="text-sm text-muted-foreground text-left space-y-1">
                  <li>• Potência: 15kW a 100kW</li>
                  <li>• Economia: até 90%</li>
                  <li>• Payback: 3-4 anos</li>
                  <li>• Análise de viabilidade</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-energy transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-sunset rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zm6 0v7h3v-7h-3zM2 21h19v1H2v-1zM2 8h19v1H2V8zm0-2h19v1H2V6z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Industrial</h3>
                <p className="text-muted-foreground mb-4">
                  Grandes projetos para indústrias com alto consumo energético.
                </p>
                <ul className="text-sm text-muted-foreground text-left space-y-1">
                  <li>• Potência: 100kW+</li>
                  <li>• Economia: até 85%</li>
                  <li>• Payback: 2-4 anos</li>
                  <li>• Gestão completa</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-solar text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Seu Projeto Pode Ser o Próximo</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como a energia solar pode transformar 
            seus gastos com eletricidade em economia real.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl" asChild>
              <Link to="/calculadora">Calcular Economia</Link>
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contato">Solicitar Orçamento</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projetos;