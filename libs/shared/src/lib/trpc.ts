import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();

export const appRouter = t.router({
  getGreeting: t.procedure.input(z.string()).query(({ input }) => {
    return `Hello, ${input}`;
  }),
});

export type AppRouter = typeof appRouter;
