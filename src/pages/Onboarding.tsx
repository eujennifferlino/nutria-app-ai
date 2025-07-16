
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Scale, 
  Ruler, 
  Target, 
  Activity,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

interface OnboardingData {
  name: string;
  gender: string;
  age: string;
  height: string;
  weight: string;
  activityLevel: string;
  goal: string;
}

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<OnboardingData>({
    name: "",
    gender: "",
    age: "",
    height: "",
    weight: "",
    activityLevel: "",
    goal: ""
  });
  const { toast } = useToast();
  
  const totalSteps = 6;
  const progress = (currentStep / totalSteps) * 100;

  const activityLevels = [
    {
      id: "sedentary",
      label: "Sedentário",
      description: "Não me exercito",
      icon: "😴"
    },
    {
      id: "light",
      label: "Leve",
      description: "1 à 2 vezes por semana",
      icon: "🚶"
    },
    {
      id: "moderate",
      label: "Moderado", 
      description: "3 à 5 vezes por semana",
      icon: "🏃"
    },
    {
      id: "heavy",
      label: "Intenso",
      description: "6 à 7 vezes por semana",
      icon: "💪"
    }
  ];

  const goals = [
    {
      id: "lose",
      label: "Perder Peso",
      description: "Reduzir gordura corporal",
      icon: "📉",
      color: "bg-red-100 text-red-700 border-red-200"
    },
    {
      id: "maintain",
      label: "Manter Peso",
      description: "Equilibrar alimentação",
      icon: "⚖️",
      color: "bg-blue-100 text-blue-700 border-blue-200"
    },
    {
      id: "gain",
      label: "Ganhar Peso",
      description: "Aumentar massa muscular",
      icon: "📈",
      color: "bg-green-100 text-green-700 border-green-200"
    }
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinish = () => {
    // Aqui futuramente será integrado com Supabase
    console.log("Dados do onboarding:", data);
    
    toast({
      title: "Perfil criado com sucesso! 🎉",
      description: "Redirecionando para seu dashboard personalizado...",
    });
    
    // Simulação de salvamento - futuramente será dashboard real
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 2000);
  };

  const updateData = (field: keyof OnboardingData, value: string) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1: return data.name.length > 0;
      case 2: return data.gender.length > 0;
      case 3: return data.age.length > 0;
      case 4: return data.height.length > 0;
      case 5: return data.weight.length > 0;
      case 6: return data.activityLevel.length > 0;
      default: return false;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-health rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Bem-vindo ao Nutria! 👋</h2>
              <p className="text-gray-600">Vamos começar conhecendo você melhor</p>
            </div>
            
            <div className="space-y-4">
              <Label htmlFor="name" className="text-base font-medium">Como você gostaria de ser chamado?</Label>
              <Input
                id="name"
                placeholder="Digite seu nome"
                value={data.name}
                onChange={(e) => updateData("name", e.target.value)}
                className="text-lg py-3"
                autoFocus
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Qual é o seu gênero?</h2>
              <p className="text-gray-600">Isso nos ajuda a calcular suas necessidades nutricionais</p>
            </div>
            
            <RadioGroup value={data.gender} onValueChange={(value) => updateData("gender", value)}>
              <div className="grid grid-cols-2 gap-4">
                <Label htmlFor="male" className="cursor-pointer">
                  <Card className={`hover-lift transition-all duration-300 ${data.gender === "male" ? "ring-2 ring-nutria-500 bg-nutria-50" : ""}`}>
                    <CardContent className="p-6 text-center">
                      <RadioGroupItem value="male" id="male" className="mb-4" />
                      <div className="text-4xl mb-2">👨</div>
                      <div className="font-medium">Masculino</div>
                    </CardContent>
                  </Card>
                </Label>
                
                <Label htmlFor="female" className="cursor-pointer">
                  <Card className={`hover-lift transition-all duration-300 ${data.gender === "female" ? "ring-2 ring-nutria-500 bg-nutria-50" : ""}`}>
                    <CardContent className="p-6 text-center">
                      <RadioGroupItem value="female" id="female" className="mb-4" />
                      <div className="text-4xl mb-2">👩</div>
                      <div className="font-medium">Feminino</div>
                    </CardContent>
                  </Card>
                </Label>
              </div>
            </RadioGroup>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Qual é a sua idade?</h2>
              <p className="text-gray-600">Precisamos disso para calcular seu metabolismo basal</p>
            </div>
            
            <div className="space-y-4">
              <Label htmlFor="age" className="text-base font-medium">Idade em anos</Label>
              <Input
                id="age"
                type="number"
                placeholder="Ex: 25"
                value={data.age}
                onChange={(e) => updateData("age", e.target.value)}
                className="text-lg py-3"
                min="13"
                max="100"
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-health rounded-full flex items-center justify-center mx-auto mb-4">
                <Ruler className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Qual é a sua altura?</h2>
              <p className="text-gray-600">Vamos calcular seu IMC e necessidades calóricas</p>
            </div>
            
            <div className="space-y-4">
              <Label htmlFor="height" className="text-base font-medium">Altura em centímetros</Label>
              <Input
                id="height"
                type="number"
                placeholder="Ex: 175"
                value={data.height}
                onChange={(e) => updateData("height", e.target.value)}
                className="text-lg py-3"
                min="120"
                max="250"
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-health rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Qual é o seu peso atual?</h2>
              <p className="text-gray-600">Esse será seu ponto de partida</p>
            </div>
            
            <div className="space-y-4">
              <Label htmlFor="weight" className="text-base font-medium">Peso em quilogramas</Label>
              <Input
                id="weight"
                type="number"
                placeholder="Ex: 70"
                value={data.weight}
                onChange={(e) => updateData("weight", e.target.value)}
                className="text-lg py-3"
                min="30"
                max="300"
                step="0.1"
              />
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-health rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Qual é o seu nível de atividade?</h2>
              <p className="text-gray-600">Isso influencia suas necessidades calóricas</p>
            </div>
            
            <RadioGroup value={data.activityLevel} onValueChange={(value) => updateData("activityLevel", value)}>
              <div className="space-y-4">
                {activityLevels.map((level) => (
                  <Label key={level.id} htmlFor={level.id} className="cursor-pointer">
                    <Card className={`hover-lift transition-all duration-300 ${data.activityLevel === level.id ? "ring-2 ring-nutria-500 bg-nutria-50" : ""}`}>
                      <CardContent className="p-4 flex items-center space-x-4">
                        <RadioGroupItem value={level.id} id={level.id} />
                        <div className="text-2xl">{level.icon}</div>
                        <div className="flex-1">
                          <div className="font-medium">{level.label}</div>
                          <div className="text-sm text-gray-500">{level.description}</div>
                        </div>
                      </CardContent>
                    </Card>
                  </Label>
                ))}
              </div>
            </RadioGroup>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-nutria-50 via-blue-50 to-purple-50 py-8 px-4">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 text-nutria-600 hover:text-nutria-700 transition-colors mb-6">
            <ChevronLeft className="w-4 h-4" />
            <span>Voltar</span>
          </Link>
          
          <Badge className="mb-4 bg-nutria-100 text-nutria-700">
            <Sparkles className="w-4 h-4 mr-2" />
            Configuração Inicial
          </Badge>
          
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-500">Etapa {currentStep} de {totalSteps}</span>
            <span className="text-sm text-gray-500">{Math.round(progress)}% concluído</span>
          </div>
          
          <Progress value={progress} className="h-2 mb-6" />
        </div>

        {/* Main Content */}
        <Card className="glass-card border-0 shadow-xl">
          <CardContent className="p-8">
            {renderStep()}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button 
            variant="outline" 
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="flex items-center space-x-2"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Anterior</span>
          </Button>

          {currentStep === totalSteps ? (
            <div className="space-y-4">
              {/* Goal Selection */}
              {!data.goal ? (
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-center">Qual é o seu objetivo?</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {goals.map((goal) => (
                      <Card 
                        key={goal.id}
                        className={`cursor-pointer hover-lift transition-all duration-300 ${goal.color} border-2`}
                        onClick={() => updateData("goal", goal.id)}
                      >
                        <CardContent className="p-4 flex items-center space-x-3">
                          <div className="text-2xl">{goal.icon}</div>
                          <div>
                            <div className="font-medium">{goal.label}</div>
                            <div className="text-sm opacity-75">{goal.description}</div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ) : (
                <Button 
                  onClick={handleFinish}
                  className="bg-gradient-health hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                  size="lg"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Finalizar Configuração</span>
                </Button>
              )}
            </div>
          ) : (
            <Button 
              onClick={handleNext}
              disabled={!isStepValid()}
              className="bg-gradient-health hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
            >
              <span>Próximo</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
