"use client";
import { fetchCategoryComics } from "@/app/lib/data";
import Collection from "../Collection";
import { useEffect, useState } from "react";
import { CollectionType } from "@/app/lib/definitions";
import CollectionLoadingSkeleton from "../loading-skeleton/CollectionLoadingSkeleton";
import { urlEventsComics } from "@/app/lib/utils";

const EventsComics = ({ id }: { id: string }) => {
  const [comics, setComics] = useState<CollectionType[] | []>([]);
  const [loading, setLoading] = useState(true);

  // geting url from lib/utils.tsx file & fetch using useEffect method
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true); // set loading to false when data is fetching
        // Events Comics
        const URL = urlEventsComics(id);
        const res = await fetch(URL);
        const data = await res.json();
        const eventsComics = data.data.results;
        setComics(eventsComics);
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
      <Collection title={"Comics"} category={comics} />
    </div>
  );
};

export default EventsComics;
