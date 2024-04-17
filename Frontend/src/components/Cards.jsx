import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-8 my-5 p-3">
        <div className="card w-92 bg-base-300 shadow-2xl hover:scale-105 dark:bg-slate-100 dark:text-black">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="font-normal badge badge-secondary ">
                {item.category}
              </div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="border-[1px] rounded-full px-1.5 py-0.5 badge-outline mt-1">
                Rs: {item.price}
              </div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-black duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
