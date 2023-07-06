import { useEffect, useState } from "react";
import Select from "react-select";
import { useSelector } from "../store";
import { places } from "../utils";

function Filter({
  handleFilter,
}: {
  handleFilter: (location: string, name: string, category: string) => void;
}) {
  const [locationQuery, setLocationQuery] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const { location } = useSelector((state: any) => state.app);

  useEffect(() => {
    setLocationQuery(location);
  }, [location]);

  useEffect(() => {
    if (!!locationQuery || !!name || !!category) {
      handleFilter(locationQuery, name, category);
    }
  }, [locationQuery, name, category]);

  const handleChange = (selectedOption: any) => {
    setLocationQuery(selectedOption ? selectedOption.value : "");
  };

  const options = places.map((place: any) => ({
    value: place.name,
    label: place.name,
  }));

  const handleInputChange = (e: any, type: string): void => {
    type === "name" && setName(e.target.value);
    // type === 'type' &&  setCategory(e.target.value);
  };

  return (
    <div className="isolate bg-white py-24 p-8">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold leading-6 text-gray-900">
            Event Name
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => handleInputChange(e, "name")}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold leading-6 text-gray-900">
            Event Type
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="type"
              id="type"
              onChange={(e) => handleInputChange(e, "type")}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold leading-6 text-gray-900">
            Location
          </label>
          <div className="mt-2.5">
            <Select
              value={{ value: locationQuery, label: locationQuery }}
              onChange={handleChange}
              options={options}
              className="min-w-0 flex-auto rounded-md border-0 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              placeholder="Search for a place"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold leading-6 text-gray-900">
            Event Date
          </label>
          <div className="mt-2.5">
            <input
              type="date"
              name="company"
              id="company"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
