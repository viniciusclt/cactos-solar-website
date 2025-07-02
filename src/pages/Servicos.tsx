import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Building, Wrench, CheckCircle, ArrowRight, Users, Calculator, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import residentialImage from "@/assets/residential-solar.jpg";
import commercialImage from "@/assets/commercial-solar.jpg";
import maintenanceImage from "@/assets/maintenance-solar.jpg";

const Servicos = () => {
  const servicosDetalhados = [
    {
      id: "residencial",
      title: "Energia Solar Residencial",
      subtitle: "Solução completa para sua casa",
      image: residentialImage,
      icon: Home,
      features: [
        "Projeto personalizado para seu consumo",
        "Equipamentos de alta qualidade",
        "Instalação completa em 1 dia",
        "Garantia de 25 anos nos painéis",
        "Monitoramento via app",
        "Suporte técnico vitalício"
      ],
      processo: [
        "Análise da conta de luz",
        "Visita técnica gratuita",
        "Projeto personalizado",
        "Instalação profissional",
        "Conexão à rede elétrica",
        "Monitoramento contínuo"
      ],
      economia: "Até 95% de redução na conta de luz",
      prazo: "Instalação em 1 dia útil",
      garantia: "25 anos nos equipamentos"
    },
    {
      id: "empresarial",
      title: "Energia Solar Empresarial",
      subtitle: "Reduza custos operacionais da sua empresa",
      image: commercialImage,
      icon: Building,
      features: [
        "Projetos de grande porte",
        "Análise de viabilidade econômica",
        "Financiamento especializado",
        "Gestão completa do projeto",
        "Certificação ambiental",
        "Relatórios de performance"
      ],
      processo: [
        "Estudo de viabilidade",
        "Projeto executivo",
        "Licenciamento ambiental",
        "Instalação em fases",
        "Comissionamento",
        "Operação assistida"
      ],
      economia: "ROI em 3-5 anos",
      prazo: "Instalação em 15-30 dias",
      garantia: "Garantia estendida disponível"
    },
    {
      id: "manutencao",
      title: "Manutenção e Suporte",
      subtitle: "Máximo desempenho do seu sistema",
      image: maintenanceImage,
      icon: Wrench,
      features: [
        "Limpeza profissional dos painéis",
        "Inspeção técnica preventiva",
        "Monitoramento de performance",
        "Troca de equipamentos",
        "Atualizações de sistema",
        "Suporte técnico 24/7"
      ],
      processo: [
        "Agendamento de visita",
        "Inspeção completa",
        "Limpeza especializada",
        "Testes de performance",
        "Relatório técnico",
        "Recomendações de melhorias"
      ],
      economia: "Manutenção da eficiência máxima",
      prazo: "Atendimento em 24h",
      garantia: "Garantia em todos os serviços"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-energy text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Nossos Serviços</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Soluções completas em energia solar para residências, empresas e manutenção.
            Qualidade garantida e atendimento especializado.
          </p>
        </div>
      </section>

      {/* Serviços Detalhados */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {servicosDetalhados.map((servico, index) => (
            <div key={servico.id} className={`mb-20 ${index !== servicosDetalhados.length - 1 ? 'pb-20 border-b' : ''}`}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Imagem */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div 
                    className="h-96 rounded-lg bg-cover bg-center shadow-energy"
                    style={{ backgroundImage: `url(${servico.image})` }}
                  />
                </div>

                {/* Conteúdo */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-solar rounded-lg flex items-center justify-center mr-4">
                      <servico.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">{servico.title}</h2>
                      <p className="text-muted-foreground">{servico.subtitle}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <Badge variant="outline" className="p-2 justify-center">
                      {servico.economia}
                    </Badge>
                    <Badge variant="outline" className="p-2 justify-center">
                      {servico.prazo}
                    </Badge>
                    <Badge variant="outline" className="p-2 justify-center">
                      {servico.garantia}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold mb-3">O que está incluído:</h4>
                      <ul className="space-y-2">
                        {servico.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-solar-green mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Processo de instalação:</h4>
                      <ol className="space-y-2">
                        {servico.processo.map((etapa, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <span className="w-6 h-6 bg-solar-green text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                              {idx + 1}
                            </span>
                            <span className="text-sm">{etapa}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="cta" asChild>
                      <Link to="/contato">
                        Solicitar Orçamento
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/calculadora">
                        <Calculator className="w-4 h-4 mr-2" />
                        Calcular Economia
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Processo Geral */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Como Funciona</h2>
            <p className="text-xl text-muted-foreground">Processo simples e transparente do início ao fim</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-energy transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-solar rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold mb-2">1. Contato</h3>
                <p className="text-sm text-muted-foreground">
                  Entre em contato conosco por telefone, WhatsApp ou formulário online
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-energy transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-energy rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold mb-2">2. Análise</h3>
                <p className="text-sm text-muted-foreground">
                  Analisamos seu consumo e fazemos visita técnica gratuita para dimensionamento
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-energy transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-sunset rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold mb-2">3. Projeto</h3>
                <p className="text-sm text-muted-foreground">
                  Desenvolvemos projeto personalizado com orçamento detalhado e transparente
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-energy transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-solar rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold mb-2">4. Instalação</h3>
                <p className="text-sm text-muted-foreground">
                  Instalação profissional e conexão à rede elétrica com acompanhamento total
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Por que escolher a Cactos?</h2>
            <p className="text-xl text-muted-foreground">Diferenciais que garantem sua satisfação</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-energy transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-solar-green mr-2" />
                  Qualidade Certificada
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Equipamentos homologados pelo INMETRO e instaladores certificados pela ABGD
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-energy transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-solar-green mr-2" />
                  Atendimento Personalizado
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Projeto desenvolvido especificamente para suas necessidades e consumo
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-energy transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-solar-green mr-2" />
                  Suporte Vitalício
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Acompanhamento contínuo do desempenho e suporte técnico sempre disponível
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-energy transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-solar-green mr-2" />
                  Garantia Estendida
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  25 anos de garantia nos painéis e 10 anos nos inversores
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-energy transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-solar-green mr-2" />
                  Financiamento Facilitado
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Parcerias com bancos para financiamento em até 120x sem juros
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-energy transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-solar-green mr-2" />
                  Monitoramento Inteligente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Acompanhe a produção de energia em tempo real pelo smartphone
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-solar text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para começar?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Solicite uma avaliação gratuita e descubra como podemos ajudar você a economizar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="sunset" size="xl" asChild>
              <Link to="/contato">
                Solicitar Visita Técnica Gratuita
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-solar-green">
              <Link to="/calculadora">Fazer Simulação Online</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Servicos;