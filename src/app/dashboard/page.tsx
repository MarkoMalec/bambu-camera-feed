"use server"

import AddFeedButton from "~/components/add-feed";
import CameraFeed from "~/components/camera-feed";
import prisma from "~/lib/prisma";

const getFeeds = async () => {
  const feeds = await prisma.feed.findMany();
  return feeds;
};

const DashboardPage = async () => {
  const feeds = await getFeeds();

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="mb-10 text-2xl font-bold">Camera Feeds</h1>
        <AddFeedButton />
      </div>
      <CameraFeed feeds={feeds} />
    </div>
  );
};

export default DashboardPage;
