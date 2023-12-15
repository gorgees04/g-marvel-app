"use client";
import Image from "next/image";
import Link from "next/link";
import avengersImg from "@/app/ui/img/avengers-1.png";
import { Suspense, useEffect, useState } from "react";
import CollectionLoadingSkeleton from "./ui/components/loading-skeleton/CollectionLoadingSkeleton";
import HomeCharacters from "./ui/components/home/HomeCharacters";
import HomeComics from "./ui/components/home/HomeComics";
import HomeCreators from "./ui/components/home/HomeCreators";
import HomeEvents from "./ui/components/home/HomeEvents";
import HomeSeries from "./ui/components/home/HomeSeries";
import { CollectionType } from "./lib/definitions";
import { fetchCategory } from "./lib/data";
import Collection from "./ui/components/Collection";

export default function Home() {
  const [characters, setCharaters] = useState<CollectionType[] | []>([]);
  const [loading, setLoading] = useState(true);

  // geting url from lib/utils.tsx file & fetch using useEffect method
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true); // Set loading to false when data is fetching
        const data = await fetchCategory("characters", "0");
        const fetchedCharacters = data.data.results;
        setCharaters(fetchedCharacters);
      } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch characters data.");
      } finally {
        setLoading(false); // Set loading to false after data complete fetching
      }
    };

    getData();
  }, []);

  return (
    <main className="text-white flex items-center justify-center flex-col my-[80px] mx-[30px] sm:my-[100px] sm:mx-[180px]">
      <div className="text-center mt-10">
        <h1 className="text-3xl sm:text-6xl mb-2 font-bold">
          Welcome to G-Marvel website
        </h1>
        <p className="text-slate-300 my-10">
          Here we only talk about our marvel universe & our heros
        </p>
      </div>
      <div>
        <Image
          src={avengersImg}
          alt="avengers image"
          width={500}
          height={0}
          priority={true}
        />
      </div>
      <div>
        <Link href={"/marvel"}>
          <h2 className="mt-5 text-lg text-center border-4 bg-marvelRed text-white p-2 hover:bg-offWhite hover:border-marvelRed hover:text-marvelRed">
            Explore the Marvel Universe &gt;&gt;
          </h2>
        </Link>
      </div>
      <div className="text-center mt-14 text-slate-500 animate-bounce">
        <h1>Scroll down to see the categories</h1>
        <p>VVV</p>
      </div>
      <div className="my-10">
        {/* <HomeCharacters /> */}
        <Collection title="Characters" category={characters} />
        {/* <HomeComics />

        <HomeCreators />

        <HomeEvents />

        <HomeSeries /> */}
      </div>
    </main>
  );
}
