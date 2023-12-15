"use client";
import { fetchCategorySeries } from "@/app/lib/data";
import Collection from "../Collection";
import CollectionLoadingSkeleton from "../loading-skeleton/CollectionLoadingSkeleton";
import { useEffect, useState } from "react";
import { CollectionType } from "@/app/lib/definitions";

const EventsSeries = ({ id }: { id: string }) => {
  const [series, setSeries] = useState<CollectionType[] | []>([]);
  const [loading, setLoading] = useState(true);

  // geting url from lib/utils.tsx file & fetch using useEffect method
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true); // set loading to false when data is fetching
        // Events Series
        const eventsSeriesData = await fetchCategorySeries("events", id);
        const eventsSeries = eventsSeriesData.data.results;
        setSeries(eventsSeries);
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

export default EventsSeries;
