import CreatorsComics from "@/app/ui/components/creators/CreatorsComics";
import CreatorsDetails from "@/app/ui/components/creators/CreatorsDetails";
import CreatorsEvents from "@/app/ui/components/creators/CreatorsEvents";
import CreatorsSeries from "@/app/ui/components/creators/CreatorsSeries";
import CreatorsStories from "@/app/ui/components/creators/CreatorsStories";

const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <section>
      <CreatorsDetails id={id} />

      <CreatorsComics id={id} />

      <CreatorsEvents id={id} />

      <CreatorsSeries id={id} />

      <CreatorsStories id={id} />
    </section>
  );
};

export default page;
