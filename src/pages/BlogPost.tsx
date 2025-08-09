import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowLeft, Share2, TrendingUp, Zap, Shield, Lightbulb } from "lucide-react";
import LeadCapturePopup from "@/components/LeadCapturePopup";
import { useLeadCapture } from "@/hooks/useLeadCapture";
import { getPostBySlug, getRecentPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  const relatedPosts = getRecentPosts(3).filter(p => p.slug !== slug);
  
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
              <Badge variant="secondary">{post.tags[0] || 'Geral'}</Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date(post.publishedAt).toLocaleDateString('pt-BR')}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="w-4 h-4 mr-1" />
                5 min
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
                  {post.featuredImage && (
                    <div className="w-full h-64 md:h-96 bg-cover bg-center rounded-lg mb-8" style={{ backgroundImage: `url(${post.featuredImage})` }}></div>
                  )}
                  
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
                        <div className="w-16 h-16 bg-cover bg-center rounded flex-shrink-0" style={{ backgroundImage: `url(${relatedPost.featuredImage || '/placeholder.svg'})` }}></div>
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold line-clamp-2">
                            <Link to={`/blog/${relatedPost.slug}`} className="hover:text-solar-green transition-colors">
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

