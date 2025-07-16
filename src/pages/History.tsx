
import { Calendar, Clock, Utensils } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    <div className="min-h-screen bg-gradient-to-br from-nutria-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Histórico de Refeições</h1>
          <p className="text-gray-600">
            Acompanhe seu progresso nutricional ao longo do tempo
          </p>
        </div>

        <div className="space-y-6">
          {mealHistory.map((day, dayIndex) => (
            <Card key={dayIndex} className="glass-card border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-nutria-600" />
                    <span>{new Date(day.date).toLocaleDateString('pt-BR', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <Badge className="bg-nutria-100 text-nutria-700">
                    {day.totalCalories} cal total
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {day.meals.map((meal, mealIndex) => (
                    <div key={mealIndex} className="p-4 rounded-lg bg-white/50 hover:bg-white/70 transition-colors">
                      <div className="flex items-center space-x-2 mb-3">
                        <Utensils className="w-4 h-4 text-nutria-600" />
                        <span className="font-medium">{meal.name}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                        <Clock className="w-3 h-3" />
                        <span>{meal.time}</span>
                        <span>•</span>
                        <span className="font-medium">{meal.calories} cal</span>
                      </div>
                      
                      <div className="space-y-1">
                        {meal.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="text-xs text-gray-500">
                            • {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
