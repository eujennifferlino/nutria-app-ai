import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Utensils, ArrowRight } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-white/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-health rounded-lg flex items-center justify-center">
            <Utensils className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-bold gradient-text">Nutria</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-gray-600 hover:text-nutria-600 transition-colors"
          >
            Recursos
          </a>
          <a
            href="#testimonials"
            className="text-gray-600 hover:text-nutria-600 transition-colors"
          >
            Depoimentos
          </a>
          <a
            href="#pricing"
            className="text-gray-600 hover:text-nutria-600 transition-colors"
          >
            Preços
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link to="/login">Entrar</Link>
          </Button>
          <Button
            className="bg-gradient-health hover:shadow-lg transition-all duration-300"
            asChild
          >
            <Link to="/onboarding">
              Começar Grátis
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
