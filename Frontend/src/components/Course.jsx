import React, { useEffect, useState } from "react";
import axios from "axios";

import Cards from "./Cards";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="pt-44 max-w-screen-2xl mx-auto container md:px-20 px-8 ">
        <div className="items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We're delighted to have you&nbsp;
            <span className="text-pink-500">&nbsp;Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
            rem debitis labore quibusdam? Nulla itaque dolorem reprehenderit
            minima excepturi. Tenetur officiis fuga vero totam incidunt suscipit
            reiciendis ut. Laboriosam, unde. Dolorum iusto quas quo voluptate
            error dolore odit iste debitis animi, vel repellat, nulla earum
            maiores ratione quibusdam laudantium. Ad!
          </p>
          <Link to="/">
            <button className="bg-pink-500 font-semibold text-white px-7 py-3 mt-8 rounded-lg hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {book.map((data) => (
            <Cards item={data} key={data.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
