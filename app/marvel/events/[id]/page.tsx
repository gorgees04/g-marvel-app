import EventsCharacters from "@/app/ui/components/events/EventsCharacters";
import EventsComics from "@/app/ui/components/events/EventsComics";
import EventsCreators from "@/app/ui/components/events/EventsCreators";
import EventsDetails from "@/app/ui/components/events/EventsDetails";
import EventsSeries from "@/app/ui/components/events/EventsSeries";
import EventsStories from "@/app/ui/components/events/EventsStories";

const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <section>
      <EventsDetails id={id} />

      <EventsCharacters id={id} />

      <EventsComics id={id} />

      <EventsCreators id={id} />

      <EventsSeries id={id} />

      <EventsStories id={id} />
    </section>
  );
};

export default page;
