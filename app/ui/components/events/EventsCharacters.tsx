"use client";
import { fetchCategoryCharacters } from "@/app/lib/data";
import { useEffect, useState } from "react";
import Collection from "../Collection";
import { CollectionType } from "@/app/lib/definitions";
import CollectionLoadingSkeleton from "../loading-skeleton/CollectionLoadingSkeleton";
import { urlEventsCharacters } from "@/app/lib/utils";

const EventsCharacters = ({ id }: { id: string }) => {
  const [characters, setCharacters] = useState<CollectionType[] | []>([]);
  const [loading, setLoading] = useState(true);

  // geting url from lib/utils.tsx file & fetch using useEffect method
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true); // set loading to false when data is fetching
        // Events characters
        const URL = urlEventsCharacters(id);
        const res = await fetch(URL);
        const data = await res.json();
        const eventsCharacters = data.data.results;

        setCharacters(eventsCharacters);
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
      <Collection title={"Characters"} category={characters} />
    </div>
  );
};

export default EventsCharacters;
