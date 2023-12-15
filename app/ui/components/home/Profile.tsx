"use client";
import { urlCharacters } from "@/app/lib/utils";
import { useState, useEffect } from "react";
import Collection from "../Collection";

export default function Profile() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(urlCharacters("0"))
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.results);

        setData(data.data.results);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div className="w-screen">
      <Collection title="charcters" category={data} />
    </div>
  );
}
