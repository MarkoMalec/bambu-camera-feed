"use server"
import prisma from "~/lib/prisma"

type FeedData = {
  name: string,
  url: string,
}

export const addNewFeed = async (feedData: FeedData) => {
  const feed = await prisma.feed.create({
    data: {
      name: feedData.name,
      url: feedData.url,
    },
  });
  return feed;
};
