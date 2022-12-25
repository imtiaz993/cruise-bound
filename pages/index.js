import { useEffect, useState } from "react";
import Filter from "../components/Filter";
import FilterToggle from "../components/FilterToggle";
import MainContent from "../components/MainContent";
import Response from "../utils/mock.json";
export default function Index() {
  const [data, setData] = useState(Response.results);
  const [isOpen, setIsOpen] = useState(true);
  const [filter, setFilter] = useState({
    ship: "",
    departureDate: "",
    duration: "",
    port: "",
    destination: [],
  });
  const [filterData, setFilterData] = useState();
  useEffect(() => {
    let newFilteredData;
    if (filter.departureDate) {
      newFilteredData = data.filter(
        (item) =>
          item.itinerary.some((r) => filter.destination.indexOf(r) >= 0) ||
          item.itinerary.at(0).toString().includes(filter.port) ||
          item.departureDate == filter.departureDate ||
          item.duration == filter.duration ||
          item.ship.name == filter.ship
      );
      console.log(newFilteredData);
      setFilterData([...newFilteredData]);
    }
  }, [filter]);
  return (
    <div className="flex justify-between md:w-11/12 h-[100vh] overflow-hidden">
      <FilterToggle isOpen={isOpen} setIsOpen={setIsOpen} />
      <Filter
        filter={filter}
        setFilter={setFilter}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setFilterData={setFilterData}
      />
      <MainContent
        data={filterData ? filterData : data}
        setData={setData}
        setFilter={setFilter}
        isOpen={isOpen}
        setFilterData={setFilterData}
      />
    </div>
  );
}
