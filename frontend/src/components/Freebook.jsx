import React from "react";
import List from "./List";
import Cards from "./Cards";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Freebook = () => {
  const filterData = List.filter((data) => data.category ==="free");
//   console.log(filterData);

  let settings = {
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
          slidesToShow:2,
          slidesToScroll:2,
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
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
    <div>
      <h1 className="font-semibold text-xl pb-2">Free Offered Cources</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati,
        necessitatibus odio id sed eligendi consequatur delectus? Impedit
        explicabo delectus doloribus, asperiores dolorem, facere unde voluptatum
        maxime quos modi quidem eum?
      </p>
      </div>

      <div>
        <Slider {...settings}>
        {filterData.map((item,key)=>{
                return(
                     <Cards item={item} key={key}/>
                )
        })}
        </Slider>
     </div>
    </div>
  );
};

export default Freebook;

// slick slider   npm i react-slick --save
//  npm install slick-carousel --save
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
