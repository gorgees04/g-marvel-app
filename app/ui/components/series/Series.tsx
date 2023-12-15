"use client";
import { fetchCategory, fetchCategoryByName } from "@/app/lib/data";
import { Series } from "@/app/lib/definitions";
import Card from "../Card";
import NotFound from "@/app/marvel/not-found";
import { useEffect, useState } from "react";
import CardsLoadingSkeletons from "../loading-skeleton/CardsLoadingSkeletons";
import { urlSeries, urlSeriesByTitle } from "@/app/lib/utils";

const Series = ({ query, page }: { query?: string; page: string }) => {
  // main series & checking on loading
  const [series, setSeries] = useState<Series[] | []>([]);
  const [loading, setLoading] = useState(true);

  // handling pagination
  // whenever a click the oofset will be multiplie with page number
  const offset = 30 * Number(page);

  // geting url from lib/utils.tsx file & fetch using useEffect method
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true); // Set loading to false when data is fetching

        const URL = query
          ? urlSeriesByTitle(query, offset.toString())
          : urlSeries(offset.toString());

        const res = await fetch(URL);
        const data = await res.json();
        const fetchSeries = data.data.results;

        setSeries(fetchSeries);
      } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch data.");
      } finally {
        setLoading(false); // Set loading to false after data complete fetching
      }
    };

    getData();
  }, [query, page]);

  // if loading is true the loading skeletong will show up
  if (loading) {
    return <CardsLoadingSkeletons />;
  }
  return (
    <div>
      <div className="flex flex-wrap justify-center my-4 w-full">
        {series.map((aSeries: Series) => {
          return (
            <Card
              category="series"
              key={aSeries.id}
              name={aSeries.title}
              img={aSeries.thumbnail}
              id={aSeries.id}
            />
          );
        })}
      </div>
      <div className="flex flex-wrap justify-center my-4 w-full"></div>
      {series.length === 0 && (
        <div>
          <NotFound />
        </div>
      )}
    </div>
  );
};

export default Series;
