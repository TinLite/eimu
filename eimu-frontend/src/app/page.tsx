import Navbar from "./components/Navbar";
import React from "react";
import Footer from "./components/Footer"
import SideList from "@/app/components/SideList";

export default async function Home() {
  const new_movie_list = await (await fetch("http://51.79.144.118:12594/movie")).json()
  return (
    <main>
      <Navbar />
      <div className="relative overflow-hidden h-[450px] mt-16">
        <div
          className="w-full h-[450px] absolute inset-0 -z-0 bg-[url('https://phim.nguonc.com/public/images/Film/139378.jpg')] bg-center bg-cover"
        ></div>
        <div className="mx-auto h-full backdrop-blur-sm flex items-center px-14 bg-gradient-to-r from-[#000000aa]">
          <div>
            <h1 className="mb-3 font-bold sm:text-4xl relative -z-10">
              <a href="#">Jaku-Chara Tomozaki-kun 2nd Stage</a>
            </h1>
            <div className="flex items-center">
              <div className="flex items-center mr-28">
                <div className="text-[#FFC700]">9.9</div>
              </div>
              <div className="mr-28">2010</div>
              <div className="">Cập nhật tập 12</div>
            </div>
            <div>
              Mùa 2 của Jaku Chara Tomozaki-kun.
            </div>
          </div>
        </div>
      </div>
      <SideList title="Phim vừa cập nhật" link="#" data={new_movie_list["items"]} />
      <SideList title="Phim mới" link="#" data={new_movie_list["items"]} />
      <Footer />
    </main>
  );
};