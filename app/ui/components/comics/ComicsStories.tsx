"use client";
import { fetchCategoryStories } from "@/app/lib/data";
import Story from "../Story";
import { CollectionType } from "@/app/lib/definitions";
import { useEffect, useState } from "react";
import StoryLoadingSkeleton from "../loading-skeleton/StoryLoadingSkeleton";

const ComicsStories = ({ id }: { id: string }) => {
  const [stories, setStories] = useState<CollectionType[] | []>([]);
  const [loading, setLoading] = useState(true);

  // geting url from lib/utils.tsx file & fetch using useEffect method
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true); // set loading to false when data is fetching
        // Comics stories
        const comicsStoriesData = await fetchCategoryStories("comics", id);
        const comicsStories = comicsStoriesData.data.results;

        setStories(comicsStories);
      } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch data.");
      } finally {
        setLoading(false); // set loading to false after data complete fetching
      }
    };

    getData();
  }, [id]);

  // if loading is true the loading skeletong will show up
  if (loading) {
    return <StoryLoadingSkeleton />;
  }
  return (
    <div>
      <Story stories={stories} />
    </div>
  );
};

export default ComicsStories;
