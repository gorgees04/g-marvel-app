"use client";
import { fetchCategoryEvents } from "@/app/lib/data";
import Collection from "../Collection";
import { useEffect, useState } from "react";
import { CollectionType } from "@/app/lib/definitions";
import CollectionLoadingSkeleton from "../loading-skeleton/CollectionLoadingSkeleton";
import { urlCreatorsEvents } from "@/app/lib/utils";

const CreatorsEvents = ({ id }: { id: string }) => {
  const [events, setEvents] = useState<CollectionType[] | []>([]);
  const [loading, setLoading] = useState(true);

  // geting url from lib/utils.tsx file & fetch using useEffect method
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true); // set loading to false when data is fetching
        // Creators Events
        const URL = urlCreatorsEvents(id);
        const res = await fetch(URL);
        const data = await res.json();
        const creatorsEvents = data.data.results;
        setEvents(creatorsEvents);
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
    return <CollectionLoadingSkeleton />;
  }

  return (
    <div>
      <Collection title={"Events"} category={events} />
    </div>
  );
};

export default CreatorsEvents;
