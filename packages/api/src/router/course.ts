//grab the images for the corresponding user
import { router, publicProcedure, protectedProcedure } from "../trpc";
import { z } from "zod";

export const courseRouter = router({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.wp_posts.findMany();
  }),
  create: protectedProcedure
    .input(
      z.object({
        courseDay: z.date(),
        urlFrontPhotoThumbnail: z.string(),
        urlFrontPhotoHD: z.string(),
        urlBackPhotoThumbnail: z.string(),
        urlBackPhotoHD: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      //create course and link it to the user
      return ctx.prisma.course.create({
        data: {
          courseDay: input.courseDay,
          urlFrontPhotoThumbnail: input.urlFrontPhotoThumbnail,
          urlFrontPhotoHD: input.urlFrontPhotoHD,
          urlBackPhotoThumbnail: input.urlBackPhotoThumbnail,
          urlBackPhotoHD: input.urlBackPhotoHD,
          user: {
            connect: {
              id: ctx.user.id,
            },
          },
        },
      });
    }),
});
