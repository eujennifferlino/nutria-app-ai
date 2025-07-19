import { FeaturesSectionProps } from "@/types/landing-page";

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features }) => {
  return (
    <section id="features" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Recursos <span className="gradient-text">Poderosos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tecnologia avançada de IA para tornar o acompanhamento nutricional
            simples e eficiente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover-lift transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-health rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
