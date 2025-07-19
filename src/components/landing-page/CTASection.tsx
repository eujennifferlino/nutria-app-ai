import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="pricing" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="glass-card bg-gradient-to-r from-nutria-50 to-blue-50 p-12 rounded-2xl text-center max-w-4xl mx-auto hover-lift">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comece sua jornada <span className="gradient-text">hoje mesmo</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que já transformaram sua alimentação
            com o Nutria. Experimente gratuitamente por 14 dias.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-health hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link to="/onboarding">
                Começar Grátis
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="hover:border-nutria-300 hover:bg-nutria-50 transition-all duration-300"
              asChild
            >
              <Link to="/pricing">Ver Planos</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
