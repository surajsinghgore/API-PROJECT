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
          <a
            href={item.food.image}
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-2 flex-wrap"
            key={item.foodId}
          >
            <div className={style.ImageCon}>
              <Image
                className="w-64 mx-auto transform transition duration-300 hover:scale-105"
                src={item.food.image}
                alt={item.food.image}
                layout="fill"
              />
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal w-40">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.food.categoryLabel}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.food.label}
              </p>
            </div>
          </a>
        );
      })}
    </div>
  );
}
