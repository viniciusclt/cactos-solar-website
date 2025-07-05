import Layout from "@/components/Layout";
import CalculadoraHero from "@/components/calculadora/CalculadoraHero";
import CalculadoraForm from "@/components/calculadora/CalculadoraForm";
import CalculadoraResults from "@/components/calculadora/CalculadoraResults";
import CalculadoraInfo from "@/components/calculadora/CalculadoraInfo";
import { useCalculadora } from "@/hooks/useCalculadora";

const Calculadora = () => {
  const {
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
  } = useCalculadora();

  return (
    <Layout>
      <CalculadoraHero />

      {/* Calculadora */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <CalculadoraForm
                consumo={consumo}
                setConsumo={setConsumo}
                concessionaria={concessionaria}
                setConcessionaria={setConcessionaria}
                tipoConexao={tipoConexao}
                setTipoConexao={setTipoConexao}
                concessionarias={concessionarias}
                tiposConexao={tiposConexao}
                onCalcular={calcularEconomia}
              />

              <CalculadoraResults resultado={resultado} />
            </div>

            <CalculadoraInfo />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Calculadora;