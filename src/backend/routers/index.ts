import { prisma } from './../prisma';

import * as trpc from "@trpc/server";
import { z } from 'zod';

export const appRouter = trpc.router().query('getRestaurants', {
    resolve({ ctx }) {

      return prisma.restaurant.findMany();
    },
  });

  export type AppRouter = typeof appRouter;
