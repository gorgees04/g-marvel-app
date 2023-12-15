"use client";
import { fetchCategoryById } from "@/app/lib/data";
import { Series } from "@/app/lib/definitions";
import CardDetails from "../CardDetails";
import { getImageUrl } from "@/app/lib/utils";
import { useEffect, useState } from "react";
import DetailsSkeletonLoading from "../loading-skeleton/DetailsSkeletonLoading";

const SeriesDetails = ({ id }: { id: string }) => {
  // fetch single series by id
  const [series, setSeries] = useState<Series[] | []>([]);
  const [loading, setLoading] = useState(true);

  // geting url from lib/utils.tsx file & fetch using useEffect method
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true); // set loading to false when data is fetching
        // fetch single series
        const seriesIdData = await fetchCategoryById("series", id);
        const seriesPage = seriesIdData.data.results;
        setSeries(seriesPage);
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
    return <DetailsSkeletonLoading />;
  }
  return (
    <div className="m-10">
      {series.map((aSeries: Series) => {
        return (
          <CardDetails
            name={aSeries.title}
            imgUrl={getImageUrl(aSeries.thumbnail)}
            description={aSeries.description}
            key={aSeries.id}
          />
        );
      })}
    </div>
  );
};

export default SeriesDetails;
