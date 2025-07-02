import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Target, Eye, CheckCircle, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Sobre = () => {
  const certificacoes = [
    "Empresa Certificada ANEEL",
    "Instaladores Qualificados ABGD",
    "Equipamentos Homologados INMETRO",
    "ISO 9001 - Qualidade",
    "ISO 14001 - Ambiental"
  ];

  const equipe = [
    {
      nome: "Carlos Mendes",
      cargo: "Diretor Técnico",
      experiencia: "15 anos em energia solar",
      formacao: "Engenheiro Eletricista"
    },
    {
      nome: "Ana Ribeiro",
      cargo: "Gerente de Projetos",
      experiencia: "10 anos em energias renováveis",
      formacao: "Engenheira Ambiental"
    },
    {
      nome: "Roberto Costa",
      cargo: "Supervisor de Instalação",
      experiencia: "12 anos em sistemas fotovoltaicos",
      formacao: "Técnico Eletrotécnico"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-solar text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Sobre a Cactos</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Líderes em soluções de energia solar, transformando o futuro energético do Brasil
            com tecnologia de ponta e compromisso com a sustentabilidade.
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Nossa História</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  Fundada em 2015, a Cactos nasceu da visão de democratizar o acesso à energia solar no Brasil. 
                  Começamos como uma pequena empresa especializada em projetos residenciais e hoje somos 
                  referência nacional em soluções fotovoltaicas.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Nossa expertise abrange desde pequenas instalações residenciais até grandes complexos 
                  industriais, sempre priorizando qualidade, eficiência e atendimento personalizado.
                </p>
                <p className="text-lg text-muted-foreground">
                  Com mais de 500 projetos instalados e 10MW de potência total, contribuímos ativamente 
                  para a transição energética brasileira.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-solar rounded-full flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">2015</h3>
                    <p className="text-muted-foreground">Fundação da empresa</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-energy rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">2018</h3>
                    <p className="text-muted-foreground">Expansão para projetos empresariais</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-sunset rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">2024</h3>
                    <p className="text-muted-foreground">Liderança em inovação solar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-energy transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-solar rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Missão</h3>
                <p className="text-muted-foreground">
                  Democratizar o acesso à energia solar no Brasil, proporcionando economia, 
                  sustentabilidade e independência energética aos nossos clientes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-energy transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-energy rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Visão</h3>
                <p className="text-muted-foreground">
                  Ser reconhecida como a principal referência em soluções de energia solar, 
                  liderando a transformação do setor energético brasileiro.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-energy transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-sunset rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Valores</h3>
                <p className="text-muted-foreground">
                  Qualidade, transparência, inovação, sustentabilidade e compromisso 
                  com a satisfação total dos nossos clientes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certificações */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Certificações e Qualificações</h2>
            <p className="text-xl text-muted-foreground">Garantia de qualidade e conformidade técnica</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificacoes.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-solar-green" />
                  <span className="text-lg">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nossa Equipe</h2>
            <p className="text-xl text-muted-foreground">Profissionais especializados e experientes</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {equipe.map((membro, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-energy transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 bg-gradient-solar rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{membro.nome}</h3>
                  <p className="text-solar-green font-semibold mb-2">{membro.cargo}</p>
                  <p className="text-muted-foreground text-sm mb-2">{membro.formacao}</p>
                  <p className="text-muted-foreground text-sm">{membro.experiencia}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-energy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Conheça Nossos Projetos</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Veja como ajudamos nossos clientes a economizar e contribuir para um mundo mais sustentável
          </p>
          <Button variant="sunset" size="xl" asChild>
            <Link to="/depoimentos">Ver Casos de Sucesso</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;