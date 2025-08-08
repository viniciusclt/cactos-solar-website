import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, Gift, Zap, Calculator } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LeadCapturePopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: LeadData) => void;
  trigger: 'orcamento' | 'calculadora' | 'contato' | 'blog';
  title?: string;
  description?: string;
}

export interface LeadData {
  name: string;
  email: string;
  phone: string;
  trigger: string;
}

const LeadCapturePopup: React.FC<LeadCapturePopupProps> = ({
  isOpen,
  onClose,
  onSubmit,
  trigger,
  title,
  description
}) => {
  const [formData, setFormData] = useState<LeadData>({
    name: '',
    email: '',
    phone: '',
    trigger: trigger
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const getPopupContent = () => {
    switch (trigger) {
      case 'orcamento':
        return {
          title: title || "🎯 Quase lá! Vamos calcular sua economia",
          description: description || "Para enviar seu orçamento personalizado, precisamos de alguns dados:",
          icon: <Gift className="w-8 h-8 text-solar-yellow" />,
          benefit: "✅ Orçamento gratuito em até 24h\n✅ Análise personalizada do seu consumo\n✅ Simulação de economia detalhada"
        };
      case 'calculadora':
        return {
          title: title || "⚡ Descubra sua economia real!",
          description: description || "Para calcular sua economia exata, informe seus dados:",
          icon: <Calculator className="w-8 h-8 text-solar-green" />,
          benefit: "✅ Cálculo preciso de economia\n✅ Tempo de retorno do investimento\n✅ Simulação personalizada"
        };
      case 'contato':
        return {
          title: title || "🚀 Vamos conversar sobre sua economia!",
          description: description || "Um especialista entrará em contato em breve:",
          icon: <Zap className="w-8 h-8 text-solar-blue" />,
          benefit: "✅ Consultoria gratuita\n✅ Atendimento especializado\n✅ Resposta em até 2h"
        };
      case 'blog':
        return {
          title: title || "📚 Conteúdo exclusivo sobre energia solar",
          description: description || "Receba dicas e novidades sobre energia solar:",
          icon: <Gift className="w-8 h-8 text-solar-yellow" />,
          benefit: "✅ E-book gratuito sobre energia solar\n✅ Dicas semanais de economia\n✅ Novidades do setor"
        };
      default:
        return {
          title: "Entre em contato conosco",
          description: "Preencha seus dados:",
          icon: <Zap className="w-8 h-8 text-solar-green" />,
          benefit: "✅ Atendimento personalizado"
        };
    }
  };

  const content = getPopupContent();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    // Validação básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um email válido.",
        variant: "destructive",
      });
      return;
    }

    // Validação básica de telefone (apenas números, parênteses, espaços e hífen)
    const phoneRegex = /^[\d\s\(\)\-\+]+$/;
    if (!phoneRegex.test(formData.phone)) {
      toast({
        title: "Telefone inválido",
        description: "Por favor, insira um telefone válido.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simular envio dos dados (aqui você integraria com sua API)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Salvar no localStorage para tracking
      const leads = JSON.parse(localStorage.getItem('cactos_leads') || '[]');
      const newLead = {
        ...formData,
        timestamp: new Date().toISOString(),
        id: Date.now().toString()
      };
      leads.push(newLead);
      localStorage.setItem('cactos_leads', JSON.stringify(leads));
      
      onSubmit(formData);
      
      toast({
        title: "Dados enviados com sucesso! 🎉",
        description: "Em breve entraremos em contato com você.",
      });
      
      onClose();
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof LeadData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Formatar telefone automaticamente
  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    return value;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    handleInputChange('phone', formatted);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md mx-4 rounded-lg">
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-4">
            {content.icon}
          </div>
          <DialogTitle className="text-xl font-bold text-center">
            {content.title}
          </DialogTitle>
          <p className="text-muted-foreground text-center">
            {content.description}
          </p>
        </DialogHeader>
        
        <div className="bg-muted/30 p-4 rounded-lg mb-4">
          <div className="text-sm whitespace-pre-line text-center">
            {content.benefit}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Nome completo *</Label>
            <Input
              id="name"
              type="text"
              placeholder="Seu nome completo"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="phone">WhatsApp *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(21) 99999-9999"
              value={formData.phone}
              onChange={handlePhoneChange}
              required
              className="mt-1"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              variant="cta"
              className="flex-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Continuar"}
            </Button>
          </div>
        </form>

        <div className="text-xs text-muted-foreground text-center mt-4">
          🔒 Seus dados estão seguros conosco. Não enviamos spam.
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LeadCapturePopup;

