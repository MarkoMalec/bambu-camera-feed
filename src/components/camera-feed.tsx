import SingleCameraFeedCard from "./single-camera-feed-card";

const CameraFeed = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <SingleCameraFeedCard src="http://rpicameras.ddns.net:8888/cam/index.m3u8"/>
    </div>
  );
};

export default CameraFeed;
