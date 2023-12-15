"use client";
import { fetchCategory } from "@/app/lib/data";
import Collection from "../Collection";
import { useEffect, useState } from "react";
import { Character, CollectionType } from "@/app/lib/definitions";
import CollectionLoadingSkeleton from "../loading-skeleton/CollectionLoadingSkeleton";

const HomeCharacters = () => {
  // main characters & checking on loading
  const [characters, setCharaters] = useState<CollectionType[] | []>([]);
  const [loading, setLoading] = useState(true);

  // geting url from lib/utils.tsx file & fetch using useEffect method
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true); // Set loading to false when data is fetching
        const data = await fetchCategory("characters", "0");
        const fetchedCharacters = data.data.results;
        setCharaters(fetchedCharacters);
      } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch characters data.");
      } finally {
        setLoading(false); // Set loading to false after data complete fetching
      }
    };

    getData();
  }, []);

  // if loading is true the loading skeletong will show up
  if (loading) {
    return <CollectionLoadingSkeleton />;
  }
  return (
    <div className=" w-screen">
      <Collection category={characters} title="Characters" />
    </div>
  );
};

export default HomeCharacters;
