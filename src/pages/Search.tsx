import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { useSelector } from "../store";
import Filter from "../components/Filter";
import { EventType } from "../types/event";
import Item from "../components/Item";

function Search() {
  const { filteredEvents } = useSelector((state: any) => state.app);
  const [events, setEvents] = useState<EventType[]>([]);

  useEffect(() => {
    setEvents(filteredEvents);
  }, [filteredEvents]);

  const handleFilter = (location: string, name: string, category: string) => {
    const data =
      filteredEvents &&
      filteredEvents.filter(
        (event: EventType) =>
          (!!location && event.location.includes(location)) ||
          (!!name && event.title.includes(name)) ||
          (!!category && event.category === category)
      );
    setEvents(data);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Event app search page" />
        <meta name="keywords" content='search, filter, date, keywords, event name, event, description' />
        <title>{`Event App | Search`}</title>
      </Helmet>
      <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-5 sm:grid-cols-3 mx-auto max-w-7xl ">
        <div className="order-last grid col-span-4 grid-cols-1 md:grid-cols-2 sm:grid-cols-3 gap-6 p-16 mx-auto max-w-7xl px-6 lg:px-8">
          {events &&
            events.map((event: EventType) => (
              <Item key={event.id} event={event} />
            ))}
        </div>
        <Filter handleFilter={handleFilter} />
      </div>
    </>
  );
}

export default Search;
