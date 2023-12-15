"use client";
import { fetchCategory, fetchCategoryByName } from "@/app/lib/data";
import { Events } from "@/app/lib/definitions";
import Card from "../Card";
import NotFound from "@/app/marvel/not-found";
import { useEffect, useState } from "react";
import CardsLoadingSkeletons from "../loading-skeleton/CardsLoadingSkeletons";

const Events = ({ query, page }: { query?: string; page: string }) => {
  // main events & checking on loading
  const [events, setEvents] = useState<Events[] | []>([]);
  const [loading, setLoading] = useState(true);

  // handling pagination
  // whenever a click the oofset will be multiplie with page number
  const offset = 30 * Number(page);

  // geting url from lib/utils.tsx file & fetch using useEffect method
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true); // Set loading to false when data is fetching
        let data;
        if (query) {
          data = await fetchCategoryByName("events", query, offset.toString());
        } else {
          data = await fetchCategory("events", offset.toString());
        }
        const fetchedEvents = data.data.results;
        setEvents(fetchedEvents);
      } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch data.");
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
    <div>
      <div className="flex flex-wrap justify-center my-4 w-full">
        {events.map((event: Events) => {
          return (
            <Card
              category="events"
              key={event.id}
              name={event.title}
              img={event.thumbnail}
              id={event.id}
            />
          );
        })}
      </div>
      <div className="flex flex-wrap justify-center my-4 w-full"></div>
      {events.length === 0 && (
        <div>
          <NotFound />
        </div>
      )}
    </div>
  );
};

export default Events;
