import React, { useState } from 'react';
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, Search, TrendingUp, Zap, Shield, Lightbulb, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import LeadCapturePopup from "@/components/LeadCapturePopup";
import { useLeadCapture } from "@/hooks/useLeadCapture";
import { getPublishedPosts, getRecentPosts } from "@/data/blogPosts";

// Get blog posts from data file
const blogPosts = getPublishedPosts().map(post => ({
  ...post,
  date: post.publishedAt,
  readTime: "5 min", // Default read time
  category: post.tags[0] || "Geral",
  featured: post.id === '3', // Featured post
  image: post.featuredImage || "/placeholder.svg"
}));

const categories = ["Todos", "ANEEL", "Normas", "Mitos", "Regulamentação", "Educação", "Investimento", "Tecnologia"];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  
  const { 
    isPopupOpen, 
    currentTrigger, 
    popupTitle, 
    popupDescription, 
    openPopup, 
    closePopup, 
    handleLeadSubmit 
  } = useLeadCapture();

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const handleNewsletterSignup = () => {
    openPopup(
      'blog',
      '📧 Receba conteúdo exclusivo sobre energia solar',
      'Cadastre-se para receber dicas, novidades e ofertas especiais:'
    );
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-solar text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Blog Cactos
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Seu guia completo sobre energia solar, sustentabilidade e economia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Buscar artigos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white text-gray-900"
                />
              </div>
              <Button variant="sunset" onClick={handleNewsletterSignup}>
                Newsletter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "Todos" && !searchTerm && (
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Artigo em Destaque</h2>
              <Card className="overflow-hidden hover:shadow-energy transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="h-64 lg:h-auto bg-cover bg-center" style={{ backgroundImage: `url(${featuredPost.image})` }}>
                    <div className="w-full h-full bg-gradient-to-r from-black/50 to-transparent lg:hidden"></div>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge variant="secondary">{featuredPost.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString('pt-BR')}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                    <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{featuredPost.author}</span>
                      </div>
                      <Button variant="outline" asChild>
                        <Link to={`/blog/${featuredPost.id}`}>
                          Ler Artigo
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Posts */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {regularPosts.map((post) => (
                    <Card key={post.id} className="overflow-hidden hover:shadow-energy transition-all duration-300 transform hover:scale-105">
                      <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }}></div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="outline" className="text-xs">{post.category}</Badge>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Clock className="w-3 h-3 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                        <h3 className="text-lg font-bold mb-3 line-clamp-2">{post.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3 mr-1" />
                            {new Date(post.date).toLocaleDateString('pt-BR')}
                          </div>
                          <Button variant="ghost" size="sm" asChild>
                            <Link to={`/blog/${post.id}`}>
                              Ler mais
                              <ArrowRight className="w-3 h-3 ml-1" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {filteredPosts.length === 0 && (
                  <div className="text-center py-12">
                    <FileText className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Nenhum artigo encontrado</h3>
                    <p className="text-muted-foreground">Tente ajustar sua busca ou categoria.</p>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Newsletter Signup */}
                <Card className="bg-gradient-energy text-white">
                  <CardContent className="p-6 text-center">
                    <Zap className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-3">Newsletter Cactos</h3>
                    <p className="text-sm opacity-90 mb-4">
                      Receba dicas exclusivas sobre energia solar, novidades do setor e ofertas especiais.
                    </p>
                    <Button variant="sunset" className="w-full" onClick={handleNewsletterSignup}>
                      Assinar Newsletter
                    </Button>
                  </CardContent>
                </Card>

                {/* Popular Posts */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Artigos Populares
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <div key={post.id} className="flex gap-3">
                        <div className="w-16 h-16 bg-cover bg-center rounded flex-shrink-0" style={{ backgroundImage: `url(${post.image})` }}></div>
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold line-clamp-2 mb-1">
                            <Link to={`/blog/${post.id}`} className="hover:text-solar-green transition-colors">
                              {post.title}
                            </Link>
                          </h4>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3 mr-1" />
                            {new Date(post.date).toLocaleDateString('pt-BR')}
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* CTA Card */}
                <Card className="bg-gradient-solar text-white">
                  <CardContent className="p-6 text-center">
                    <Shield className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-3">Pronto para Economizar?</h3>
                    <p className="text-sm opacity-90 mb-4">
                      Faça uma simulação gratuita e descubra quanto você pode economizar com energia solar.
                    </p>
                    <Button variant="sunset" className="w-full" onClick={() => openPopup('calculadora')}>
                      Calcular Economia
                    </Button>
                  </CardContent>
                </Card>

                {/* Ad Space Placeholder */}
                <Card className="border-dashed border-2 border-muted-foreground/30">
                  <CardContent className="p-6 text-center">
                    <div className="text-muted-foreground">
                      <Lightbulb className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm">Espaço para Anúncios</p>
                      <p className="text-xs mt-1">Google AdSense ou Parceiros</p>
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

export default Blog;

