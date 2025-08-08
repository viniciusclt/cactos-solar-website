import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import Layout from "@/components/Layout";
import LeadCapturePopup from "@/components/LeadCapturePopup";
import { useLeadCapture } from "@/hooks/useLeadCapture";
import { useToast } from "@/hooks/use-toast";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    consumo: "",
    tipo: "",
    mensagem: "",
    newsletter: false
  });
  
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  
  const { 
    isPopupOpen, 
    currentTrigger, 
    popupTitle, 
    popupDescription, 
    openPopup, 
    closePopup, 
    handleLeadSubmit 
  } = useLeadCapture();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simular envio (em produção, seria integrado com Supabase)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve para agendar sua visita técnica gratuita.",
      });
      
      // Reset form
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        consumo: "",
        tipo: "",
        mensagem: "",
        newsletter: false
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato por telefone.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const informacoesContato = [
    {
      icon: Phone,
      titulo: "Telefone",
      info: "(21) 97681-1065",
      subinfo: "WhatsApp disponível",
      link: "tel:+5521976811065"
    },
    {
      icon: Mail,
      titulo: "E-mail",
      info: "contato@energiacactos.com.br",
      subinfo: "Resposta em até 2h",
      link: "mailto:contato@energiacactos.com.br"
    },
    {
      icon: MapPin,
      titulo: "Endereço",
      info: "Rua Pinho, Anil",
      subinfo: "Rio de Janeiro - RJ",
      link: "https://maps.google.com"
    },
    {
      icon: Clock,
      titulo: "Horário",
      info: "Segunda a Sexta: 8h às 18h",
      subinfo: "Sábado: 8h às 12h",
      link: null
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-energy text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Entre em Contato</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Estamos prontos para ajudar você a dar o primeiro passo rumo à independência energética.
            Solicite sua avaliação gratuita hoje mesmo!
          </p>
        </div>
      </section>

      {/* Contato Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Informações de Contato */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-6">Fale Conosco</h2>
                <p className="text-muted-foreground mb-8">
                  Nossa equipe de especialistas está pronta para esclarecer suas dúvidas 
                  e desenvolver a solução perfeita para suas necessidades energéticas.
                </p>
              </div>

              {informacoesContato.map((item, index) => (
                <Card key={index} className="p-4 hover:shadow-energy transition-all duration-300">
                  <CardContent className="pt-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-solar rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{item.titulo}</h3>
                        {item.link ? (
                          <a 
                            href={item.link} 
                            className="text-solar-green hover:text-solar-green-dark transition-colors"
                          >
                            {item.info}
                          </a>
                        ) : (
                          <p className="text-solar-green">{item.info}</p>
                        )}
                        <p className="text-sm text-muted-foreground">{item.subinfo}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* WhatsApp CTA */}
              <Card className="p-6 bg-gradient-sunset text-white">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <MessageCircle className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Atendimento WhatsApp</h3>
                    <p className="mb-4 opacity-90">
                      Tire suas dúvidas rapidamente pelo WhatsApp
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full border-white text-white hover:bg-white hover:text-solar-orange"
                      onClick={() => openPopup('contato', '💬 Vamos conversar no WhatsApp!', 'Para um atendimento mais rápido, informe seus dados:')}
                    >
                      Chamar no WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Formulário */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Solicite Seu Orçamento Gratuito</CardTitle>
                  <p className="text-muted-foreground">
                    Preencha o formulário abaixo e receba uma proposta personalizada em até 24 horas
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="nome">Nome Completo *</Label>
                        <Input
                          id="nome"
                          type="text"
                          placeholder="Seu nome completo"
                          value={formData.nome}
                          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">E-mail *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="seu@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="telefone">Telefone/WhatsApp *</Label>
                        <Input
                          id="telefone"
                          type="tel"
                          placeholder="(11) 99999-9999"
                          value={formData.telefone}
                          onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="consumo">Consumo Médio Mensal (kWh)</Label>
                        <Input
                          id="consumo"
                          type="number"
                          placeholder="Ex: 350"
                          value={formData.consumo}
                          onChange={(e) => setFormData({ ...formData, consumo: e.target.value })}
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="tipo">Tipo de Instalação</Label>
                      <Select value={formData.tipo} onValueChange={(value) => setFormData({ ...formData, tipo: value })}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Selecione o tipo de instalação" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="residencial">Residencial</SelectItem>
                          <SelectItem value="comercial">Comercial</SelectItem>
                          <SelectItem value="industrial">Industrial</SelectItem>
                          <SelectItem value="rural">Rural</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="mensagem">Mensagem (Opcional)</Label>
                      <Textarea
                        id="mensagem"
                        placeholder="Conte-nos mais sobre seu projeto ou tire suas dúvidas..."
                        value={formData.mensagem}
                        onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                        className="mt-2 min-h-[100px]"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => setFormData({ ...formData, newsletter: checked as boolean })}
                      />
                      <Label htmlFor="newsletter" className="text-sm">
                        Desejo receber novidades e dicas sobre energia solar por e-mail
                      </Label>
                    </div>

                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        variant="cta" 
                        size="lg" 
                        className="w-full" 
                        disabled={loading}
                      >
                        {loading ? "Enviando..." : "Solicitar Orçamento Gratuito"}
                        <Send className="w-5 h-5 ml-2" />
                      </Button>
                      <p className="text-xs text-muted-foreground mt-2 text-center">
                        * Ao enviar este formulário, você concorda com nossa política de privacidade
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Rápido */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-muted-foreground">Tire suas principais dúvidas antes de entrar em contato</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardContent className="pt-6">
                <h3 className="font-bold mb-3">A visita técnica é realmente gratuita?</h3>
                <p className="text-muted-foreground">
                  Sim! Nossa avaliação técnica é 100% gratuita e sem compromisso. 
                  Visitamos sua propriedade para dimensionar o sistema ideal.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <h3 className="font-bold mb-3">Quanto tempo demora a instalação?</h3>
                <p className="text-muted-foreground">
                  Para residências, a instalação é feita em 1 dia. Para projetos comerciais, 
                  varia de 3 a 15 dias dependendo da complexidade.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <h3 className="font-bold mb-3">Vocês fazem financiamento?</h3>
                <p className="text-muted-foreground">
                  Sim! Temos parcerias com bancos para financiamento em até 120x. 
                  Também aceitamos cartão de crédito e oferecemos condições especiais.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <h3 className="font-bold mb-3">O sistema funciona em dias nublados?</h3>
                <p className="text-muted-foreground">
                  Sim! Mesmo em dias nublados o sistema gera energia, com eficiência 
                  reduzida. Nossa análise considera todas as condições climáticas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mapa (Placeholder) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossa Localização</h2>
            <p className="text-muted-foreground">Visite nosso showroom e conheça as soluções de perto</p>
          </div>
          
          <Card className="max-w-4xl mx-auto overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-solar-green to-solar-yellow flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Cactos - Soluções em Energia</h3>
                <p className="text-lg">Rua Pinho, Anil</p>
                <p>Rio de Janeiro - RJ</p>
                <Button variant="outline" className="mt-4 border-white text-white hover:bg-white hover:text-solar-green">
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    Ver no Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </Card>
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

export default Contato;