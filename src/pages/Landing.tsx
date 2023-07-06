import { Helmet } from "react-helmet";
import Header from "../components/Header";
import { EventType } from "../types/event";
import Item from "../components/Item";
import { useSelector } from "../store";

function Landing() {
  const { filteredEvents } = useSelector((state: any) => state.app);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Enjoy the breathtaking sights and sounds of any city."
        />
        <meta
          name="keywords"
          content="Event, Scheduling, Place, Location, Service"
        />
        <title>{`Event App | Home`}</title>
      </Helmet>
      <Header />
      <div className="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-3 gap-6 p-16 mx-auto max-w-7xl px-6 lg:px-8">
        {filteredEvents &&
          filteredEvents.map((event: EventType) => (
            <Item key={event.id} event={event} />
          ))}
      </div>
    </>
  );
}

export default Landing;
