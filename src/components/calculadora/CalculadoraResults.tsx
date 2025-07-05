import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Sun, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CalculadoraResult } from "@/hooks/useCalculadora";

interface CalculadoraResultsProps {
  resultado: CalculadoraResult | null;
}

const CalculadoraResults = ({ resultado }: CalculadoraResultsProps) => {
  if (!resultado) {
    return (
      <Card className="p-8 flex items-center justify-center">
        <div className="text-center">
          <Sun className="w-16 h-16 text-solar-green mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Simule sua Economia</h3>
          <p className="text-muted-foreground">
            Preencha os dados ao lado para ver quanto você pode economizar com energia solar
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-8 bg-gradient-to-br from-solar-green/10 to-solar-yellow/10 border-solar-green">
      <CardHeader>
        <CardTitle className="text-2xl font-bold flex items-center">
          <TrendingUp className="w-8 h-8 text-solar-green mr-3" />
          Seus Resultados
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Primeira linha: Conta Atual e Economia lado a lado */}        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-muted/50 p-6 rounded-lg border">
            <p className="text-sm text-muted-foreground">Conta Atual</p>
            <p className="text-3xl font-bold text-destructive">
              R$ {resultado.contaAtual.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
            <p className="text-xs text-muted-foreground">por mês</p>
          </div>
          
          <div className="bg-solar-green text-white p-6 rounded-lg">
            <p className="text-sm mb-1 opacity-90">Economia Mensal</p>
            <p className="text-3xl font-bold">
              R$ {resultado.economiaMatual.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
            <p className="text-xs opacity-90">{resultado.reducaoPercentual}% de redução</p>
          </div>
        </div>

        {/* Segunda linha: Nova Conta */}
        <div className="bg-white p-8 rounded-lg border-2 border-solar-green text-center">
          <p className="text-lg text-muted-foreground mb-2">Sua Nova Conta</p>
          <p className="text-5xl font-bold text-solar-green mb-2">
            R$ {resultado.valorResidual.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
          <p className="text-lg text-muted-foreground">por mês</p>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center py-2 border-b">
            <span className="font-semibold">Potência Necessária:</span>
            <span>{resultado.potencia} kWp</span>
          </div>
          <div className="py-2 border-b">
            <p className="font-semibold mb-1">Investimento Total:</p>
            <p className="font-bold">
              R$ {resultado.investimentoMin.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} - R$ {resultado.investimentoMax.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          </div>
          <div className="flex justify-between items-center py-2 border-b">
            <span className="font-semibold">Financiamento 60x:</span>
            <span className="text-solar-green font-bold">
              R$ {resultado.parcelaFinanciamento.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
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
  );
};

export default CalculadoraResults;