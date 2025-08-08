import Layout from "@/components/Layout";
import CalculadoraHero from "@/components/calculadora/CalculadoraHero";
import CalculadoraForm from "@/components/calculadora/CalculadoraForm";
import CalculadoraResults from "@/components/calculadora/CalculadoraResults";
import CalculadoraInfo from "@/components/calculadora/CalculadoraInfo";
import LeadCapturePopup from "@/components/LeadCapturePopup";
import { useCalculadora } from "@/hooks/useCalculadora";
import { useLeadCapture } from "@/hooks/useLeadCapture";
import { useEffect } from "react";

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

  const { 
    isPopupOpen, 
    currentTrigger, 
    popupTitle, 
    popupDescription, 
    openPopup, 
    closePopup, 
    handleLeadSubmit 
  } = useLeadCapture();

  // Mostrar popup após cálculo ser realizado
  useEffect(() => {
    if (resultado && resultado.economiaAnual > 0) {
      const timer = setTimeout(() => {
        openPopup(
          'orcamento', 
          '🎯 Ótima economia! Vamos tornar isso realidade?',
          `Com uma economia de R$ ${resultado.economiaAnual.toLocaleString('pt-BR')}/ano, que tal solicitar um orçamento personalizado?`
        );
      }, 2000); // Aguarda 2 segundos após mostrar o resultado

      return () => clearTimeout(timer);
    }
  }, [resultado, openPopup]);

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

export default Calculadora;