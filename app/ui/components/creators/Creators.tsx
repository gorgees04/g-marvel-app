"use client";
import { fetchCategory, fetchCategoryByName } from "@/app/lib/data";
import { Creators } from "@/app/lib/definitions";
import React, { useEffect, useState } from "react";
import Card from "../Card";
import NotFound from "@/app/marvel/not-found";
import CardsLoadingSkeletons from "../loading-skeleton/CardsLoadingSkeletons";

const Creators = ({ query, page }: { query?: string; page: string }) => {
  // main creators & checking on loading
  const [creators, setCreators] = useState<Creators[] | []>([]);
  const [loading, setLoading] = useState(true);

  // handling pagination
  // whenever a click the oofset will be multiplie with page number
  const offset = 30 * Number(page);

  // geting url from lib/utils.tsx file & fetch using useEffect method
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true); // Set loading to false when data is fetching
        let data;
        if (query) {
          data = await fetchCategoryByName(
            "creators",
            query,
            offset.toString()
          );
        } else {
          data = await fetchCategory("creators", offset.toString());
        }
        const fetchedCreators = data.data.results;
        setCreators(fetchedCreators);
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
        {creators.map((creator: Creators) => {
          return (
            <Card
              category="creators"
              key={creator.id}
              name={creator.fullName}
              img={creator.thumbnail}
              id={creator.id}
            />
          );
        })}
      </div>
      <div className="flex flex-wrap justify-center my-4 w-full"></div>
      {creators.length === 0 && (
        <div>
          <NotFound />
        </div>
      )}
    </div>
  );
};

export default Creators;
