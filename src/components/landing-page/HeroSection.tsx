import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Target, Play, Activity } from "lucide-react";
import { HeroSectionProps } from "@/types/landing-page";

const HeroSection: React.FC<HeroSectionProps> = ({
  stats,
  isVideoOpen,
  onOpenVideo,
  onCloseVideo,
}) => {
  return (
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
          Registre suas refeições por foto ou áudio e receba análises
          nutricionais precisas em segundos. Sua jornada para uma vida mais
          saudável começa aqui.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scale-in">
          <Button
            size="lg"
            className="bg-gradient-health hover:shadow-xl transition-all duration-300"
            asChild
          >
            <Link to="/onboarding">
              <Target className="w-5 h-5 mr-2" />
              Começar Agora
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={onOpenVideo}
            className="group hover:border-nutria-300 hover:bg-nutria-50 transition-all duration-300"
          >
            <Play className="w-5 h-5 mr-2 group-hover:text-nutria-600" />
            Ver Demonstração
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

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

        {isVideoOpen && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl p-4 w-full max-w-4xl">
              <div className="flex justify-end mb-2">
                <Button variant="ghost" size="sm" onClick={onCloseVideo}>
                  Fechar
                </Button>
              </div>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Vídeo de demonstração</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
