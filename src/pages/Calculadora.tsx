import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Zap, TrendingUp, Sun, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Calculadora = () => {
  const [consumo, setConsumo] = useState("");
  const [concessionaria, setConcessionaria] = useState("");
  const [tipoConexao, setTipoConexao] = useState("trifasica");
  const [resultado, setResultado] = useState<any>(null);

  const concessionarias = [
    { value: "light", label: "Light", tarifa: 0.89 },
    { value: "enel-rj", label: "Enel Rio de Janeiro", tarifa: 0.85 }
  ];

  const tiposConexao = [
    { value: "monofasica", label: "Monofásica", cdd: 30 },
    { value: "bifasica", label: "Bifásica", cdd: 50 },
    { value: "trifasica", label: "Trifásica", cdd: 100 }
  ];

  // Tabela Greener de preços por kWp (jan/25)
  const tabelaGreener = [
    { potencia: 2, preco: 3.64 * 1000 },
    { potencia: 4, preco: 2.88 * 1000 },
    { potencia: 8, preco: 2.42 * 1000 },
    { potencia: 12, preco: 2.27 * 1000 },
    { potencia: 30, preco: 2.16 * 1000 },
    { potencia: 50, preco: 2.19 * 1000 },
    { potencia: 75, preco: 2.51 * 1000 },
    { potencia: 150, preco: 2.32 * 1000 },
    { potencia: 300, preco: 2.23 * 1000 },
    { potencia: 500, preco: 2.18 * 1000 },
    { potencia: 1000, preco: 2.18 * 1000 },
    { potencia: 3000, preco: 2.17 * 1000 },
    { potencia: 5000, preco: 2.16 * 1000 }
  ];

  const obterPrecoKwp = (potencia: number) => {
    // Encontra o preço mais próximo na tabela Greener
    let precoBase = tabelaGreener[0].preco;
    for (let i = 0; i < tabelaGreener.length; i++) {
      if (potencia <= tabelaGreener[i].potencia) {
        precoBase = tabelaGreener[i].preco;
        break;
      }
      if (i === tabelaGreener.length - 1) {
        precoBase = tabelaGreener[i].preco;
      }
    }
    
    // Aplicar margem de ±10%
    const margemVariacao = 0.1;
    const precoComMargem = precoBase * (1 + (Math.random() * margemVariacao * 2 - margemVariacao));
    return precoComMargem;
  };

  const calcularEconomia = () => {
    if (!consumo || !concessionaria || !tipoConexao) return;

    const consumoKwh = parseFloat(consumo);
    const concessionariaData = concessionarias.find(c => c.value === concessionaria);
    const conexaoData = tiposConexao.find(c => c.value === tipoConexao);
    
    if (!concessionariaData || !conexaoData) return;

    // Conta atual usando a fórmula: CDD * 1,10 + (consumo médio * 0,9)
    const contaAtual = (conexaoData.cdd * concessionariaData.tarifa * 1.10) + (consumoKwh * concessionariaData.tarifa * 0.9);
    
    // Potência necessária baseada na geração solar média do RJ (4.5 kWh/kWp/dia)
    const geracaoSolarMedia = 4.5 * 30; // kWh/mês por kWp instalado
    const potenciaNecessaria = Math.max(consumoKwh / geracaoSolarMedia, 1);
    
    // Preço baseado na tabela Greener
    const precoPorKwp = obterPrecoKwp(potenciaNecessaria);
    const investimentoTotal = potenciaNecessaria * precoPorKwp;
    
    // Valor residual da conta = CDD*1,10+(consumo médio*0,9)
    const valorResidual = (conexaoData.cdd * concessionariaData.tarifa * 1.10) + (consumoKwh * concessionariaData.tarifa * 0.9 * 0.1);
    const economiaAnual = (contaAtual - valorResidual) * 12;
    const payback = investimentoTotal / economiaAnual;
    const economia25Anos = economiaAnual * 25 - investimentoTotal;

    setResultado({
      contaAtual,
      potencia: potenciaNecessaria.toFixed(2),
      investimento: investimentoTotal,
      economiaAnual,
      economiaMatual: (contaAtual - valorResidual),
      payback: payback.toFixed(1),
      economia25Anos,
      valorResidual,
      reducaoPercentual: Math.round(((contaAtual - valorResidual) / contaAtual) * 100)
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-solar text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calculator className="w-10 h-10" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Calculadora Solar</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Descubra quanto você pode economizar com energia solar.
            Simulação gratuita e sem compromisso.
          </p>
        </div>
      </section>

      {/* Calculadora */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Formulário */}
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center">
                    <Zap className="w-8 h-8 text-solar-green mr-3" />
                    Dados para Simulação
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="consumo" className="text-lg font-semibold">
                      Consumo Médio Mensal (kWh)
                    </Label>
                    <Input
                      id="consumo"
                      type="number"
                      placeholder="Ex: 350"
                      value={consumo}
                      onChange={(e) => setConsumo(e.target.value)}
                      className="mt-2 h-12 text-lg"
                    />
                    <p className="text-sm text-muted-foreground mt-2">
                      Você encontra essa informação na sua conta de luz
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="concessionaria" className="text-lg font-semibold">
                      Concessionária de Energia
                    </Label>
                    <Select value={concessionaria} onValueChange={setConcessionaria}>
                      <SelectTrigger className="mt-2 h-12 text-lg">
                        <SelectValue placeholder="Selecione sua concessionária" />
                      </SelectTrigger>
                      <SelectContent>
                        {concessionarias.map((conc) => (
                          <SelectItem key={conc.value} value={conc.value}>
                            {conc.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="tipoConexao" className="text-lg font-semibold">
                      Tipo de Conexão
                    </Label>
                    <Select value={tipoConexao} onValueChange={setTipoConexao}>
                      <SelectTrigger className="mt-2 h-12 text-lg">
                        <SelectValue placeholder="Selecione o tipo de conexão" />
                      </SelectTrigger>
                      <SelectContent>
                        {tiposConexao.map((tipo) => (
                          <SelectItem key={tipo.value} value={tipo.value}>
                            {tipo.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    onClick={calcularEconomia} 
                    variant="cta" 
                    size="lg" 
                    className="w-full mt-8"
                    disabled={!consumo || !concessionaria}
                  >
                    <Calculator className="w-5 h-5 mr-2" />
                    Calcular Economia
                  </Button>
                </CardContent>
              </Card>

              {/* Resultados */}
              {resultado ? (
                <Card className="p-8 bg-gradient-to-br from-solar-green/10 to-solar-yellow/10 border-solar-green">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold flex items-center">
                      <TrendingUp className="w-8 h-8 text-solar-green mr-3" />
                      Seus Resultados
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border">
                        <p className="text-sm text-muted-foreground">Conta Atual</p>
                        <p className="text-2xl font-bold text-destructive">
                          R$ {resultado.contaAtual.toFixed(2)}
                        </p>
                        <p className="text-xs text-muted-foreground">por mês</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border">
                        <p className="text-sm text-muted-foreground">Nova Conta</p>
                        <p className="text-2xl font-bold text-solar-green">
                          R$ {resultado.valorResidual.toFixed(2)}
                        </p>
                        <p className="text-xs text-muted-foreground">por mês</p>
                      </div>
                    </div>

                    <div className="bg-solar-green text-white p-6 rounded-lg text-center">
                      <p className="text-lg mb-2">Economia Mensal</p>
                      <p className="text-4xl font-bold">
                        R$ {resultado.economiaMatual.toFixed(2)}
                      </p>
                      <p className="text-sm opacity-90">
                        {resultado.reducaoPercentual}% de redução
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="font-semibold">Potência Necessária:</span>
                        <span>{resultado.potencia} kWp</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="font-semibold">Investimento Total:</span>
                        <span className="font-bold">R$ {resultado.investimento.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="font-semibold">Retorno do Investimento:</span>
                        <span className="text-solar-green font-bold">{resultado.payback} anos</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="font-semibold">Economia em 25 anos:</span>
                        <span className="text-solar-green font-bold">
                          R$ {resultado.economia25Anos.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button variant="sunset" size="lg" className="w-full" asChild>
                        <Link to="/contato">
                          Solicitar Orçamento Detalhado
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="p-8 flex items-center justify-center">
                  <div className="text-center">
                    <Sun className="w-16 h-16 text-solar-green mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Simule sua Economia</h3>
                    <p className="text-muted-foreground">
                      Preencha os dados ao lado para ver quanto você pode economizar com energia solar
                    </p>
                  </div>
                </Card>
              )}
            </div>

            {/* Informações Adicionais */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-gradient-solar rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold mb-2">Cálculo Preciso</h3>
                  <p className="text-sm text-muted-foreground">
                    Nossos cálculos são baseados em dados reais de irradiação solar e tarifas atualizadas
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-gradient-energy rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold mb-2">ROI Garantido</h3>
                  <p className="text-sm text-muted-foreground">
                    Retorno médio do investimento em 4-6 anos com economia garantida por 25 anos
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-gradient-sunset rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sun className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold mb-2">Simulação Gratuita</h3>
                  <p className="text-sm text-muted-foreground">
                    Orçamento detalhado sem compromisso, incluindo visita técnica gratuita
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Calculadora;