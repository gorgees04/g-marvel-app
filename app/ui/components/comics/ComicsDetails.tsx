"use client";
import { fetchCategoryById } from "@/app/lib/data";
import React, { useEffect, useState } from "react";
import CardDetails from "../CardDetails";
import { getImageUrl } from "@/app/lib/utils";
import { Comic } from "@/app/lib/definitions";
import DetailsSkeletonLoading from "../loading-skeleton/DetailsSkeletonLoading";

const ComicsDetails = ({ id }: { id: string }) => {
  const [comic, setComic] = useState<Comic[] | []>([]);
  const [loading, setLoading] = useState(true);

  // geting url from lib/utils.tsx file & fetch using useEffect method
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true); // set loading to false when data is fetching
        // fetch single comic by id
        const comicsIdData = await fetchCategoryById("comics", id);
        const comicsPage = comicsIdData.data.results;
        setComic(comicsPage);
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

  // get date from api
  const getPublishedDate = (dateOfPublish: string) => {
    const date = new Date(dateOfPublish);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month}-${day}`;
  };
  return (
    <div className="m-10">
      {comic.map((comic: Comic) => {
        return (
          <CardDetails
            name={comic.title}
            imgUrl={getImageUrl(comic.thumbnail)}
            description={comic.description}
            date={getPublishedDate(comic.dates[0].date)}
            key={comic.id}
          />
        );
      })}
    </div>
  );
};

export default ComicsDetails;
