import React from "react";
import Cards from "./Cards";
import Slider from "react-slick";
import list from "../../public/list.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FreeBook() {
  const filterData = list.filter((data) => data.category === "Free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl mx-auto container md:px-20 px-8">
        <div>
          <h1 className="font-bold text-xl pb-4">Free Offered Course</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            similique obcaecati dolorem enim sit, quae, reprehenderit voluptatem
            quisquam itaque saepe ex in, nihil assumenda non.
            {/* <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellendus, facere dicta excepturi quae in est. Aspernatur
              incidunt doloremque error impedit! Animi aliquam vitae magni
              explicabo ex voluptatem assumenda sapiente iure fugit temporibus
              hic laborum a consectetur adipisci possimus omnis, commodi sit
              officia natus corporis tempora doloribus unde! Consequuntur illo
              asperiores quam. Facere eveniet, totam porro facilis, sint, maxime
              autem corporis suscipit doloribus a cumque alias eos quas quidem
              maiores accusantium iste nostrum dolorem eius fugiat aperiam?
              Commodi nobis eligendi quia adipisci sequi enim eius tempora illo
              maiores iste ea accusantium totam quo dolor numquam error, fugit
              et ad quae? Neque vero doloribus quis cupiditate nihil, error
              inventore culpa odit porro laboriosam animi architecto numquam
              possimus maiores omnis deleniti nisi adipisci, rem voluptatum
              totam quia, debitis necessitatibus expedita. Libero doloribus
              explicabo modi fugiat pariatur architecto. Sint, obcaecati. Amet,
              minima! Numquam libero consectetur praesentium neque ipsum
              pariatur autem eligendi id eum, quisquam tenetur dolores officiis,
              quaerat ducimus voluptas? Ab, dolor. Voluptate aspernatur amet
              labore, reprehenderit voluptates magni cum beatae accusamus
              possimus dolor! Atque aperiam debitis aut ipsa laudantium odit
              quod tenetur quasi, minus reiciendis pariatur autem, vel, ratione
              obcaecati provident asperiores magnam quaerat assumenda aspernatur
              iste placeat! Autem accusamus odit ipsum expedita.
            </p> */}
          </p>
        </div>
        <div className="">
          <Slider {...settings}>
            {filterData.map((data) => (
              <Cards item={data} key={data.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default FreeBook;
