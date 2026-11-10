# ArcevoDev — frontend

Site público do ArcevoDev, construído com Next.js (App Router) e TypeScript. As
páginas são renderizadas no servidor e consultam a API do NestJS.

## Requisitos

- Node.js 20 ou superior
- npm
- Backend do ArcevoDev em execução

## Instalação e execução

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

O site sobe em http://localhost:3000.

## Variável de ambiente

```
API_BASE_URL=http://localhost:3001/api
```

A variável é usada apenas no servidor, em `src/lib/api.ts`, e não é exposta ao
navegador.

## Páginas

- `/` — apresentação, busca por texto, filtro por tipo e cards dos conteúdos.
- `/conteudos/[slug]` — título, tipo, data, resumo, parágrafos e referências.

Estados tratados: lista vazia, API fora do ar e conteúdo inexistente (404).

## Build

```bash
npm run build
npm run start
```
