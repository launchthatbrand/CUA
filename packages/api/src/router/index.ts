import { router } from "../trpc";
import { courseRouter } from "./course";
import { authRouter } from "./auth";
import { userRouter } from "./user";

export const appRouter = router({
  course: courseRouter,
  user: userRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
