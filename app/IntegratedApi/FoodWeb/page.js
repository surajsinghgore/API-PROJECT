import React from "react";
import style from "./page.module.css";
import Image from "next/legacy/image";
export default async function page() {
  const res = await fetch(process.env.NEXT_PUBLIC_FOOD_API);
  const data = await res.json();

  return (
    <div className={style.FoodWeb}>
      {data.hints.map((item) => {
        return (
          <div
            className="mb-10 bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative"
            key={item.food.foodId}
          >
            <span className="bg-red-100 border border-red-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4 ">
              {item.food.categoryLabel}
            </span>
            <div className={style.ImageCon}>

            <Image
              className="-z-50 w-64 mx-auto transform transition duration-300 hover:scale-105"
              src={item.food.image}
              alt={item.food.image}
              layout="fill"
            />
            </div>
            <div className="flex flex-col items-center my-3 space-y-2">
              <h1 className="text-gray-900 poppins text-lg">
                {item.food.category}
              </h1>
              <p className="text-gray-500 poppins text-sm text-center">
                Gay one the what walk then she. Demesne mention pr
              </p>
              <h2 className="text-gray-900 poppins text-2xl font-bold">
                $10.99
              </h2>
              <button
                className="bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105"
                fdprocessedid="noic2i"
              >
                Order Now
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
