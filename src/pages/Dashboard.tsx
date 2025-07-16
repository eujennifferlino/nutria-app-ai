import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  TrendingUp, 
  Plus,
  Camera,
  Mic,
  Utensils,
  Flame,
  Award,
  BarChart3,
  Clock
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { SidebarProvider, SidebarInset,  } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("week");
  const navigate = useNavigate();

  const userStats = {
    name: "João",
    caloriesGoal: 2200,
    caloriesConsumed: 1650,
    macros: {
      carbs: { consumed: 180, goal: 275, color: "#3b82f6" },
      protein: { consumed: 85, goal: 110, color: "#22c55e" },
      fat: { consumed: 55, goal: 73, color: "#f59e0b" }
    },
    streak: 5,
    weeklyProgress: [
      { day: "Seg", calories: 2100 },
      { day: "Ter", calories: 1950 },
      { day: "Qua", calories: 2300 },
      { day: "Qui", calories: 1800 },
      { day: "Sex", calories: 2150 },
      { day: "Sáb", calories: 1650 },
      { day: "Dom", calories: 0 }
    ]
  };

  const recentMeals = [
    {
      id: 1,
      name: "Café da Manhã",
      time: "08:30",
      calories: 420,
      items: ["Aveia com frutas", "Café com leite"],
      method: "photo"
    },
    {
      id: 2,
      name: "Almoço",
      time: "12:45",
      calories: 680,
      items: ["Peito de frango", "Arroz integral", "Salada"],
      method: "audio"
    },
    {
      id: 3,
      name: "Lanche",
      time: "15:20",
      calories: 250,
      items: ["Iogurte grego", "Banana"],
      method: "manual"
    }
  ];

  const caloriesProgress = (userStats.caloriesConsumed / userStats.caloriesGoal) * 100;
  const remainingCalories = userStats.caloriesGoal - userStats.caloriesConsumed;

  const macroData = [
    { name: "Carboidratos", value: userStats.macros.carbs.consumed, color: "#3b82f6" },
    { name: "Proteínas", value: userStats.macros.protein.consumed, color: "#22c55e" },
    { name: "Gorduras", value: userStats.macros.fat.consumed, color: "#f59e0b" }
  ];

  const handleAddMeal = () => {
    navigate('/add-meal');
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        
        <SidebarInset>
          <div className="min-h-screen bg-gradient-to-br from-nutria-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            {/* Header */}
            <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-white/20 dark:border-gray-700/20">
              <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Badge className="bg-nutria-100 text-nutria-700 dark:bg-nutria-800 dark:text-nutria-200 font-inter">
                    🔥 {userStats.streak} dias seguidos
                  </Badge>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 font-inter"
                    onClick={handleAddMeal}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Adicionar Refeição
                  </Button>
                </motion.div>
              </div>
            </header>

            <motion.div 
              className="container mx-auto px-4 py-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Welcome Section */}
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h1 className="text-3xl font-bold mb-2 font-poppins">
                  Olá, {userStats.name}! 👋
                </h1>
                <p className="text-gray-600 dark:text-gray-400 font-inter">
                  Aqui está o resumo da sua alimentação hoje
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Calories Overview */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Card className="glass-card border-0 shadow-lg dark:bg-gray-800/50">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2 font-poppins">
                          <Target className="w-5 h-5 text-nutria-600" />
                          <span>Progresso Calórico</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center mb-6">
                          <div className="text-4xl font-bold gradient-text mb-2 font-poppins">
                            {userStats.caloriesConsumed}
                          </div>
                          <div className="text-gray-600 dark:text-gray-400 font-inter">
                            de {userStats.caloriesGoal} cal
                          </div>
                        </div>
                        
                        <Progress value={caloriesProgress} className="h-3 mb-4" />
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-nutria-600 font-poppins">
                              {remainingCalories > 0 ? remainingCalories : 0}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 font-inter">
                              {remainingCalories > 0 ? "Restantes" : "Meta atingida!"}
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600 font-poppins">
                              {Math.round(caloriesProgress)}%
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 font-inter">Concluído</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Card className="glass-card border-0 shadow-lg dark:bg-gray-800/50">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2 font-poppins">
                          <BarChart3 className="w-5 h-5 text-nutria-600" />
                          <span>Macronutrientes</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-2 relative">
                              <div className="w-full h-full rounded-full bg-blue-100" />
                              <div 
                                className="absolute inset-0 rounded-full bg-blue-500 transition-all duration-500"
                                style={{
                                  background: `conic-gradient(#3b82f6 ${(userStats.macros.carbs.consumed / userStats.macros.carbs.goal) * 360}deg, #e5e7eb 0deg)`
                                }}
                              />
                              <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                                <span className="text-xs font-bold text-blue-600">
                                  {Math.round((userStats.macros.carbs.consumed / userStats.macros.carbs.goal) * 100)}%
                                </span>
                              </div>
                            </div>
                            <div className="font-medium text-sm font-inter">Carboidratos</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 font-inter">
                              {userStats.macros.carbs.consumed}g / {userStats.macros.carbs.goal}g
                            </div>
                          </div>

                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-2 relative">
                              <div className="w-full h-full rounded-full bg-green-100" />
                              <div 
                                className="absolute inset-0 rounded-full bg-green-500 transition-all duration-500"
                                style={{
                                  background: `conic-gradient(#22c55e ${(userStats.macros.protein.consumed / userStats.macros.protein.goal) * 360}deg, #e5e7eb 0deg)`
                                }}
                              />
                              <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                                <span className="text-xs font-bold text-green-600">
                                  {Math.round((userStats.macros.protein.consumed / userStats.macros.protein.goal) * 100)}%
                                </span>
                              </div>
                            </div>
                            <div className="font-medium text-sm font-inter">Proteínas</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 font-inter">
                              {userStats.macros.protein.consumed}g / {userStats.macros.protein.goal}g
                            </div>
                          </div>

                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-2 relative">
                              <div className="w-full h-full rounded-full bg-yellow-100" />
                              <div 
                                className="absolute inset-0 rounded-full bg-yellow-500 transition-all duration-500"
                                style={{
                                  background: `conic-gradient(#f59e0b ${(userStats.macros.fat.consumed / userStats.macros.fat.goal) * 360}deg, #e5e7eb 0deg)`
                                }}
                              />
                              <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                                <span className="text-xs font-bold text-yellow-600">
                                  {Math.round((userStats.macros.fat.consumed / userStats.macros.fat.goal) * 100)}%
                                </span>
                              </div>
                            </div>
                            <div className="font-medium text-sm font-inter">Gorduras</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 font-inter">
                              {userStats.macros.fat.consumed}g / {userStats.macros.fat.goal}g
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Card className="glass-card border-0 shadow-lg dark:bg-gray-800/50">
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 font-poppins">
                            <TrendingUp className="w-5 h-5 text-nutria-600" />
                            <span>Progresso Semanal</span>
                          </div>
                          <div className="flex space-x-2">
                            <Button 
                              size="sm" 
                              variant={selectedPeriod === "week" ? "default" : "outline"}
                              onClick={() => setSelectedPeriod("week")}
                              className="font-inter"
                            >
                              Semana
                            </Button>
                            <Button 
                              size="sm" 
                              variant={selectedPeriod === "month" ? "default" : "outline"}
                              onClick={() => setSelectedPeriod("month")}
                              className="font-inter"
                            >
                              Mês
                            </Button>
                          </div>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="h-64">
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={userStats.weeklyProgress}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="day" />
                              <YAxis />
                              <Tooltip />
                              <Line 
                                type="monotone" 
                                dataKey="calories" 
                                stroke="#22c55e" 
                                strokeWidth={3}
                                dot={{ fill: "#22c55e", strokeWidth: 2, r: 6 }}
                              />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <Card className="glass-card border-0 shadow-lg dark:bg-gray-800/50">
                    <CardHeader>
                      <CardTitle className="text-lg font-poppins">Adicionar Refeição</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button className="w-full justify-start font-inter" variant="outline">
                        <Camera className="w-4 h-4 mr-2" />
                        Foto da Refeição
                      </Button>
                      <Button className="w-full justify-start font-inter" variant="outline">
                        <Mic className="w-4 h-4 mr-2" />
                        Áudio
                      </Button>
                      <Button className="w-full justify-start font-inter" variant="outline">
                        <Plus className="w-4 h-4 mr-2" />
                        Manual
                      </Button>
                    </CardContent>
                  </Card>

                  <div className="grid grid-cols-2 gap-4">
                    <Card className="glass-card border-0 shadow-lg dark:bg-gray-800/50">
                      <CardContent className="p-4 text-center">
                        <Flame className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                        <div className="text-2xl font-bold font-poppins">1650</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 font-inter">Cal hoje</div>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card border-0 shadow-lg dark:bg-gray-800/50">
                      <CardContent className="p-4 text-center">
                        <Award className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                        <div className="text-2xl font-bold font-poppins">{userStats.streak}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 font-inter">Dias seguidos</div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="glass-card border-0 shadow-lg dark:bg-gray-800/50">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 font-poppins">
                        <Clock className="w-5 h-5 text-nutria-600" />
                        <span>Refeições Hoje</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {recentMeals.map((meal) => (
                        <div key={meal.id} className="flex items-center space-x-3 p-3 rounded-lg bg-white/50 dark:bg-gray-700/30 hover:bg-white/70 dark:hover:bg-gray-700/50 transition-colors">
                          <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                            {meal.method === "photo" && <Camera className="w-5 h-5 text-white" />}
                            {meal.method === "audio" && <Mic className="w-5 h-5 text-white" />}
                            {meal.method === "manual" && <Utensils className="w-5 h-5 text-white" />}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-sm font-inter">{meal.name}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 font-inter">
                              {meal.time} • {meal.calories} cal
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      <Button variant="ghost" size="sm" className="w-full font-inter">
                        Ver todas as refeições
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-0 shadow-lg dark:bg-gray-800/50">
                    <CardHeader>
                      <CardTitle className="text-lg font-poppins">Distribuição de Macros</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-40">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={macroData}
                              cx="50%"
                              cy="50%"
                              innerRadius={40}
                              outerRadius={60}
                              dataKey="value"
                            >
                              {macroData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Pie>
                            <Tooltip />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="space-y-2 mt-4">
                        {macroData.map((macro, index) => (
                          <div key={index} className="flex items-center justify-between text-sm font-inter">
                            <div className="flex items-center space-x-2">
                              <div 
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: macro.color }}
                              />
                              <span>{macro.name}</span>
                            </div>
                            <span className="font-medium">{macro.value}g</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
