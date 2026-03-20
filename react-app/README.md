# Advanced Dental Health Center — React + Tailwind

Versão React + Tailwind do site Advanced Dental Health Center (Modelo 2 - dentista-modelo-2).

## Requisitos

- Node.js 18+
- npm ou pnpm

## Instalação

```bash
cd react-app
npm install
```

## Imagens

Copie as imagens do projeto HTML para `public/assets/images/`:

- `advanced-dental-logo.png`
- `hero-dental-smile.png`
- `lana-bubalo.png`
- `clayton-cummings.png`

Ou execute (a partir da pasta `react-app`):

```bash
npm run copy-assets
```

Isso copia a pasta `../assets` para `public/assets` se existir.

## Desenvolvimento

```bash
npm run dev
```

Acesse http://localhost:5173

## Build

```bash
npm run build
```

Os arquivos estarão em `dist/`.

## Estrutura

- `src/App.tsx` — Layout principal com todas as seções
- `src/data.ts` — Dados da clínica (customizável)
- `src/components/` — Componentes por seção
- `src/types.ts` — Tipos TypeScript

## Personalização

Edite `src/data.ts` para alterar:

- Nome da clínica, endereço, telefone
- Horários de atendimento
- Depoimentos
- FAQ
- Links de redes sociais
