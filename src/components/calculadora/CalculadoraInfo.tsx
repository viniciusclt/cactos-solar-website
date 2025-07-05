import { Card, CardContent } from "@/components/ui/card";
import { Zap, TrendingUp, Sun } from "lucide-react";

const CalculadoraInfo = () => {
  return (
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
  );
};

export default CalculadoraInfo;