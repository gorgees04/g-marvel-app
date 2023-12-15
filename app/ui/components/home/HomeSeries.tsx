"use client";
import { fetchCategory } from "@/app/lib/data";
import Collection from "../Collection";
import { useEffect, useState } from "react";
import { CollectionType } from "@/app/lib/definitions";
import CollectionLoadingSkeleton from "../loading-skeleton/CollectionLoadingSkeleton";
import { urlSeries } from "@/app/lib/utils";

const HomeSeries = () => {
  // fetrching series data
  const [series, setSeries] = useState<CollectionType[] | []>([]);
  const [loading, setLoading] = useState(true);

  // geting url from lib/utils.tsx file & fetch using useEffect method
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true); // Set loading to false when data is fetching
        const URL = urlSeries("0");
        const res = await fetch(URL);
        const data = await res.json();
        const fetchedSeries = data.data.results;
        setSeries(fetchedSeries);
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
    <div className="w-screen">
      <Collection category={series} title="Series" />
    </div>
  );
};

export default HomeSeries;
