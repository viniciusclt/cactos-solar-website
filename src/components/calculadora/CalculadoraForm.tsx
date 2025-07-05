import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Zap } from "lucide-react";

interface CalculadoraFormProps {
  consumo: string;
  setConsumo: (value: string) => void;
  concessionaria: string;
  setConcessionaria: (value: string) => void;
  tipoConexao: string;
  setTipoConexao: (value: string) => void;
  concessionarias: Array<{ value: string; label: string; tarifa: number }>;
  tiposConexao: Array<{ value: string; label: string; cdd: number }>;
  onCalcular: () => void;
}

const CalculadoraForm = ({
  consumo,
  setConsumo,
  concessionaria,
  setConcessionaria,
  tipoConexao,
  setTipoConexao,
  concessionarias,
  tiposConexao,
  onCalcular
}: CalculadoraFormProps) => {
  return (
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
          onClick={onCalcular} 
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
  );
};

export default CalculadoraForm;