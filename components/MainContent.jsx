import React, { useEffect, useState } from "react";
import Card from "./Card";

const MainContent = ({ data, setData, setFilter, isOpen, setFilterData }) => {
  const [sort, setSort] = useState({ type: "price", order: "desc" });
  const [dataItem, setDataItems] = useState();
  const [pageData, setPageData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  function paginate(array, page_size, page_number) {
    const NoofPages = Math.floor(data.length / 5);
    const pagination = [];
    for (let i = 0; i < NoofPages; i++) {
      pagination.push(i + 1);
    }
    setPageData(pagination);
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }
  useEffect(() => {
    setDataItems(paginate(data, 5, pageNumber));
  }, [dataItem, pageNumber]);

  const handeSelect = (e) => {
    if (e === "lowPrice") {
      setSort({ type: "price", order: "asc" });
    } else if (e === "highPrice") {
      setSort({ type: "price", order: "desc" });
    } else if (e === "shortDur") {
      setSort({ type: "duration", order: "asc" });
    } else if (e === "longDur") {
      setSort({ type: "duration", order: "desc" });
    } else if (e === "earlyDate") {
      setSort({ type: "departureDate", order: "asc" });
    } else if (e === "lateDate") {
      setSort({ type: "departureDate", order: "desc" });
    }
  };
  useEffect(() => {
    setSort({ type: "price", order: "asc" });
  }, []);
  useEffect(() => {
    if (sort.type === "price" && sort.order === "desc") {
      setData(data.sort((a, b) => (a.price < b.price ? 1 : -1)));
    }
    if (sort.type === "price" && sort.order === "asc") {
      setData(data.sort((a, b) => (a.price > b.price ? 1 : -1)));
    }
    if (sort.type === "duration" && sort.order === "desc") {
      setData(data.sort((a, b) => (a.duration < b.duration ? 1 : -1)));
    }
    if (sort.type === "duration" && sort.order === "asc") {
      setData(data.sort((a, b) => (a.duration > b.duration ? 1 : -1)));
    }
    if (sort.type === "departureDate" && sort.order === "desc") {
      setData(
        data.sort((a, b) => (a.departureDate < b.departureDate ? 1 : -1))
      );
    }
    if (sort.type === "departureDate" && sort.order === "asc") {
      setData(
        data.sort((a, b) => (a.departureDate > b.departureDate ? 1 : -1))
      );
    }
  }, [sort]);

  return (
    <div className={`${isOpen ? "lg:lg:w-[calc(100%-300px)]" : "w-[100%]"}`}>
      <div className="flex justify-between">
        <div className="ml-12 my-4 flex">
          <p className="text-lg font-medium">{data.length} trips found</p>
          <button
            className="ml-4 border border-black rounded-md px-2"
            onClick={() => {
              setFilterData();
              setDataItems(data);
              setFilter({
                departurePort: "",
                departureDate: "",
                duration: "",
                price: "",
                destination: [],
              });
            }}
          >
            reset filter
          </button>
        </div>
        <div className="flex items-center">
          <p className="mr-8 text-lg font-medium">Sort by</p>
          <select
            className="my-4 "
            onChange={(e) => {
              handeSelect(e.target.value);
            }}
          >
            <option value={"lowPrice"}>Price, Lowest first</option>
            <option value={"highPrice"}>Price, Highest first</option>
            <option value={"shortDur"}>Duration, Shortest first</option>
            <option value={"longDur"}>Duration, Longest first</option>
            <option value={"earlyDate"}>Date, Earliest first</option>
            <option value={"lateDate"}>Date, Latest first</option>
          </select>
        </div>
      </div>

      <div
        className={`h-[100%] pb-24 overflow-y-auto mt-12 lg:${
          isOpen ? "w-3/4" : ""
        }`}
      >
        <div className="">
          {dataItem &&
            dataItem.map((item, ind) => {
              return <Card key={ind} item={item} />;
            })}
        </div>
        <div className="flex pl-8 pt-2 pb-4">
          {pageData.map((item, index) => (
            <p
              className={`mr-2 cursor-pointer w-8 h-8 text-center pt-1 ${
                item === pageNumber ? "font-bold rounded-full bg-gray-200" : ""
              }`}
              key={index}
              onClick={() => {
                setPageNumber(item);
              }}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
