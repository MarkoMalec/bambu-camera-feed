"use server"
import prisma from "~/lib/prisma"

export const addNewFeed = async (feedData: any) => {
  const feed = await prisma.feed.create({
    data: feedData,
  });
  return feed;
};
