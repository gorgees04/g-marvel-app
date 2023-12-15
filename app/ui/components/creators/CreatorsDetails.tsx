"use client";
import { fetchCategoryById } from "@/app/lib/data";
import React, { useEffect, useState } from "react";
import CardDetails from "../CardDetails";
import { getImageUrl, urlCreatorsById } from "@/app/lib/utils";
import { Creators } from "@/app/lib/definitions";
import DetailsSkeletonLoading from "../loading-skeleton/DetailsSkeletonLoading";

const CreatorsDetails = ({ id }: { id: string }) => {
  // fetch Creators page by id
  const [creator, setCreator] = useState<Creators[] | []>([]);
  const [loading, setLoading] = useState(true);

  // geting url from lib/utils.tsx file & fetch using useEffect method
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true); // set loading to false when data is fetching
        // fetch single comic by id
        const URL = urlCreatorsById(id);
        const res = await fetch(URL);
        const data = await res.json();
        const creatorsPage = data.data.results;
        setCreator(creatorsPage);
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
      {creator.map((creator: Creators) => {
        return (
          <CardDetails
            name={creator.fullName}
            imgUrl={getImageUrl(creator.thumbnail)}
            key={creator.id}
          />
        );
      })}
    </div>
  );
};

export default CreatorsDetails;
