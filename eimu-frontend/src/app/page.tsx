import React from "react";
import Footer from "./components/Footer"
import SideList from "@/app/components/SideList";
import Link from "next/link";

export default async function Home() {
  const res = await fetch("http://51.79.144.118:12594/movie")
  const new_movie_list = await res.json();
  return (
    <main>
      <div className="relative overflow-hidden h-[450px]">
        <div
          className="w-full h-[450px] absolute inset-0 -z-0 bg-[url('https://phim.nguonc.com/public/images/Film/139378.jpg')] bg-center bg-cover"
        ></div>
        <div className="mx-auto h-full backdrop-blur-sm flex items-center px-14 bg-gradient-to-r from-[#000000aa]">
          <div>
            <h1 className="mb-3 font-bold sm:text-4xl relative -z-0">
              <Link href={""}>Jaku-Chara Tomozaki-kun 2nd Stage</Link>
            </h1>
            <div className="flex items-center">
              <div className="flex items-center mr-28">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFC700" viewBox="0 0 24 24" strokeWidth={1.5} stroke="" className="w-10 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
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
      <SideList title="Phim bộ" link="#" data={new_movie_list["items"]} />
      <SideList title="Phim lẻ" link="#" data={new_movie_list["items"]} />
      <Footer />
    </main>
  );
};