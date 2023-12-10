import { fetchCategoryCharacters } from "@/app/lib/data";
import Collection from "../Collection";

const ComicsCharacters = async ({ id }: { id: string }) => {
  // Comics characters
  const comicsCharactersData = await fetchCategoryCharacters("comics", id);
  const comicsCharacters = comicsCharactersData.data.results;
  return (
    <div>
      <Collection title={"Characters"} category={comicsCharacters} />
    </div>
  );
};

export default ComicsCharacters;
