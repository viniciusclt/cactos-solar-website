import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowLeft, Share2, TrendingUp, Zap, Shield, Lightbulb } from "lucide-react";
import LeadCapturePopup from "@/components/LeadCapturePopup";
import { useLeadCapture } from "@/hooks/useLeadCapture";

// Dados simulados dos posts (em uma aplicação real, viria de uma API)
const blogPosts = [
  {
    id: 1,
    title: "Como Calcular o Retorno do Investimento em Energia Solar",
    excerpt: "Descubra como calcular o ROI da energia solar e entenda por que é um dos melhores investimentos para sua casa ou empresa.",
    content: `
# Como Calcular o Retorno do Investimento em Energia Solar

A energia solar tem se tornado uma das formas mais inteligentes de investimento para residências e empresas no Brasil. Com a crescente preocupação com os custos de energia elétrica e a sustentabilidade, cada vez mais pessoas buscam entender como calcular o retorno do investimento (ROI) em sistemas fotovoltaicos.

## O que é ROI em Energia Solar?

O ROI (Return on Investment) em energia solar é o tempo necessário para que a economia gerada pelo sistema fotovoltaico iguale o valor investido na instalação. Este cálculo é fundamental para entender a viabilidade financeira do projeto.

## Como Calcular o ROI

### 1. Custo Total do Sistema

O primeiro passo é calcular o investimento total, que inclui:
- Equipamentos (painéis, inversores, estruturas)
- Instalação e mão de obra
- Projeto e documentação
- Homologação na concessionária

### 2. Economia Mensal

Para calcular a economia mensal, você precisa:
- Analisar o histórico de consumo dos últimos 12 meses
- Calcular a média mensal de consumo
- Multiplicar pelo valor da tarifa de energia
- Considerar a taxa mínima da concessionária

### 3. Fórmula do Payback

**Payback = Investimento Total ÷ Economia Anual**

## Exemplo Prático

Vamos considerar uma residência no Rio de Janeiro:

- **Consumo médio mensal:** 500 kWh
- **Tarifa da Light:** R$ 0,85/kWh
- **Gasto mensal:** R$ 425,00
- **Gasto anual:** R$ 5.100,00
- **Investimento no sistema:** R$ 25.000,00
- **Economia anual:** R$ 4.590,00 (90% de redução)

**Payback = R$ 25.000 ÷ R$ 4.590 = 5,4 anos**

## Fatores que Influenciam o ROI

### Positivos:
- Aumento das tarifas de energia
- Incentivos fiscais
- Financiamento com juros baixos
- Qualidade dos equipamentos

### Negativos:
- Sombreamento excessivo
- Orientação inadequada do telhado
- Manutenção inadequada

## Benefícios Além do ROI

Além do retorno financeiro, a energia solar oferece:
- **Valorização do imóvel:** Até 10% de valorização
- **Sustentabilidade:** Redução da pegada de carbono
- **Independência energética:** Menor dependência da concessionária
- **Proteção contra inflação:** Energia com preço fixo por 25 anos

## Conclusão

O investimento em energia solar no Rio de Janeiro apresenta um ROI atrativo, com payback médio entre 4 a 6 anos e vida útil do sistema de 25 anos. Isso significa que você terá cerca de 20 anos de energia praticamente gratuita.

Para um cálculo preciso do seu ROI, é fundamental contar com uma empresa especializada que possa analisar suas condições específicas e dimensionar o sistema ideal.

---

**Quer calcular o ROI do seu projeto?** Nossa calculadora online pode te ajudar a descobrir quanto você pode economizar com energia solar.
    `,
    author: "Equipe Cactos",
    date: "2024-01-15",
    readTime: "5 min",
    category: "Investimento",
    tags: ["ROI", "Economia", "Investimento"],
    featured: true,
    image: "/placeholder.svg"
  },
  // Outros posts...
];

const relatedPosts = [
  {
    id: 2,
    title: "Energia Solar no Rio de Janeiro: Guia Completo 2024",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Mitos e Verdades sobre Energia Solar",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Financiamento de Energia Solar: Opções e Dicas",
    image: "/placeholder.svg"
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id || '1'));
  
  const { 
    isPopupOpen, 
    currentTrigger, 
    popupTitle, 
    popupDescription, 
    openPopup, 
    closePopup, 
    handleLeadSubmit 
  } = useLeadCapture();

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Post não encontrado</h1>
          <Button asChild>
            <Link to="/blog">Voltar ao Blog</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback para copiar URL
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" asChild className="mb-6">
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao Blog
              </Link>
            </Button>
            
            <div className="flex items-center gap-4 mb-6">
              <Badge variant="secondary">{post.category}</Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date(post.date).toLocaleDateString('pt-BR')}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <User className="w-4 h-4 mr-1" />
                {post.author}
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <p className="text-xl text-muted-foreground mb-8">{post.excerpt}</p>
            
            <div className="flex items-center gap-4">
              <Button variant="outline" onClick={handleShare}>
                <Share2 className="w-4 h-4 mr-2" />
                Compartilhar
              </Button>
              <Button onClick={() => openPopup('orcamento', '💡 Gostou do artigo?', 'Que tal descobrir quanto você pode economizar com energia solar?')}>
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Article Content */}
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none">
                  {/* Featured Image */}
                  <div className="w-full h-64 md:h-96 bg-cover bg-center rounded-lg mb-8" style={{ backgroundImage: `url(${post.image})` }}></div>
                  
                  {/* Content */}
                  <div className="whitespace-pre-line leading-relaxed">
                    {post.content}
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-8 pt-8 border-t">
                  <h3 className="text-lg font-semibold mb-4">Tags:</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                </div>

                {/* CTA Section */}
                <Card className="mt-8 bg-gradient-energy text-white">
                  <CardContent className="p-8 text-center">
                    <Zap className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Pronto para Começar?</h3>
                    <p className="text-lg opacity-90 mb-6">
                      Descubra quanto você pode economizar com energia solar
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button variant="sunset" size="lg" onClick={() => openPopup('calculadora')}>
                        Calcular Economia
                      </Button>
                      <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => openPopup('orcamento')}>
                        Solicitar Orçamento
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Author Info */}
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-solar rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">{post.author}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Especialistas em energia solar com mais de 5 anos de experiência no mercado.
                    </p>
                    <Button variant="outline" size="sm" onClick={() => openPopup('contato')}>
                      Falar com Especialista
                    </Button>
                  </CardContent>
                </Card>

                {/* Related Posts */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Artigos Relacionados
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <div key={relatedPost.id} className="flex gap-3">
                        <div className="w-16 h-16 bg-cover bg-center rounded flex-shrink-0" style={{ backgroundImage: `url(${relatedPost.image})` }}></div>
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold line-clamp-2">
                            <Link to={`/blog/${relatedPost.id}`} className="hover:text-solar-green transition-colors">
                              {relatedPost.title}
                            </Link>
                          </h4>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Newsletter */}
                <Card className="bg-gradient-solar text-white">
                  <CardContent className="p-6 text-center">
                    <Shield className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-3">Newsletter Cactos</h3>
                    <p className="text-sm opacity-90 mb-4">
                      Receba artigos como este diretamente no seu email.
                    </p>
                    <Button variant="sunset" className="w-full" onClick={() => openPopup('blog')}>
                      Assinar Newsletter
                    </Button>
                  </CardContent>
                </Card>

                {/* Ad Space */}
                <Card className="border-dashed border-2 border-muted-foreground/30">
                  <CardContent className="p-6 text-center">
                    <div className="text-muted-foreground">
                      <Lightbulb className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm">Espaço para Anúncios</p>
                      <p className="text-xs mt-1">Google AdSense</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
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

export default BlogPost;

