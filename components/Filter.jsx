import React, { useState } from "react";

const Filter = ({ filter, setFilter, isOpen, setIsOpen, setFilterData }) => {
  const [port, setPort] = useState();
  return (
    <div
      className={` w-[270px] absolute lg:static z-10 md:w-[300px] lg:w-[300px] h-full bg-gray-800 py-4 px-6 ${
        isOpen ? "block" : "hidden"
      } `}
    >
      <div>
        <div className="flex justify-end mb-6">
          <div
            className="bg-gray-700 px-4 py-1 text-center text-white cursor-pointer"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            X
          </div>
        </div>
        <div>
          <div className="my-6">
            <div className="my-2 flex  justify-between">
              <p className="text-gray-500 text-lg mb-1">Distination</p>
              <button
                className="bg-white rounded-md px-2"
                onClick={() => {
                  setFilter((prev) => ({
                    ...prev,
                    destination: [...prev.destination, port],
                  }));
                  setPort("");
                }}
              >
                add
              </button>
            </div>
            <div>
              <input
                type="text"
                className="w-full p-2 outline-none rounded-md"
                placeholder="Any port"
                value={port}
                onChange={(e) => {
                  setPort(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="flex flex-wrap">
            {filter.destination.map((item, index) => (
              <div
                key={index}
                className="my-1 mr-2 flex justify-between items-center bg-white p-2 rounded-md"
              >
                <p>{item}</p>
                <span
                  className="ml-2 cursor-pointer"
                  onClick={() => {
                    const newDest = filter.destination.filter(
                      (it, ind) => ind !== index
                    );
                    setFilter((prev) => ({
                      ...prev,
                      destination: [...newDest],
                    }));
                  }}
                >
                  x
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="my-6">
          <p className="text-gray-500 text-lg mb-1">Departure port</p>
          <div>
            <input
              type="text"
              className="w-full p-2 outline-none rounded-md"
              placeholder="Any port"
              value={filter.port}
              onChange={(e) => {
                setFilter((prev) => ({
                  ...prev,
                  port: e.target.value,
                }));
              }}
            />
          </div>
        </div>
        <div className="my-6">
          <p className="text-gray-500 text-lg mb-1">Dates</p>
          <div>
            <input
              type="date"
              className="w-full p-2 outline-none rounded-md"
              placeholder="Any date"
              value={filter.departureDate}
              onChange={(e) => {
                setFilter((prev) => ({
                  ...prev,
                  departureDate: e.target.value,
                }));
              }}
            />
          </div>
        </div>
        <div className="my-6">
          <p className="text-gray-500 text-lg mb-1">Duration</p>
          <div>
            <input
              type="text"
              className="w-full p-2 outline-none rounded-md"
              placeholder="Any duration"
              value={filter.duration}
              onChange={(e) => {
                setFilter((prev) => ({ ...prev, duration: e.target.value }));
              }}
            />
          </div>
        </div>
        <div className="my-6">
          <p className="text-gray-500 text-lg mb-1">Cruiseline</p>
          <div>
            <input
              type="text"
              className="w-full p-2 outline-none rounded-md"
              placeholder="Any ship"
              value={filter.ship}
              onChange={(e) => {
                setFilter((prev) => ({ ...prev, ship: e.target.value }));
              }}
            />
          </div>
        </div>
      </div>
      <div className="text-center">Logo</div>
    </div>
  );
};

export default Filter;
