//grab the images for the corresponding user
import { router, publicProcedure, protectedProcedure } from "../trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

export const postRouter = router({
  getById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      const post = await ctx.prisma.wp_posts.findUnique({
        where: { ID: input.id },
      });

      if (!post) throw new TRPCError({ code: "NOT_FOUND" });

      return post;
    }),
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.wp_posts.findMany();
  }),
  create: protectedProcedure
    .input(
      z.object({
        postDay: z.date(),
        urlFrontPhotoThumbnail: z.string(),
        urlFrontPhotoHD: z.string(),
        urlBackPhotoThumbnail: z.string(),
        urlBackPhotoHD: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      //create post and link it to the user
      return ctx.prisma.post.create({
        data: {
          postDay: input.postDay,
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
