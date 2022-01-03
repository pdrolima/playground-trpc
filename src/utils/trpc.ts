// utils/trpc.ts
import { createReactQueryHooks } from '@trpc/react';
import type { AppRouter } from 'backend/routers';

export const trpc = createReactQueryHooks<AppRouter>();
// => { useQuery: ..., useMutation: ...}
