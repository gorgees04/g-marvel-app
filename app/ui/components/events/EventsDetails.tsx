"use client";
import { fetchCategoryById } from "@/app/lib/data";
import CardDetails from "../CardDetails";
import { getImageUrl, urlEventsById } from "@/app/lib/utils";
import { Events } from "@/app/lib/definitions";
import { useEffect, useState } from "react";
import DetailsSkeletonLoading from "../loading-skeleton/DetailsSkeletonLoading";

const EventsDetails = ({ id }: { id: string }) => {
  // fetch single event by id
  const [event, setEvent] = useState<Events[] | []>([]);
  const [loading, setLoading] = useState(true);

  // geting url from lib/utils.tsx file & fetch using useEffect method
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true); // set loading to false when data is fetching
        const URL = urlEventsById(id);
        const res = await fetch(URL);
        const data = await res.json();
        const eventsPage = data.data.results;
        setEvent(eventsPage);
      } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch data.");
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
      {event.map((comic: Events) => {
        return (
          <CardDetails
            name={comic.title}
            imgUrl={getImageUrl(comic.thumbnail)}
            description={comic.description}
            key={comic.id}
          />
        );
      })}
    </div>
  );
};

export default EventsDetails;
