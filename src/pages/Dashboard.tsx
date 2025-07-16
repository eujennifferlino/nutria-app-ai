
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  TrendingUp, 
  Calendar,
  Plus,
  Camera,
  Mic,
  Utensils,
  Flame,
  Activity,
  Award,
  BarChart3,
  Clock
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("week");

  // Dados simulados - futuramente virão do Supabase
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-nutria-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-white/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-health rounded-lg flex items-center justify-center">
              <Utensils className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">Nutria</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Badge className="bg-nutria-100 text-nutria-700">
              🔥 {userStats.streak} dias seguidos
            </Badge>
            
            <Button size="sm" className="bg-gradient-health">
              <Plus className="w-4 h-4 mr-2" />
              Adicionar Refeição
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Olá, {userStats.name}! 👋
          </h1>
          <p className="text-gray-600">
            Aqui está o resumo da sua alimentação hoje
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Calories Overview */}
            <Card className="glass-card border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-nutria-600" />
                  <span>Progresso Calórico</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold gradient-text mb-2">
                    {userStats.caloriesConsumed}
                  </div>
                  <div className="text-gray-600">
                    de {userStats.caloriesGoal} cal
                  </div>
                </div>
                
                <Progress value={caloriesProgress} className="h-3 mb-4" />
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-nutria-600">
                      {remainingCalories > 0 ? remainingCalories : 0}
                    </div>
                    <div className="text-sm text-gray-500">
                      {remainingCalories > 0 ? "Restantes" : "Meta atingida!"}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {Math.round(caloriesProgress)}%
                    </div>
                    <div className="text-sm text-gray-500">Concluído</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Macros */}
            <Card className="glass-card border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
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
                    <div className="font-medium text-sm">Carboidratos</div>
                    <div className="text-xs text-gray-500">
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
                    <div className="font-medium text-sm">Proteínas</div>
                    <div className="text-xs text-gray-500">
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
                    <div className="font-medium text-sm">Gorduras</div>
                    <div className="text-xs text-gray-500">
                      {userStats.macros.fat.consumed}g / {userStats.macros.fat.goal}g
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Weekly Progress Chart */}
            <Card className="glass-card border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-nutria-600" />
                    <span>Progresso Semanal</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      size="sm" 
                      variant={selectedPeriod === "week" ? "default" : "outline"}
                      onClick={() => setSelectedPeriod("week")}
                    >
                      Semana
                    </Button>
                    <Button 
                      size="sm" 
                      variant={selectedPeriod === "month" ? "default" : "outline"}
                      onClick={() => setSelectedPeriod("month")}
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
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="glass-card border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Adicionar Refeição</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Camera className="w-4 h-4 mr-2" />
                  Foto da Refeição
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Mic className="w-4 h-4 mr-2" />
                  Áudio
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Plus className="w-4 h-4 mr-2" />
                  Manual
                </Button>
              </CardContent>
            </Card>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="glass-card border-0 shadow-lg">
                <CardContent className="p-4 text-center">
                  <Flame className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold">1650</div>
                  <div className="text-xs text-gray-500">Cal hoje</div>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-0 shadow-lg">
                <CardContent className="p-4 text-center">
                  <Award className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{userStats.streak}</div>
                  <div className="text-xs text-gray-500">Dias seguidos</div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Meals */}
            <Card className="glass-card border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-nutria-600" />
                  <span>Refeições Hoje</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentMeals.map((meal) => (
                  <div key={meal.id} className="flex items-center space-x-3 p-3 rounded-lg bg-white/50 hover:bg-white/70 transition-colors">
                    <div className="w-10 h-10 bg-gradient-health rounded-lg flex items-center justify-center">
                      {meal.method === "photo" && <Camera className="w-5 h-5 text-white" />}
                      {meal.method === "audio" && <Mic className="w-5 h-5 text-white" />}
                      {meal.method === "manual" && <Utensils className="w-5 h-5 text-white" />}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{meal.name}</div>
                      <div className="text-xs text-gray-500">
                        {meal.time} • {meal.calories} cal
                      </div>
                    </div>
                  </div>
                ))}
                
                <Button variant="ghost" size="sm" className="w-full">
                  Ver todas as refeições
                </Button>
              </CardContent>
            </Card>

            {/* Macro Distribution */}
            <Card className="glass-card border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Distribuição de Macros</CardTitle>
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
                    <div key={index} className="flex items-center justify-between text-sm">
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
      </div>
    </div>
  );
};

export default Dashboard;
