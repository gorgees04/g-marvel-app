"use client";
import { fetchCategory } from "@/app/lib/data";
import Collection from "../Collection";
import { CollectionType } from "@/app/lib/definitions";
import { useEffect, useState } from "react";
import CollectionLoadingSkeleton from "../loading-skeleton/CollectionLoadingSkeleton";

const HomeComics = () => {
  // fetrching comics data
  const [comics, setComics] = useState<CollectionType[] | []>([]);
  const [loading, setLoading] = useState(true);

  // geting url from lib/utils.tsx file & fetch using useEffect method
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true); // Set loading to false when data is fetching
        const data = await fetchCategory("comics", "0");
        const fetchedComics = data.data.results;
        setComics(fetchedComics);
      } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch data.");
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
      <Collection category={comics} title="Comics" />
    </div>
  );
};

export default HomeComics;
