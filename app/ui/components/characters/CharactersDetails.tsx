"use client";
import { Character } from "@/app/lib/definitions";
import CardDetails from "../CardDetails";
import { getImageUrl } from "@/app/lib/utils";
import { useEffect, useState } from "react";
import DetailsSkeletonLoading from "../loading-skeleton/DetailsSkeletonLoading";
import { fetchCategoryById } from "@/app/lib/data";

const CharactersDetails = ({ id }: { id: string }) => {
  // main characters & checking on loading
  const [character, setCharater] = useState<Character[] | []>([]);
  const [loading, setLoading] = useState(true);

  // geting url from lib/utils.tsx file & fetch using useEffect method
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true); // set loading to false when data is fetching
        // fetching character by id
        const data = await fetchCategoryById("characters", id);
        const fetchedCharacter = data.data.results;
        setCharater(fetchedCharacter);
      } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch characters data.");
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
      {character.map((character: Character) => {
        return (
          <CardDetails
            name={character.name}
            imgUrl={getImageUrl(character.thumbnail)}
            description={character.description}
            key={character.id}
          />
        );
      })}
    </div>
  );
};

export default CharactersDetails;
