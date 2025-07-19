import { HowItWorksSectionProps } from "@/types/landing-page";

const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ steps }) => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como <span className="gradient-text">Funciona</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Três passos simples para transformar sua alimentação com a ajuda da
            nossa IA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-nutria-200 via-blue-200 to-nutria-200 transform -translate-y-1/2 z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 rounded-xl text-center hover-lift transition-all duration-300 z-10"
              >
                <div className="w-16 h-16 bg-gradient-health rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="w-8 h-8 bg-nutria-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
