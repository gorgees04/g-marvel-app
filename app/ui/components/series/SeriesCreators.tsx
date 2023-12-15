"use client";
import { fetchCategoryCreators } from "@/app/lib/data";
import Collection from "../Collection";
import { CollectionType } from "@/app/lib/definitions";
import { useEffect, useState } from "react";
import CollectionLoadingSkeleton from "../loading-skeleton/CollectionLoadingSkeleton";

const SeriesCreators = ({ id }: { id: string }) => {
  const [creators, setCreators] = useState<CollectionType[] | []>([]);
  const [loading, setLoading] = useState(true);

  // geting url from lib/utils.tsx file & fetch using useEffect method
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true); // set loading to false when data is fetching
        // Series Creators
        const seriesCreatorsData = await fetchCategoryCreators("series", id);
        const seriesCreators = seriesCreatorsData.data.results;

        setCreators(seriesCreators);
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
      <Collection title={"Creators"} category={creators} />
    </div>
  );
};

export default SeriesCreators;
