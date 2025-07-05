import { Calculator } from "lucide-react";

const CalculadoraHero = () => {
  return (
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
  );
};

export default CalculadoraHero;