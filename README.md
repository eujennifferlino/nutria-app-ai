# Nutria App - Aplicativo de Nutrição com IA

<div align="center">
  <p><em>Controle sua alimentação com Inteligência Artificial</em></p>
  <p><strong>🚀 Deploy:</strong> <a href="https://nutria-app-ai.vercel.app" target="_blank">nutria-app-ai.vercel.app</a></p>
</div>

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Arquitetura](#arquitetura)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Componentes](#componentes)
- [Princípios de Design](#princípios-de-design)
- [Instalação](#instalação)
- [Uso](#uso)
- [Contribuição](#contribuição)
- [Licença](#licença)

## 🔍 Visão Geral

O Nutria é uma aplicação web moderna que utiliza Inteligência Artificial para ajudar os usuários a monitorar e melhorar sua alimentação. Com recursos como reconhecimento de alimentos por imagem, registro por áudio e análises detalhadas, o Nutria torna o acompanhamento nutricional simples e eficiente.

### Principais Recursos

- **Reconhecimento por Imagem**: Tire uma foto da sua refeição e nossa IA identifica automaticamente os alimentos e calcula os macros.
- **Registro por Áudio**: Descreva sua refeição por voz e deixe a IA processar todas as informações nutricionais.
- **IA Personalizada**: Algoritmos inteligentes que aprendem seus hábitos e sugerem melhorias personalizadas.
- **Análises Detalhadas**: Gráficos completos do seu progresso com insights sobre tendências e padrões.
- **Metas Inteligentes**: Objetivos personalizados baseados em seu perfil, atividade física e metas de saúde.
- **Tempo Real**: Atualizações instantâneas e sincronização em todos os seus dispositivos.

## 🏗️ Arquitetura

O Nutria App foi desenvolvido seguindo os princípios de Clean Architecture e SOLID, garantindo um código modular, testável e de fácil manutenção.

### Clean Architecture

A aplicação é estruturada em camadas:

1. **Camada de Apresentação**: Componentes React, páginas e UI.
2. **Camada de Domínio**: Lógica de negócios, entidades e casos de uso.
3. **Camada de Dados**: Serviços de API, armazenamento local e gerenciamento de estado.

### Fluxo de Dados

```
┌─────────────┐      ┌─────────────┐      ┌─────────────┐
│             │      │             │      │             │
│ Apresentação│ ──▶  │   Domínio   │ ──▶  │    Dados    │
│  (UI/Pages) │      │ (Use Cases) │      │ (Services)  │
│             │ ◀──  │             │ ◀──  │             │
└─────────────┘      └─────────────┘      └─────────────┘
```

## 🛠️ Tecnologias

- **Frontend**: React, TypeScript, Vite
- **Estilização**: TailwindCSS, Shadcn/UI
- **Animações**: Framer Motion
- **Roteamento**: React Router
- **Gerenciamento de Estado**: React Context API
- **Ícones**: Lucide React

## 📁 Estrutura do Projeto

```
src/
├── components/         # Componentes reutilizáveis
│   ├── ui/             # Componentes de UI básicos
│   └── landing-page/   # Componentes específicos da landing page
├── contexts/           # Contextos React para gerenciamento de estado
├── data/               # Dados estáticos e mocks
├── hooks/              # Hooks personalizados
├── lib/                # Utilitários e funções auxiliares
├── pages/              # Componentes de página
└── types/              # Definições de tipos TypeScript
```

## 🧩 Componentes

### Componentes de Página

- **Index.tsx**: Página inicial (landing page)
- **Login.tsx**: Página de login
- **Onboarding.tsx**: Processo de cadastro e introdução
- **Dashboard.tsx**: Painel principal do usuário
- **AddMeal.tsx**: Adição de refeições
- **History.tsx**: Histórico de refeições
- **Settings.tsx**: Configurações do usuário

### Componentes da Landing Page

- **Header.tsx**: Cabeçalho com navegação
- **HeroSection.tsx**: Seção principal com chamada para ação
- **FeaturesSection.tsx**: Exibição dos recursos da aplicação
- **HowItWorksSection.tsx**: Explicação do funcionamento
- **TestimonialsSection.tsx**: Depoimentos de usuários
- **CTASection.tsx**: Seção de chamada para ação
- **Footer.tsx**: Rodapé com links e informações

### Componentes de UI

Utilizamos a biblioteca Shadcn/UI para componentes básicos como:

- Button
- Card
- Badge
- Input
- Dialog
- e outros...

## 🧪 Princípios de Design

### SOLID

O projeto segue os princípios SOLID:

- **S - Single Responsibility**: Cada componente tem uma única responsabilidade
- **O - Open/Closed**: Componentes são abertos para extensão, fechados para modificação
- **L - Liskov Substitution**: Componentes podem ser substituídos por suas abstrações
- **I - Interface Segregation**: Interfaces específicas para cada componente
- **D - Dependency Inversion**: Dependemos de abstrações, não de implementações concretas

### Padrões de Design

- **Component Composition**: Construção de interfaces complexas a partir de componentes simples
- **Container/Presentational Pattern**: Separação entre lógica e apresentação
- **Custom Hooks**: Encapsulamento de lógica reutilizável
- **Context API**: Gerenciamento de estado global

## 🚀 Instalação

### Pré-requisitos

- Node.js (v18 ou superior)
- npm ou yarn

### Passos

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/nutria-app-ai.git
cd nutria-app-ai
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

4. Acesse a aplicação em `http://localhost:5173`

## 📝 Uso

### Desenvolvimento

- **Iniciar servidor de desenvolvimento**:

  ```bash
  npm run dev
  ```

- **Build para produção**:

  ```bash
  npm run build
  ```

- **Executar testes**:

  ```bash
  npm run test
  ```

- **Lint**:
  ```bash
  npm run lint
  ```

### Estrutura de Commits

Recomendamos seguir o padrão Conventional Commits:

- `feat:` - Nova funcionalidade
- `fix:` - Correção de bug
- `docs:` - Alterações na documentação
- `style:` - Formatação, ponto e vírgula, etc; sem alteração de código
- `refactor:` - Refatoração de código
- `test:` - Adição ou correção de testes
- `chore:` - Atualizações de tarefas de build, configurações, etc

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/amazing-feature`)
3. Faça commit das suas alterações (`git commit -m 'feat: add amazing feature'`)
4. Faça push para a branch (`git push origin feature/amazing-feature`)
5. Abra um Pull Request

### Diretrizes de Contribuição

- Siga os padrões de código existentes
- Escreva testes para novas funcionalidades
- Mantenha a documentação atualizada
- Siga os princípios SOLID e Clean Architecture

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.

---

## 👤 Autor

**Jenniffer Lino**

- GitHub: [@eujennifferlino](https://github.com/eujennifferlino)
- LinkedIn: [jennifferlinof](https://www.linkedin.com/in/jennifferlinof/)
- YouTube: [@linocanalofc](https://www.youtube.com/@linocanalofc)
- Instagram: [@jennifferlmd](https://www.instagram.com/jennifferlmd)

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
