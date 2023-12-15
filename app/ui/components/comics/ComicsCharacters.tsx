"use client";
import { fetchCategoryCharacters } from "@/app/lib/data";
import Collection from "../Collection";
import { useEffect, useState } from "react";
import { CollectionType } from "@/app/lib/definitions";
import CollectionLoadingSkeleton from "../loading-skeleton/CollectionLoadingSkeleton";

const ComicsCharacters = ({ id }: { id: string }) => {
  // Comics characters
  const [characters, setCharacters] = useState<CollectionType[] | []>([]);
  const [loading, setLoading] = useState(true);

  // geting url from lib/utils.tsx file & fetch using useEffect method
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true); // set loading to false when data is fetching
        // Characters comics
        const comicsCharactersData = await fetchCategoryCharacters(
          "comics",
          id
        );
        const comicsCharacters = comicsCharactersData.data.results;

        setCharacters(comicsCharacters);
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

export default ComicsCharacters;
