import Image from "next/image";
import axios from "axios";
import Navbar from "./components/Navbar";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="relative overflow-hidden py-48 sm:py-32 h-[600px]">
        <img
          src="https://phim.nguonc.com/public/images/Film/139378.jpg"
          alt=""
          className="w-full absolute inset-0 -z-10 brightness-50 object-cover object-right md:object-center mx-auto"
        />
        <div className="mx-auto px-8">
          <h1 className=" font-bold text-white sm:text-6xl relative -z-10"><a href="#">Tên Phim</a></h1>
          <p></p>
        </div>
      </div>
      <div><p>Xem phim</p></div>
      <div className="flex gap-8 ">
        <div>
          <a href="#"><img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-n1fmjRv4JQUd.jpg" className="max-w-40" /></a>
          <a href="#" className="text-sm">The Last Of Us </a>
        </div>
        <div>
          <a href="#"><img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-n1fmjRv4JQUd.jpg" className="max-w-40" /></a>
          <a href="#" className="text-sm">The Last Of Us </a>
        </div>
        <div>
          <a href="#"><img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-n1fmjRv4JQUd.jpg" className="max-w-40" /></a>
          <a href="#" className="text-sm">The Last Of Us </a>
        </div>
        <div>
          <a href="#"><img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-n1fmjRv4JQUd.jpg" className="max-w-40" /></a>
          <a href="#" className="text-sm">The Last Of Us </a>
        </div>
        <div>
          <a href="#"><img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-n1fmjRv4JQUd.jpg" className="max-w-40" /></a>
          <a href="#" className="text-sm">The Last Of Us </a>
        </div>
        <div>
          <a href="#"><img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-n1fmjRv4JQUd.jpg" className="max-w-40" /></a>
          <a href="#" className="text-sm">The Last Of Us </a>
        </div>
      </div>
    </main>
  );
};