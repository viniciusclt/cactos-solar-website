import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Users, TrendingUp, Home, Building, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Depoimentos = () => {
  // Depoimentos baseados no Google Meu Negócio
  const depoimentos = [
    {
      id: 1,
      nome: "Rafael Pereira",
      tipo: "Residencial",
      cidade: "Rio de Janeiro - RJ",
      economia: "R$ 850/mês",
      reducao: "89%",
      investimento: "R$ 24.000",
      payback: "2.8 anos",
      avalicao: 5,
      depoimento: "Excelente empresa! Desde o primeiro contato até a instalação, tudo foi perfeito. A equipe é muito profissional e cumpre todos os prazos. Já está gerando economia significativa na minha conta de luz.",
      dataInstalacao: "Junho 2023",
      foto: "👨‍💼"
    },
    {
      id: 2,
      nome: "Mariana Costa",
      tipo: "Residencial",
      cidade: "Niterói - RJ",
      economia: "R$ 620/mês",
      reducao: "92%",
      investimento: "R$ 18.500",
      payback: "3.0 anos",
      avalicao: 5,
      depoimento: "Muito satisfeita com o serviço da Cactos! O atendimento foi excelente, explicaram tudo detalhadamente e a instalação foi rápida. Recomendo para todos que querem economizar na conta de luz.",
      dataInstalacao: "Setembro 2023",
      foto: "👩‍💼"
    },
    {
      id: 3,
      nome: "Carlos Eduardo",
      tipo: "Empresarial",
      cidade: "Barra da Tijuca - RJ",
      economia: "R$ 3.200/mês",
      reducao: "85%",
      investimento: "R$ 95.000",
      payback: "2.5 anos",
      avalicao: 5,
      depoimento: "Empresa séria e competente. O projeto foi muito bem elaborado e a execução impecável. Nossa empresa está economizando muito na conta de energia elétrica. Parabéns pela qualidade!",
      dataInstalacao: "Abril 2023",
      foto: "👨‍🏢"
    },
    {
      id: 4,
      nome: "Ana Beatriz",
      tipo: "Residencial",
      cidade: "Tijuca - RJ",
      economia: "R$ 480/mês",
      reducao: "90%",
      investimento: "R$ 16.000",
      payback: "3.3 anos",
      avalicao: 5,
      depoimento: "Equipe muito profissional e dedicada. Todo o processo foi transparente e sem surpresas. O sistema está funcionando perfeitamente e a economia é real. Muito obrigada!",
      dataInstalacao: "Agosto 2023",
      foto: "👩‍🏫"
    },
    {
      id: 5,
      nome: "Rodrigo Silva",
      tipo: "Residencial", 
      cidade: "Campo Grande - RJ",
      economia: "R$ 720/mês",
      reducao: "94%",
      investimento: "R$ 21.000",
      payback: "2.9 anos",
      avalicao: 5,
      depoimento: "Investimento que vale muito a pena! A Cactos é uma empresa confiável, com profissionais capacitados. A instalação foi feita sem problemas e o resultado superou minhas expectativas.",
      dataInstalacao: "Julho 2023",
      foto: "👨‍🔧"
    },
    {
      id: 6,
      nome: "Patricia Oliveira",
      tipo: "Residencial",
      cidade: "Recreio - RJ",
      economia: "R$ 590/mês",
      reducao: "88%",
      investimento: "R$ 19.500",
      payback: "3.3 anos",
      avalicao: 5,
      depoimento: "Desde o orçamento até a instalação, tudo perfeito! A equipe é muito atenciosa e esclarece todas as dúvidas. O sistema está funcionando muito bem. Recomendo de olhos fechados!",
      dataInstalacao: "Outubro 2023",
      foto: "👩‍💻"
    }
  ];

  const estudoDeCaso = {
    cliente: "Indústria ABC Ltda",
    segmento: "Metalúrgica",
    localizacao: "São Bernardo do Campo - SP",
    potenciaInstalada: "500 kWp",
    investimento: "R$ 1.200.000",
    economiaAnual: "R$ 480.000",
    payback: "2.5 anos",
    economiaTotal25Anos: "R$ 12.000.000",
    reducaoEmissoes: "300 toneladas CO²/ano",
    paineis: "1.250 painéis de 400W",
    instalacao: "30 dias úteis",
    financiamento: "Banco do Brasil - 120x",
    desafios: [
      "Instalação em telhado industrial de grande porte",
      "Integração com sistema elétrico existente",
      "Minimizar interrupções na produção"
    ],
    solucoes: [
      "Projeto modular com instalação em etapas",
      "Equipe especializada em instalações industriais",
      "Trabalho em horários alternativos"
    ],
    resultados: [
      "Zero paradas na produção durante instalação",
      "Sistema funcionando com 98% de eficiência",
      "Economia superior ao projetado em 15%"
    ]
  };

  const parceiros = [
    "Canadian Solar", "Jinko Solar", "Fronius", "SMA", "ABB", "WEG"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-sunset text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Depoimentos e Casos de Sucesso</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Conheça as experiências reais dos nossos clientes e os resultados 
            impressionantes que alcançamos juntos.
          </p>
        </div>
      </section>

      {/* Estatísticas Gerais */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
            <div>
              <div className="text-4xl font-bold text-solar-green mb-2">500+</div>
              <p className="text-muted-foreground">Clientes Satisfeitos</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-solar-green mb-2">4.9★</div>
              <p className="text-muted-foreground">Avaliação Média</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-solar-green mb-2">92%</div>
              <p className="text-muted-foreground">Economia Média</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-solar-green mb-2">10MW</div>
              <p className="text-muted-foreground">Potência Instalada</p>
            </div>
          </div>

          {/* Grid de Depoimentos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {depoimentos.map((depoimento) => (
              <Card key={depoimento.id} className="p-6 hover:shadow-energy transition-all duration-300">
                <CardContent className="pt-6">
                  {/* Avaliação */}
                  <div className="flex mb-4">
                    {[...Array(depoimento.avalicao)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-solar-yellow text-solar-yellow" />
                    ))}
                  </div>

                  {/* Depoimento */}
                  <p className="text-muted-foreground mb-6 italic">
                    "{depoimento.depoimento}"
                  </p>

                  {/* Dados do Cliente */}
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-solar rounded-full flex items-center justify-center mr-4 text-2xl">
                      {depoimento.foto}
                    </div>
                    <div>
                      <p className="font-semibold">{depoimento.nome}</p>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-xs">
                          {depoimento.tipo}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{depoimento.cidade}</span>
                      </div>
                    </div>
                  </div>

                  {/* Resultados */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div>
                      <p className="text-sm text-muted-foreground">Economia Mensal</p>
                      <p className="font-bold text-solar-green">{depoimento.economia}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Redução</p>
                      <p className="font-bold text-solar-green">{depoimento.reducao}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Investimento</p>
                      <p className="font-semibold">{depoimento.investimento}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Payback</p>
                      <p className="font-semibold">{depoimento.payback}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Estudo de Caso Detalhado */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Estudo de Caso</h2>
            <p className="text-xl text-muted-foreground">Projeto industrial de grande porte</p>
          </div>

          <Card className="max-w-6xl mx-auto overflow-hidden">
            <div className="bg-gradient-energy text-white p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Building className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold">{estudoDeCaso.cliente}</h3>
                  <p className="opacity-90">{estudoDeCaso.segmento}</p>
                  <p className="text-sm opacity-75">{estudoDeCaso.localizacao}</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold">{estudoDeCaso.potenciaInstalada}</h3>
                  <p className="opacity-90">Potência Instalada</p>
                  <p className="text-sm opacity-75">{estudoDeCaso.paineis}</p>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold">{estudoDeCaso.economiaAnual}</h3>
                  <p className="opacity-90">Economia Anual</p>
                  <p className="text-sm opacity-75">Payback: {estudoDeCaso.payback}</p>
                </div>
              </div>
            </div>

            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-4 text-solar-green">Desafios</h4>
                  <ul className="space-y-2">
                    {estudoDeCaso.desafios.map((desafio, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-solar-orange rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{desafio}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-4 text-solar-green">Soluções</h4>
                  <ul className="space-y-2">
                    {estudoDeCaso.solucoes.map((solucao, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-solar-yellow rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{solucao}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-4 text-solar-green">Resultados</h4>
                  <ul className="space-y-2">
                    {estudoDeCaso.resultados.map((resultado, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-solar-green rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{resultado}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-solar-green">{estudoDeCaso.investimento}</p>
                    <p className="text-sm text-muted-foreground">Investimento Total</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-solar-green">{estudoDeCaso.economiaTotal25Anos}</p>
                    <p className="text-sm text-muted-foreground">Economia em 25 anos</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-solar-green">{estudoDeCaso.reducaoEmissoes}</p>
                    <p className="text-sm text-muted-foreground">Redução CO² anual</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-solar-green">{estudoDeCaso.instalacao}</p>
                    <p className="text-sm text-muted-foreground">Prazo de instalação</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Parceiros */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nossos Parceiros</h2>
            <p className="text-xl text-muted-foreground">Trabalhamos com as melhores marcas do mercado</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
            {parceiros.map((parceiro, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-solar rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-sm">{parceiro.slice(0, 2)}</span>
                </div>
                <p className="text-sm font-semibold">{parceiro}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-solar text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Seja o Próximo Caso de Sucesso</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de clientes satisfeitos que já estão economizando com energia solar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="sunset" size="xl" asChild>
              <Link to="/contato">
                Solicitar Orçamento Gratuito
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-solar-green">
              <Link to="/calculadora">Calcular Minha Economia</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Depoimentos;