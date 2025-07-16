
import { Camera, Mic, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageWrapper from "@/components/PageWrapper";

const AddMeal = () => {
  const mealOptions = [
    {
      icon: Camera,
      title: "Foto da Refeição",
      description: "Tire uma foto do seu prato e deixe a IA identificar os alimentos",
      buttonText: "Tirar Foto",
      gradient: "from-green-500 to-blue-500",
      action: () => console.log("Tirar foto")
    },
    {
      icon: Mic,
      title: "Descrição por Áudio",
      description: "Descreva sua refeição falando e a IA irá processar as informações",
      buttonText: "Gravar Áudio",
      gradient: "from-purple-500 to-pink-500",
      action: () => console.log("Gravar áudio")
    },
    {
      icon: Plus,
      title: "Entrada Manual",
      description: "Digite manualmente os alimentos e quantidades da sua refeição",
      buttonText: "Adicionar Manual",
      gradient: "from-orange-500 to-red-500",
      action: () => console.log("Entrada manual")
    }
  ];

  return (
    <PageWrapper 
      title="Adicionar Refeição" 
      subtitle="Escolha como você quer registrar sua refeição"
      showBackButton={true}
    >
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {mealOptions.map((option, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Card className="glass-card border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer h-full dark:bg-gray-800/50">
              <CardHeader className="text-center">
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-r ${option.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <option.icon className="w-8 h-8 text-white" />
                </motion.div>
                <CardTitle className="font-poppins">{option.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 dark:text-gray-400 mb-4 font-inter">
                  {option.description}
                </p>
                <Button 
                  className={`w-full bg-gradient-to-r ${option.gradient} hover:opacity-90 font-inter`}
                  onClick={option.action}
                >
                  {option.buttonText}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default AddMeal;
