import SingleCameraFeedCard from "./single-camera-feed-card";

const CameraFeed = ({ feeds }: { feeds: any[] }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {feeds.map((feed) => (
        <SingleCameraFeedCard key={feed.id} src={feed.url} name={feed.name} />
      ))}
    </div>
  );
};

export default CameraFeed;
