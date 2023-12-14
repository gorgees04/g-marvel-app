import CharactersComics from "@/app/ui/components/characters/CharactersComics";
import CharactersDetails from "@/app/ui/components/characters/CharactersDetails";
import CharactersEvents from "@/app/ui/components/characters/CharactersEvents";
import CharactersSeries from "@/app/ui/components/characters/CharactersSeries";
import CharactersStories from "@/app/ui/components/characters/CharactersStories";

const page = ({ params }: { params: { id: string } }) => {
  // geting params from url depending on character's id
  const { id } = params;

  return (
    <section>
      <CharactersDetails id={id} />

      <CharactersComics id={id} />

      <CharactersSeries id={id} />

      <CharactersEvents id={id} />

      <CharactersStories id={id} />
    </section>
  );
};

export default page;
