"use client";
import { addNewFeed } from "~/utils/feedActions";

const AddFeedButton = () => {
  const handleClick = () => {
    
  };

  return (
    <button
      className="rounded bg-[#900] px-4 py-2 text-white"
      onClick={handleClick}
    >
      Add Feed
    </button>
  );
};

export default AddFeedButton;
