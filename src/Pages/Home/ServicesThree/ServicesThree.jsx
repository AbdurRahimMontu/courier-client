import React, { useEffect, useState } from "react";

const ServicesThree = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/items.json")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);
  return (
    <div className="lg:w-7xl  mx-auto py-10 bg-base-300">
      {items.map((item, index) => (
        <div
          key={index}
          className="py-10 lg:grid items-center lg:grid-cols-4  bg-base-100 shadow-sm"
        >
          <figure className="col-span-1 flex justify-center ">
            <img src={item.image} alt="Movie" className="size-40 " />
            <span className="border border-dashed hidden lg:block px-0.1 ml-15"></span>
          </figure>
          <div className="card-body col-span-3">
            <h2 className="card-title">{item.title}</h2>
            <p className=" text-justify">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesThree;
