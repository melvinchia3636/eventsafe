# EventSafe

Monorepo for the EventSafe app.

## Structure

- `client/` — React + TypeScript + Vite + Tailwind CSS
- `server/` — NestJS API

## Getting started

Install dependencies in each package:

```bash
cd client && bun install
cd server && bun install
```

Run the client:

```bash
cd client
bun run dev
```

Run the server:

```bash
cd server
bun run start:dev
```

The client dev server starts on http://localhost:5173 and the API on http://localhost:3000.

## License

[MIT](LICENSE)
