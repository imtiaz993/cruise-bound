import React from "react";

const Card = ({ item }) => {
  return (
    <div className="  rounded-xl mb-4 mx-6 flex items-start shadow-lg shadow-gray-200">
      <div className="w-[30%]">
        <p className="relative text-sm top-8 left-2 bg-black inline-block text-white px-2 rounded-md">
          {item.departureDate} - {item.returnDate}
        </p>
        <img
          className="w-64 h-56  rounded-tl-lg rounded-bl-lg"
          src={item.ship.image}
          alt=""
        />
      </div>
      <div className="w-[75%]">
        <div className="flex pt-12  py-8 px-4 rounded-lg">
          <div className="w-[80%]">
            <h1 className="text-2xl font-medium">{item.name}</h1>
            <div className="flex mt-2">
              <p className="mr-6">{item.region}</p>
              <p className="mr-6">{item.duration} nights</p>
              <p className="mr-6">
                {item.ship.rating}{" "}
                <span className="text-gray-500 text-sm">
                  {item.ship.reviews} reviews
                </span>
              </p>
            </div>
            <div className="flex flex-wrap mt-4">
              {item.itinerary.map((it, index) => (
                <div key={index} className="flex items-center">
                  {index !== 0 && (
                    <img
                      className="w-4 h-2 ml-2 mr-1 "
                      src="/images/arrow.png"
                      alt=""
                    />
                  )}
                  <p>{it}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[20%]">
            <div>
              <img className="w-48 " src={item.ship.line.logo} alt="" />
            </div>
            <div>
              <p className="text-center">{item.ship.line.name}</p>
            </div>
          </div>
        </div>
        <div className="mt-2 flex justify-end items-center p-3">
          <div className="flex flex-col items-end">
            <p>Interior from</p>
            <p>
              <span>$</span>
              <span className="text-2xl font-semibold ">{item.price}</span>
            </p>
          </div>
          <button className="ml-4 bg-blue-500 text-white font-bold py-3 px-4 rounded-md">
            See Sailings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
