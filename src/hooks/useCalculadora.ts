import { useState } from "react";

export interface CalculadoraResult {
  contaAtual: number;
  potencia: string;
  investimento: number;
  investimentoMin: number;
  investimentoMax: number;
  economiaAnual: number;
  economiaMatual: number;
  payback: string;
  economia25Anos: number;
  valorResidual: number;
  reducaoPercentual: number;
  parcelaFinanciamento: number;
}

export const useCalculadora = () => {
  const [consumo, setConsumo] = useState("");
  const [concessionaria, setConcessionaria] = useState("");
  const [tipoConexao, setTipoConexao] = useState("trifasica");
  const [resultado, setResultado] = useState<CalculadoraResult | null>(null);

  const concessionarias = [
    { value: "light", label: "Light", tarifa: 1.20 },
    { value: "enel-rj", label: "Enel-RJ", tarifa: 1.20 }
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
    const eficienciaSystem = 0.8; // 80% de eficiência do sistema
    const potenciaNecessaria = Math.max((consumoKwh / geracaoSolarMedia) / eficienciaSystem, 1);
    
    // Preço baseado na tabela Greener
    const precoPorKwp = obterPrecoKwp(potenciaNecessaria);
    const investimentoTotal = potenciaNecessaria * precoPorKwp;
    const investimentoMin = investimentoTotal * 0.9;
    const investimentoMax = investimentoTotal * 1.1;
    
    // Valor residual da conta = CDD*1,10+(consumo médio*0,9)
    const valorResidual = (conexaoData.cdd * concessionariaData.tarifa * 1.10) + (consumoKwh * concessionariaData.tarifa * 0.9 * 0.1);
    const economiaAnual = (contaAtual - valorResidual) * 12;
    
    // Cálculo do payback considerando inflação de 15% a.a. na conta de energia
    const taxaInflacao = 0.15;
    let valorPresente = 0;
    let payback = 0;
    for (let ano = 1; ano <= 25; ano++) {
      const economiaAno = economiaAnual * Math.pow(1 + taxaInflacao, ano - 1);
      valorPresente += economiaAno;
      if (valorPresente >= investimentoTotal && payback === 0) {
        payback = ano;
      }
    }
    
    const economia25Anos = valorPresente - investimentoTotal;

    // Cálculo do financiamento em 60x com taxa de 1,80% a.m.
    const taxaFinanciamento = 0.018; // 1,80% ao mês
    const numeroParcelas = 60;
    const parcelaFinanciamento = investimentoTotal * (taxaFinanciamento * Math.pow(1 + taxaFinanciamento, numeroParcelas)) / (Math.pow(1 + taxaFinanciamento, numeroParcelas) - 1);

    setResultado({
      contaAtual,
      potencia: potenciaNecessaria.toFixed(2),
      investimento: investimentoTotal,
      investimentoMin,
      investimentoMax,
      economiaAnual,
      economiaMatual: (contaAtual - valorResidual),
      payback: payback.toString(),
      economia25Anos,
      valorResidual,
      reducaoPercentual: Math.round(((contaAtual - valorResidual) / contaAtual) * 100),
      parcelaFinanciamento
    });
  };

  return {
    consumo,
    setConsumo,
    concessionaria,
    setConcessionaria,
    tipoConexao,
    setTipoConexao,
    resultado,
    concessionarias,
    tiposConexao,
    calcularEconomia
  };
};