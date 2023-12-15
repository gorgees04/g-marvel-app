"use client";
import { fetchCategoryComics } from "@/app/lib/data";
import React, { useEffect, useState } from "react";
import Collection from "../Collection";
import { CollectionType } from "@/app/lib/definitions";
import CollectionLoadingSkeleton from "../loading-skeleton/CollectionLoadingSkeleton";

const CreatorsComics = ({ id }: { id: string }) => {
  const [comics, setComics] = useState<CollectionType[] | []>([]);
  const [loading, setLoading] = useState(true);

  // geting url from lib/utils.tsx file & fetch using useEffect method
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true); // set loading to false when data is fetching
        // Creators Comics
        const creatorsComicsData = await fetchCategoryComics("creators", id);
        const creatorsComics = creatorsComicsData.data.results;
        setComics(creatorsComics);
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

export default CreatorsComics;
