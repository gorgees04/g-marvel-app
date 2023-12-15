"use client";
import Card from "@/app/ui/components/Card";
import NotFound from "@/app/marvel/not-found";
// typescript definitions
import { Character } from "@/app/lib/definitions";
import { useEffect, useState } from "react";
import CardsLoadingSkeletons from "../loading-skeleton/CardsLoadingSkeletons";
import { fetchCategory, fetchCategoryByName } from "@/app/lib/data";
import { urlCharacters, urlCharactersByName } from "@/app/lib/utils";

export default function Characters({
  query,
  page,
}: {
  query?: string;
  page: string;
}) {
  // main characters & checking on loading
  const [characters, setCharaters] = useState<Character[] | []>([]);
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
          ? urlCharactersByName(query, offset.toString())
          : urlCharacters(offset.toString());

        const res = await fetch(URL);
        const data = await res.json();
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
  }, [query, page]);

  // if loading is true the loading skeletong will show up
  if (loading) {
    return <CardsLoadingSkeletons />;
  }

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="flex flex-wrap justify-center my-4 w-full">
        {characters.map((character: Character) => {
          return (
            <Card
              category="characters"
              key={character.id}
              id={character.id}
              name={character.name}
              img={character.thumbnail}
            />
          );
        })}
      </div>
      {characters.length === 0 && (
        <div>
          <NotFound />
        </div>
      )}
    </section>
  );
}
