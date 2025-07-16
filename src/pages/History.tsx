
import { Calendar, Clock, Utensils, Filter } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import PageWrapper from "@/components/PageWrapper";

const History = () => {
  // Dados simulados do histórico
  const mealHistory = [
    {
      date: "2024-07-16",
      meals: [
        { name: "Café da Manhã", time: "08:30", calories: 420, items: ["Aveia", "Banana", "Café"] },
        { name: "Almoço", time: "12:45", calories: 680, items: ["Frango grelhado", "Arroz", "Salada"] },
        { name: "Lanche", time: "15:20", calories: 250, items: ["Iogurte", "Granola"] },
        { name: "Jantar", time: "19:00", calories: 520, items: ["Salmão", "Batata doce", "Brócolis"] }
      ],
      totalCalories: 1870
    },
    {
      date: "2024-07-15",
      meals: [
        { name: "Café da Manhã", time: "07:45", calories: 380, items: ["Pão integral", "Ovos", "Café"] },
        { name: "Almoço", time: "13:00", calories: 720, items: ["Carne bovina", "Arroz", "Feijão"] },
        { name: "Lanche", time: "16:30", calories: 180, items: ["Frutas", "Castanhas"] },
        { name: "Jantar", time: "20:15", calories: 450, items: ["Peixe", "Quinoa", "Legumes"] }
      ],
      totalCalories: 1730
    }
  ];

  return (
    <PageWrapper 
      title="Histórico de Refeições" 
      subtitle="Acompanhe seu progresso nutricional ao longo do tempo"
      showBackButton={true}
    >
      {/* Filters Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <Card className="glass-card border-0 shadow-lg dark:bg-gray-800/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 font-poppins">
              <Filter className="w-5 h-5 text-nutria-600" />
              <span>Filtros</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block font-inter">Buscar por nome</label>
                <Input 
                  placeholder="Buscar refeição..." 
                  className="font-inter"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block font-inter">Data</label>
                <Input 
                  type="date" 
                  className="font-inter"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block font-inter">Tipo de refeição</label>
                <Select>
                  <SelectTrigger className="font-inter">
                    <SelectValue placeholder="Todos os tipos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os tipos</SelectItem>
                    <SelectItem value="breakfast">Café da Manhã</SelectItem>
                    <SelectItem value="lunch">Almoço</SelectItem>
                    <SelectItem value="dinner">Jantar</SelectItem>
                    <SelectItem value="snack">Lanche</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Meals History */}
      <div className="space-y-6">
        {mealHistory.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <Utensils className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 font-poppins">Nenhuma refeição encontrada</h3>
            <p className="text-gray-500 dark:text-gray-400 font-inter">
              Comece adicionando sua primeira refeição
            </p>
          </motion.div>
        ) : (
          mealHistory.map((day, dayIndex) => (
            <motion.div
              key={dayIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: dayIndex * 0.1 }}
            >
              <Card className="glass-card border-0 shadow-lg dark:bg-gray-800/50">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between font-poppins">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-nutria-600" />
                      <span>{new Date(day.date).toLocaleDateString('pt-BR', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <Badge className="bg-nutria-100 text-nutria-700 dark:bg-nutria-800 dark:text-nutria-200 font-inter">
                      {day.totalCalories} cal total
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {day.meals.map((meal, mealIndex) => (
                      <motion.div 
                        key={mealIndex} 
                        className="p-4 rounded-lg bg-white/50 dark:bg-gray-700/30 hover:bg-white/70 dark:hover:bg-gray-700/50 transition-colors"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center space-x-2 mb-3">
                          <Utensils className="w-4 h-4 text-nutria-600" />
                          <span className="font-medium font-inter">{meal.name}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-2 font-inter">
                          <Clock className="w-3 h-3" />
                          <span>{meal.time}</span>
                          <span>•</span>
                          <span className="font-medium">{meal.calories} cal</span>
                        </div>
                        
                        <div className="space-y-1">
                          {meal.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="text-xs text-gray-500 dark:text-gray-400 font-inter">
                              • {item}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))
        )}
      </div>
    </PageWrapper>
  );
};

export default History;
