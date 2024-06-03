import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-2xl mt-[64px] min-h-screen container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
        <h1 className="text-4xl  my-12 pt-8">About Us</h1>
        <p className="text-justify text-lg mb-12">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque ullam
          totam qui tenetur id nulla excepturi et expedita. A pariatur, cumque
          et eius, tempora suscipit esse, est sequi inventore quasi harum nulla
          iusto. Corrupti inventore voluptatem quo temporibus error animi
          aliquam expedita delectus, doloribus ratione blanditiis atque? Velit
          ut soluta aut perferendis voluptates laboriosam dicta delectus
          expedita inventore, alias impedit officia repellendus nostrum eveniet
          repellat similique exercitationem at quia! Officia, reiciendis, magnam
          adipisci ab ut ratione qui tenetur incidunt consectetur voluptate
          animi ducimus temporibus. Unde nisi minus voluptatem fugit est ad eius
          nobis pariatur repellendus mollitia, sint consequatur suscipit saepe
          magni quae repellat ipsum provident autem eaque numquam placeat ab!
          Blanditiis cupiditate tempore, iusto expedita architecto perferendis
          corrupti assumenda vero ducimus voluptatum eum, placeat aliquid
          deleniti non ut quibusdam rem molestiae fugit vitae consectetur nihil
          modi, illo vel? In vel optio illum maxime maiores quo doloribus
          deleniti facere rerum rem nostrum voluptate minus dolore molestiae
          reiciendis velit nihil, vitae molestias omnis consequuntur? Aut ipsa,
          blanditiis illum optio ea praesentium quisquam non asperiores a saepe
          expedita aliquam voluptate explicabo, possimus soluta corporis
          eligendi facere sapiente commodi, voluptas natus reprehenderit. Aut
          cumque temporibus voluptatibus mollitia provident ab cum unde
          blanditiis debitis quis.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
