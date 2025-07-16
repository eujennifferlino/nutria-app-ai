
import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  Plus, 
  History, 
  Settings, 
  LogOut, 
  User,
  Utensils,
  ChevronDown,
  Moon,
  Sun,
  AlignJustify
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/contexts/ThemeContext";

const mainNavItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Adicionar Refeição",
    url: "/add-meal",
    icon: Plus,
  },
  {
    title: "Histórico",
    url: "/history",
    icon: History,
  },
];

const settingsNavItems = [
  {
    title: "Configurações",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const isCollapsed = state === "collapsed";
  
  const getNavClassName = (url: string) => {
    const isActive = location.pathname === url;
    return isActive 
      ? "bg-nutria-100 text-nutria-700 hover:bg-nutria-100 dark:bg-nutria-800 dark:text-nutria-200" 
      : "hover:bg-gray-100 dark:hover:bg-gray-800";
  };

  const handleLogout = () => {
    console.log("Logout realizado");
    navigate("/login");
  };

  return (
    <Sidebar className="border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <SidebarHeader className="p-4">
        <motion.div 
          className="flex items-center justify-between"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center space-x-2">
            <motion.div 
              className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Utensils className="w-5 h-5 text-white" />
            </motion.div>
            <AnimatePresence>
              {!isCollapsed && (
                <motion.span 
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent font-poppins"
                >
                  Nutria
                </motion.span>
              )}
            </AnimatePresence>
          </div>
          
          <SidebarTrigger className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
            <AlignJustify className="w-4 h-4" />
          </SidebarTrigger>
        </motion.div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <AnimatePresence>
            {!isCollapsed && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                <SidebarGroupLabel className="font-inter">
                  Principal
                </SidebarGroupLabel>
              </motion.div>
            )}
          </AnimatePresence>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item, index) => (
                <SidebarMenuItem key={item.title}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <SidebarMenuButton 
                      asChild 
                      className={getNavClassName(item.url)}
                      tooltip={isCollapsed ? item.title : undefined}
                    >
                      <NavLink to={item.url} className="flex items-center font-inter">
                        <item.icon className="w-5 h-5 shrink-0" />
                        <AnimatePresence>
                          {!isCollapsed && (
                            <motion.span 
                              initial={{ opacity: 0, width: 0 }}
                              animate={{ opacity: 1, width: "auto" }}
                              exit={{ opacity: 0, width: 0 }}
                              transition={{ duration: 0.2 }}
                              className="ml-3"
                            >
                              {item.title}
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </NavLink>
                    </SidebarMenuButton>
                  </motion.div>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <Separator className="my-2 bg-gray-200 dark:bg-gray-700" />

        <SidebarGroup>
          <AnimatePresence>
            {!isCollapsed && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                <SidebarGroupLabel className="font-inter">
                  Configurações
                </SidebarGroupLabel>
              </motion.div>
            )}
          </AnimatePresence>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className={getNavClassName(item.url)}
                    tooltip={isCollapsed ? item.title : undefined}
                  >
                    <NavLink to={item.url} className="flex items-center font-inter">
                      <item.icon className="w-5 h-5 shrink-0" />
                      <AnimatePresence>
                        {!isCollapsed && (
                          <motion.span 
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: "auto" }}
                            exit={{ opacity: 0, width: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-3"
                          >
                            {item.title}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="flex items-center space-x-3">
          <Avatar className="w-8 h-8 shrink-0">
            <AvatarFallback className="bg-nutria-100 text-nutria-700 dark:bg-nutria-800 dark:text-nutria-200">
              JF
            </AvatarFallback>
          </Avatar>
          
          <AnimatePresence>
            {!isCollapsed && (
              <motion.div 
                className="flex-1 min-w-0"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.2 }}
              >
                <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-between p-0 h-auto hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <div className="text-left">
                        <p className="text-sm font-medium font-inter">Jennifer Ferreira</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate font-inter">
                          fjennifer393@gmail.com
                        </p>
                      </div>
                      <motion.div
                        animate={{ rotate: dropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      </motion.div>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    align="end" 
                    className="w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                  >
                    <DropdownMenuItem onClick={() => console.log("Ver perfil")} className="font-inter">
                      <User className="w-4 h-4 mr-2" />
                      Ver Perfil
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={toggleTheme} className="font-inter">
                      {theme === 'dark' ? (
                        <Sun className="w-4 h-4 mr-2" />
                      ) : (
                        <Moon className="w-4 h-4 mr-2" />
                      )}
                      {theme === 'dark' ? 'Modo Claro' : 'Modo Escuro'}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/settings')} className="font-inter">
                      <Settings className="w-4 h-4 mr-2" />
                      Configurações
                    </DropdownMenuItem>
                    <Separator className="my-1 bg-gray-200 dark:bg-gray-700" />
                    <DropdownMenuItem onClick={handleLogout} className="text-red-600 dark:text-red-400 font-inter">
                      <LogOut className="w-4 h-4 mr-2" />
                      Sair
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </motion.div>
            )}
          </AnimatePresence>
          
          {isCollapsed && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                  <motion.div
                    animate={{ rotate: dropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                  <span className="sr-only">Menu do usuário</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="start" 
                className="w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              >
                <div className="px-2 py-1.5">
                  <p className="text-sm font-medium font-inter">Jennifer Ferreira</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-inter">fjennifer393@gmail.com</p>
                </div>
                <Separator className="my-1 bg-gray-200 dark:bg-gray-700" />
                <DropdownMenuItem onClick={() => console.log("Ver perfil")} className="font-inter">
                  <User className="w-4 h-4 mr-2" />
                  Ver Perfil
                </DropdownMenuItem>
                <DropdownMenuItem onClick={toggleTheme} className="font-inter">
                  {theme === 'dark' ? (
                    <Sun className="w-4 h-4 mr-2" />
                  ) : (
                    <Moon className="w-4 h-4 mr-2" />
                  )}
                  {theme === 'dark' ? 'Modo Claro' : 'Modo Escuro'}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/settings')} className="font-inter">
                  <Settings className="w-4 h-4 mr-2" />
                  Configurações
                </DropdownMenuItem>
                <Separator className="my-1 bg-gray-200 dark:bg-gray-700" />
                <DropdownMenuItem onClick={handleLogout} className="text-red-600 dark:text-red-400 font-inter">
                  <LogOut className="w-4 h-4 mr-2" />
                  Sair
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
