import AddFeedButton from "~/components/add-feed";
import CameraFeed from "~/components/camera-feed";

const DashboardPage = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="mb-10 text-2xl font-bold">Camera Feeds</h1>
        <AddFeedButton />
      </div>
      <CameraFeed />
    </div>
  );
};

export default DashboardPage;
