import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";
const Course = () => {
  const filterData = list.filter((data) => data.category === "paid");

  // console.log(list);
  return (
    <div className="pt-4 dark:bg-slate-900 dark:text-white">
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-24 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you
            <span className="text-pink-500"> Here! : </span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quia
            officiis est dolor atque, assumenda aliquam at, nobis molestias
            culpa tempora cupiditate obcaecati illo laboriosam asperiores rerum
            voluptas odio eum!
          </p>

          <div className="mt-4">
            <Link
              to={"/"}
              className=" mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300"
            >
              back
            </Link>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filterData.map((item, key) => {
            return <Cards item={item} key={key} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Course;
