import { useState, useCallback } from 'react';
import { LeadData } from '@/components/LeadCapturePopup';

export type TriggerType = 'orcamento' | 'calculadora' | 'contato' | 'blog';

interface UseLeadCaptureReturn {
  isPopupOpen: boolean;
  currentTrigger: TriggerType | null;
  popupTitle?: string;
  popupDescription?: string;
  openPopup: (trigger: TriggerType, title?: string, description?: string) => void;
  closePopup: () => void;
  handleLeadSubmit: (data: LeadData) => void;
}

export const useLeadCapture = (): UseLeadCaptureReturn => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentTrigger, setCurrentTrigger] = useState<TriggerType | null>(null);
  const [popupTitle, setPopupTitle] = useState<string | undefined>();
  const [popupDescription, setPopupDescription] = useState<string | undefined>();

  const openPopup = useCallback((trigger: TriggerType, title?: string, description?: string) => {
    setCurrentTrigger(trigger);
    setPopupTitle(title);
    setPopupDescription(description);
    setIsPopupOpen(true);
  }, []);

  const closePopup = useCallback(() => {
    setIsPopupOpen(false);
    setCurrentTrigger(null);
    setPopupTitle(undefined);
    setPopupDescription(undefined);
  }, []);

  const handleLeadSubmit = useCallback((data: LeadData) => {
    // Aqui você pode adicionar lógica adicional após o envio do lead
    console.log('Lead capturado:', data);
    
    // Redirecionar baseado no trigger
    switch (data.trigger) {
      case 'orcamento':
        // Redirecionar para WhatsApp com mensagem personalizada
        const orcamentoMessage = `Olá! Vim pelo site e gostaria de solicitar um orçamento. Meus dados: ${data.name}, ${data.email}, ${data.phone}`;
        window.open(`https://wa.me/5521976811065?text=${encodeURIComponent(orcamentoMessage)}`, '_blank');
        break;
      case 'calculadora':
        // Redirecionar para a calculadora
        window.location.href = '/calculadora';
        break;
      case 'contato':
        // Redirecionar para WhatsApp
        const contatoMessage = `Olá! Vim pelo site e gostaria de falar com um especialista. Meus dados: ${data.name}, ${data.email}, ${data.phone}`;
        window.open(`https://wa.me/5521976811065?text=${encodeURIComponent(contatoMessage)}`, '_blank');
        break;
      case 'blog':
        // Redirecionar para página de agradecimento ou blog
        window.location.href = '/blog';
        break;
    }
  }, []);

  return {
    isPopupOpen,
    currentTrigger,
    popupTitle,
    popupDescription,
    openPopup,
    closePopup,
    handleLeadSubmit
  };
};

