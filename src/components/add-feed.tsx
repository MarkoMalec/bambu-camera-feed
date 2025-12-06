"use client";

import { useState } from "react";
import { addNewFeed } from "~/utils/feedActions";
import { useMediaQuery } from "~/hooks/use-media-query";
import { Button } from "~/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "~/components/ui/dialog";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "~/components/ui/drawer";
import { AddFeedForm } from "./forms/add-feed";

const AddFeedButton = () => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleAddFeed = async ({ name, url }: { name: string; url: string }) => {
    const newFeed = {
      name,
      url,
    };
    await addNewFeed(newFeed);
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Add Feed</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add a New Feed</DialogTitle>
          </DialogHeader>
          <AddFeedForm handleAddFeed={handleAddFeed} />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Add Feed</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Add a New Feed</DrawerTitle>
        </DrawerHeader>
        <AddFeedForm handleAddFeed={handleAddFeed} />
      </DrawerContent>
    </Drawer>
  )
};

export default AddFeedButton;
