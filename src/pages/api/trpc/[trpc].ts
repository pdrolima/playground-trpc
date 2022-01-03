import { appRouter } from 'backend/routers'
import * as trpcNext from '@trpc/server/adapters/next'

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  onError({ error }) {
    console.error('Error:', error);
  },
  createContext: () => null,
});
