import style from './page.module.css'
import Link from 'next/link';
import Image from "next/legacy/image";

export default function page() {
  return (
    <div className={style.IntegratedApi}>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link href="/IntegratedApi/FoodWeb">
          <img
            className="p-8 rounded-t-lg"
            src="/foodweb.png"
            alt="product image"
          />
        </Link>
        <div className="px-5 pb-5">
          <Link href="/IntegratedApi/FoodWeb">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              FooD Data API
            </h5>
          </Link>
        
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
             
            </span>
            <Link
              href="/IntegratedApi/FoodWeb"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
             Watch Live
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
