import express from 'express';
import db from './db';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import { appRouter } from '@org/shared';

const app = express();
const port = 3000;

app.use(
  '/trpc',
  createExpressMiddleware({
    router: appRouter,
    createContext: () => ({}),
  })
);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
