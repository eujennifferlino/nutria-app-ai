import { Camera, Mic, Brain, BarChart3, Target, Zap } from "lucide-react";
import {
  FeatureProps,
  TestimonialProps,
  StatProps,
  HowItWorksStepProps,
} from "@/types/landing-page";

export const features: FeatureProps[] = [
  {
    icon: Camera,
    title: "Reconhecimento por Imagem",
    description:
      "Tire uma foto da sua refeição e nossa IA identifica automaticamente os alimentos e calcula os macros.",
  },
  {
    icon: Mic,
    title: "Registro por Áudio",
    description:
      "Descreva sua refeição por voz e deixe a IA processar todas as informações nutricionais.",
  },
  {
    icon: Brain,
    title: "IA Personalizada",
    description:
      "Algoritmos inteligentes que aprendem seus hábitos e sugerem melhorias personalizadas.",
  },
  {
    icon: BarChart3,
    title: "Análises Detalhadas",
    description:
      "Gráficos completos do seu progresso com insights sobre tendências e padrões.",
  },
  {
    icon: Target,
    title: "Metas Inteligentes",
    description:
      "Objetivos personalizados baseados em seu perfil, atividade física e metas de saúde.",
  },
  {
    icon: Zap,
    title: "Tempo Real",
    description:
      "Atualizações instantâneas e sincronização em todos os seus dispositivos.",
  },
];

export const testimonials: TestimonialProps[] = [
  {
    name: "Maria Silva",
    role: "Nutricionista",
    content:
      "O Nutria revolucionou a forma como acompanho meus pacientes. A precisão da IA é impressionante!",
    rating: 5,
  },
  {
    name: "João Santos",
    role: "Atleta",
    content:
      "Finalmente um app que entende minhas necessidades. O registro por foto economiza muito tempo.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    role: "Professora",
    content:
      "Interface intuitiva e resultados reais. Perdi 8kg em 3 meses com as recomendações da IA.",
    rating: 5,
  },
];

export const stats: StatProps[] = [
  { number: "50K+", label: "Usuários Ativos" },
  { number: "2M+", label: "Refeições Analisadas" },
  { number: "95%", label: "Precisão da IA" },
  { number: "4.9", label: "Avaliação Média" },
];

export const howItWorksSteps: HowItWorksStepProps[] = [
  {
    step: "1",
    title: "Registre",
    description: "Tire uma foto ou grave um áudio da sua refeição",
    icon: Camera,
  },
  {
    step: "2",
    title: "Analise",
    description: "Nossa IA processa e calcula todos os macros automaticamente",
    icon: Brain,
  },
  {
    step: "3",
    title: "Acompanhe",
    description: "Visualize seu progresso e receba insights personalizados",
    icon: BarChart3,
  },
];
