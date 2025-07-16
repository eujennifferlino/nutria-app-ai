
import { Camera, Mic, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AddMeal = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-nutria-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Adicionar Refeição</h1>
          <p className="text-gray-600">
            Escolha como você quer registrar sua refeição
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl">
          <Card className="glass-card border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <CardTitle>Foto da Refeição</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">
                Tire uma foto do seu prato e deixe a IA identificar os alimentos
              </p>
              <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500">
                Tirar Foto
              </Button>
            </CardContent>
          </Card>

          <Card className="glass-card border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mic className="w-8 h-8 text-white" />
              </div>
              <CardTitle>Descrição por Áudio</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">
                Descreva sua refeição falando e a IA irá processar as informações
              </p>
              <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500">
                Gravar Áudio
              </Button>
            </CardContent>
          </Card>

          <Card className="glass-card border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="w-8 h-8 text-white" />
              </div>
              <CardTitle>Entrada Manual</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">
                Digite manualmente os alimentos e quantidades da sua refeição
              </p>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500">
                Adicionar Manual
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AddMeal;
