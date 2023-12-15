import ComicsCharacters from "@/app/ui/components/comics/ComicsCharacters";
import ComicsCreators from "@/app/ui/components/comics/ComicsCreators";
import ComicsDetails from "@/app/ui/components/comics/ComicsDetails";
import ComicsEvents from "@/app/ui/components/comics/ComicsEvents";
import ComicsStories from "@/app/ui/components/comics/ComicsStories";

const page = ({ params }: { params: { id: string } }) => {
  // geting id from params
  const { id } = params;

  return (
    <section>
      <ComicsDetails id={id} />

      <ComicsCharacters id={id} />

      <ComicsCreators id={id} />

      <ComicsEvents id={id} />

      <ComicsStories id={id} />
    </section>
  );
};

export default page;
