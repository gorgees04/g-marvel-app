"use client";
import { fetchCategoryCharacters } from "@/app/lib/data";
import Collection from "../Collection";
import { useEffect, useState } from "react";
import { CollectionType } from "@/app/lib/definitions";
import CollectionLoadingSkeleton from "../loading-skeleton/CollectionLoadingSkeleton";
import { urlSeriesCharacters } from "@/app/lib/utils";

const SeriesCharacters = ({ id }: { id: string }) => {
  const [characters, setCharacters] = useState<CollectionType[] | []>([]);
  const [loading, setLoading] = useState(true);

  // geting url from lib/utils.tsx file & fetch using useEffect method
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true); // set loading to false when data is fetching
        // Series Characters
        const URL = urlSeriesCharacters(id);
        const res = await fetch(URL);
        const data = await res.json();
        const seriesCharacters = data.data.results;

        setCharacters(seriesCharacters);
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

export default SeriesCharacters;
