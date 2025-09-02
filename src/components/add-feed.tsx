"use client";
import { addNewFeed } from "~/utils/feedActions";

const AddFeedButton = () => {

  const handleAddFeed = async () => {
    const newFeed = {
      name: "New Feed",
      url: "https://example.com/new-feed",
    };
    await addNewFeed(newFeed);
    alert("New feed added!");
  };

  return (
    <button
      className="rounded bg-[#900] px-4 py-2 text-white"
      onClick={handleAddFeed}
    >
      Add Feed
    </button>
  );
};

export default AddFeedButton;
