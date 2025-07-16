
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Camera, 
  Mic, 
  BarChart3, 
  Target, 
  Smartphone,
  Zap,
  Users,
  Star,
  ArrowRight,
  Play,
  CheckCircle2,
  Utensils,
  Activity
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const features = [
    {
      icon: Camera,
      title: "Reconhecimento por Imagem",
      description: "Tire uma foto da sua refeição e nossa IA identifica automaticamente os alimentos e calcula os macros."
    },
    {
      icon: Mic,
      title: "Registro por Áudio",
      description: "Descreva sua refeição por voz e deixe a IA processar todas as informações nutricionais."
    },
    {
      icon: Brain,
      title: "IA Personalizada",
      description: "Algoritmos inteligentes que aprendem seus hábitos e sugerem melhorias personalizadas."
    },
    {
      icon: BarChart3,
      title: "Análises Detalhadas",
      description: "Gráficos completos do seu progresso com insights sobre tendências e padrões."
    },
    {
      icon: Target,
      title: "Metas Inteligentes",
      description: "Objetivos personalizados baseados em seu perfil, atividade física e metas de saúde."
    },
    {
      icon: Zap,
      title: "Tempo Real",
      description: "Atualizações instantâneas e sincronização em todos os seus dispositivos."
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Nutricionista",
      content: "O Nutria revolucionou a forma como acompanho meus pacientes. A precisão da IA é impressionante!",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Atleta",
      content: "Finalmente um app que entende minhas necessidades. O registro por foto economiza muito tempo.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Professora",
      content: "Interface intuitiva e resultados reais. Perdi 8kg em 3 meses com as recomendações da IA.",
      rating: 5
    }
  ];

  const stats = [
    { number: "50K+", label: "Usuários Ativos" },
    { number: "2M+", label: "Refeições Analisadas" },
    { number: "95%", label: "Precisão da IA" },
    { number: "4.9", label: "Avaliação Média" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-nutria-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-white/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-health rounded-lg flex items-center justify-center">
              <Utensils className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">Nutria</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-nutria-600 transition-colors">
              Recursos
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-nutria-600 transition-colors">
              Depoimentos
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-nutria-600 transition-colors">
              Preços
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/login">Entrar</Link>
            </Button>
            <Button className="bg-gradient-health hover:shadow-lg transition-all duration-300" asChild>
              <Link to="/onboarding">
                Começar Grátis
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-nutria-100 text-nutria-700 hover:bg-nutria-200">
            🚀 Nova versão com IA avançada disponível
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Controle sua alimentação com{" "}
            <span className="gradient-text">Inteligência Artificial</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
            Registre suas refeições por foto ou áudio e receba análises nutricionais 
            precisas em segundos. Sua jornada para uma vida mais saudável começa aqui.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scale-in">
            <Button size="lg" className="bg-gradient-health hover:shadow-xl transition-all duration-300" asChild>
              <Link to="/onboarding">
                <Target className="w-5 h-5 mr-2" />
                Começar Agora
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => setIsVideoOpen(true)}
              className="group hover:border-nutria-300 hover:bg-nutria-50 transition-all duration-300"
            >
              <Play className="w-5 h-5 mr-2 group-hover:text-nutria-600" />
              Ver Demonstração
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Hero Image/Video */}
          <div className="relative max-w-4xl mx-auto animate-scale-in">
            <div className="glass-card rounded-2xl p-8 hover-lift">
              <div className="aspect-video bg-gradient-to-r from-nutria-100 to-blue-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Activity className="w-16 h-16 text-nutria-600 mx-auto mb-4" />
                  <p className="text-gray-600 text-lg">
                    Interface intuitiva do Nutria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Recursos Revolucionários
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tecnologia de ponta para transformar a forma como você se relaciona com a alimentação
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover-lift glass-card border-0 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-health rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-nutria-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Como Funciona
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Três passos simples para revolucionar sua alimentação
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Registre",
                description: "Tire uma foto ou grave um áudio da sua refeição",
                icon: Camera
              },
              {
                step: "2", 
                title: "Analise",
                description: "Nossa IA processa e calcula todos os macros automaticamente",
                icon: Brain
              },
              {
                step: "3",
                title: "Acompanhe",
                description: "Visualize seu progresso e receba insights personalizados",
                icon: BarChart3
              }
            ].map((item, index) => (
              <div key={index} className="text-center group animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-health rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-nutria-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              O que nossos usuários dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Histórias reais de pessoas que transformaram sua relação com a alimentação
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-card border-0 hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-gray-800">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Card className="glass-card border-0 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Pronto para transformar sua alimentação?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Junte-se a milhares de pessoas que já descobriram o poder da IA 
                para uma vida mais saudável e equilibrada.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-health hover:shadow-xl transition-all duration-300" asChild>
                  <Link to="/onboarding">
                    <Zap className="w-5 h-5 mr-2" />
                    Começar Gratuitamente
                  </Link>
                </Button>
                
                <Button size="lg" variant="outline" className="hover:border-nutria-300 hover:bg-nutria-50 transition-all duration-300">
                  <Users className="w-5 h-5 mr-2" />
                  Falar com Especialista
                </Button>
              </div>

              <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-nutria-500" />
                  Teste gratuito por 14 dias
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-nutria-500" />
                  Cancele quando quiser
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-nutria-500" />
                  Suporte 24/7
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-health rounded-lg flex items-center justify-center">
                  <Utensils className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold">Nutria</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Revolucionando a forma como você se relaciona com a alimentação através da inteligência artificial.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Produto</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Recursos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrações</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre nós</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentação</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2024 Nutria. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
