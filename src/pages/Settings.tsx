
import { User, Bell, Shield, Palette, Database, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "@/contexts/ThemeContext";
import PageWrapper from "@/components/PageWrapper";

const Settings = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <PageWrapper 
      title="Configurações" 
      subtitle="Gerencie suas preferências e configurações da conta"
      showBackButton={true}
    >
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Perfil */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="glass-card border-0 shadow-lg dark:bg-gray-800/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-poppins">
                  <User className="w-5 h-5 text-nutria-600" />
                  <span>Informações do Perfil</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="font-inter">Nome</Label>
                    <Input id="firstName" defaultValue="Jennifer" className="font-inter" />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="font-inter">Sobrenome</Label>
                    <Input id="lastName" defaultValue="Ferreira" className="font-inter" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="font-inter">Email</Label>
                  <Input id="email" type="email" defaultValue="fjennifer393@gmail.com" className="font-inter" />
                </div>
                <Button className="bg-gradient-to-r from-green-500 to-blue-500 font-inter">
                  Salvar Alterações
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Notificações */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="glass-card border-0 shadow-lg dark:bg-gray-800/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-poppins">
                  <Bell className="w-5 h-5 text-nutria-600" />
                  <span>Notificações</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium font-inter">Lembrete de refeições</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-inter">Receba lembretes para registrar suas refeições</div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator className="dark:bg-gray-700" />
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium font-inter">Relatórios semanais</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-inter">Receba resumos do seu progresso semanal</div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator className="dark:bg-gray-700" />
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium font-inter">Dicas nutricionais</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-inter">Receba dicas personalizadas de nutrição</div>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Privacidade */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="glass-card border-0 shadow-lg dark:bg-gray-800/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-poppins">
                  <Shield className="w-5 h-5 text-nutria-600" />
                  <span>Privacidade e Segurança</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium font-inter">Perfil público</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-inter">Permitir que outros usuários vejam seu progresso</div>
                  </div>
                  <Switch />
                </div>
                <Separator className="dark:bg-gray-700" />
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium font-inter">Compartilhar dados para pesquisa</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-inter">Contribuir anonimamente para pesquisas nutricionais</div>
                  </div>
                  <Switch />
                </div>
                <Separator className="dark:bg-gray-700" />
                <Button variant="outline" className="w-full font-inter">
                  Alterar Senha
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="space-y-6">
          {/* Aparência */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="glass-card border-0 shadow-lg dark:bg-gray-800/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-poppins">
                  <Palette className="w-5 h-5 text-nutria-600" />
                  <span>Aparência</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="font-inter">Tema</Label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <Button 
                      variant={theme === 'light' ? 'default' : 'outline'} 
                      size="sm" 
                      onClick={() => theme === 'dark' && toggleTheme()}
                      className="font-inter"
                    >
                      <Sun className="w-4 h-4 mr-2" />
                      Claro
                    </Button>
                    <Button 
                      variant={theme === 'dark' ? 'default' : 'outline'} 
                      size="sm"
                      onClick={() => theme === 'light' && toggleTheme()}
                      className="font-inter"
                    >
                      <Moon className="w-4 h-4 mr-2" />
                      Escuro
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Dados */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="glass-card border-0 shadow-lg dark:bg-gray-800/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-poppins">
                  <Database className="w-5 h-5 text-nutria-600" />
                  <span>Seus Dados</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full font-inter">
                  Exportar Dados
                </Button>
                <Button variant="destructive" className="w-full font-inter">
                  Excluir Conta
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Settings;
