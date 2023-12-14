"use client";
import { fetchCategorySeries } from "@/app/lib/data";
import React, { useEffect, useState } from "react";
import Collection from "../Collection";
import { CollectionType } from "@/app/lib/definitions";
import CollectionLoadingSkeleton from "../loading-skeleton/CollectionLoadingSkeleton";

const CharactersSeries = ({ id }: { id: string }) => {
  // main characters & checking on loading
  const [series, setSeries] = useState<CollectionType[] | []>([]);
  const [loading, setLoading] = useState(true);

  // geting url from lib/utils.tsx file & fetch using useEffect method
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true); // set loading to false when data is fetching
        // characters series
        const characterSeriesData = await fetchCategorySeries("characters", id);
        const characterSeries = characterSeriesData.data.results;
        setSeries(characterSeries);
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
      <Collection title={"Series"} category={series} />
    </div>
  );
};

export default CharactersSeries;
