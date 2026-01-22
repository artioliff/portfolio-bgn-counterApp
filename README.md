# Counter App (React + Tailwind)

Projeto simples para treinar fundamentos reais de front-end moderno. Mesmo sendo pequeno, ele cobre conceitos essenciais que você vai usar em qualquer app React.

## O que dá para aprender aqui

- Estrutura de projeto com Vite
  - Organização de pastas (`src`, `public`, assets)
  - Fluxo de desenvolvimento rápido com HMR

- Fundamentos de React
  - Componente funcional (`App.jsx`)
  - Estado com `useState`
  - Estado derivado com `useMemo`
  - Efeitos colaterais com `useEffect`
  - Re-renderização e atualização de UI
  - Eventos (`onClick`) e handlers
  - Renderização dinâmica e condicionais simples

- Pensamento de UI com estado
  - Contador como fonte única de verdade
  - Botões que alteram o mesmo estado
  - Funções de controle (increment, decrement, reset)
  - Reset e passos de contagem (step)
  - Atalhos de teclado ligados ao mesmo fluxo de estado

- Tailwind CSS na prática
  - Utilização de classes utilitárias
  - Layout responsivo com `md:*`
  - Tipografia e hierarquia visual
  - Cores, gradientes e camadas visuais
  - Estados de hover e transições

- Integração do Tailwind v4 com Vite
  - Plugin `@tailwindcss/vite`
  - Configuração de `tailwind.config.js`
  - Uso do `@import "tailwindcss";` no CSS global

- Boas práticas de layout
  - Centralização e espaçamento coerentes
  - Componentização visual (cartões, blocos, seções)
  - Responsividade sem complicar

## Como rodar

```bash
npm install
npm run dev
```

## Onde olhar no código

- `src/App.jsx`: lógica do contador e UI principal
- `src/index.css`: estilos globais e import do Tailwind
- `vite.config.js`: integração do Tailwind no Vite
- `tailwind.config.js`: caminhos de conteúdo do Tailwind

## Próximos passos (se quiser evoluir)

- Salvar o valor do contador no `localStorage`
- Criar testes simples com Vitest e Testing Library
- Criar um componente reutilizável para botões

