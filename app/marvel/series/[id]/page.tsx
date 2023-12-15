import SeriesCreators from "@/app/ui/components/series/SeriesCreators";
import SeriesCharacters from "@/app/ui/components/series/SeriesCharacters";
import SeriesComics from "@/app/ui/components/series/SeriesComics";
import SeriesDetails from "@/app/ui/components/series/SeriesDetails";
import SeriesEvents from "@/app/ui/components/series/SeriesEvents";
import SeriesStoriests from "@/app/ui/components/series/SeriesStoriests";

const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <section>
      <SeriesDetails id={id} />

      <SeriesCharacters id={id} />

      <SeriesComics id={id} />

      <SeriesCreators id={id} />

      <SeriesEvents id={id} />

      <SeriesStoriests id={id} />
    </section>
  );
};

export default page;
