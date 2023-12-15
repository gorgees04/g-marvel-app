"use client";
import { fetchCategory, fetchCategoryByName } from "@/app/lib/data";
import React, { useEffect, useState } from "react";
import Card from "../Card";
import NotFound from "@/app/marvel/not-found";
import { Comic } from "@/app/lib/definitions";
import CardsLoadingSkeletons from "../loading-skeleton/CardsLoadingSkeletons";

const Comics = ({ query, page }: { query?: string; page: string }) => {
  // main Comics & checking on loading
  const [comics, setComics] = useState<Comic[] | []>([]);
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
          data = await fetchCategoryByName("comics", query, offset.toString());
        } else {
          data = await fetchCategory("comics", offset.toString());
        }
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
  }, [query, page]);

  // if loading is true the loading skeletong will show up
  if (loading) {
    return <CardsLoadingSkeletons />;
  }

  return (
    <div>
      <div className="flex flex-wrap justify-center my-4 w-full">
        {comics.map((comic: Comic) => {
          return (
            <Card
              category="comics"
              key={comic.id}
              name={comic.title}
              img={comic.thumbnail}
              id={comic.id}
            />
          );
        })}
      </div>

      <div className="flex flex-wrap justify-center my-4 w-full"></div>
      {comics.length === 0 && (
        <div>
          <NotFound />
        </div>
      )}
    </div>
  );
};

export default Comics;
