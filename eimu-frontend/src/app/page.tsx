import Image from "next/image";
import axios from "axios";
import Navbar from "./header/Navbar";
import React from "react";
import Link from "next/link";
import Footer from "./footer/infor"

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="relative overflow-hidden h-[450px] mt-16">
        <div
          className="w-full h-[450px] absolute inset-0 -z-0 bg-[url('https://phim.nguonc.com/public/images/Film/139378.jpg')] bg-center bg-cover"
        ></div>
        <div className="mx-auto px-28 pt-24 h-full backdrop-blur-sm backdrop-brightness-75">
          <h1 className="mb-3 font-bold sm:text-4xl relative -z-10">
            <a href="#">Jaku-Chara Tomozaki-kun 2nd Stage</a>
          </h1>
          <div className="flex items-center">
            <div className="flex items-center mr-28">
              <svg fill="#FFC700" width="44px" height="64px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" stroke="#FFC700" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="2.048"></g><g id="SVGRepo_iconCarrier"> <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path> </g></svg>
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
      <div className="px-4">
        <div className=" px-10 mt-8 flex justify-between items-end" /*</main>style={{ "margin-top": "-100%" }}*/>
          <div className="text-3xl">Phim mới cập nhật</div>
          <div><Link href={'#'} className=" hover:text-red-400">Xem thêm</Link></div>
        </div>
        <div className="flex justify-between col-auto px-10">
          <div>
            <a href="#"><img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-n1fmjRv4JQUd.jpg" className="max-w-44 rounded-sm" /></a>
            <a href="#" className=" hover:text-sky-300">The Last Of Us </a>
          </div>
          <div>
            <a href="#"><img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-n1fmjRv4JQUd.jpg" className="max-w-44 rounded-sm" /></a>
            <a href="#" className=" hover:text-sky-300">The Last Of Us </a>
          </div>
          <div>
            <a href="#"><img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-n1fmjRv4JQUd.jpg" className="max-w-44 rounded-sm" /></a>
            <a href="#" className=" hover:text-sky-300">The Last Of Us </a>
          </div>
          <div>
            <a href="#"><img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-n1fmjRv4JQUd.jpg" className="max-w-44 rounded-sm" /></a>
            <a href="#" className=" hover:text-sky-300">The Last Of Us </a>
          </div>
          <div>
            <a href="#"><img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-n1fmjRv4JQUd.jpg" className="max-w-44 rounded-sm" /></a>
            <a href="#" className=" hover:text-sky-300">The Last Of Us </a>
          </div>
          <div>
            <a href="#"><img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-n1fmjRv4JQUd.jpg" className="max-w-44 rounded-sm" /></a>
            <a href="#" className="text-lg hover:text-sky-300">The Last Of Us </a>
          </div>
        </div>
      </div>
      <div className="px-4">
        <div className=" px-10 mt-8 flex justify-between items-end" /*</main>style={{ "margin-top": "-100%" }}*/>
          <div className="text-3xl">Phim mới</div>
          <div><Link href={'#'} className=" hover:text-red-400">Xem thêm</Link></div>
        </div>
        <div className="flex justify-between col-auto px-10">
          <div>
            <a href="#"><img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-n1fmjRv4JQUd.jpg" className="max-w-44 rounded-sm" /></a>
            <a href="#" className=" hover:text-sky-300">The Last Of Us </a>
          </div>
          <div>
            <a href="#"><img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-n1fmjRv4JQUd.jpg" className="max-w-44 rounded-sm" /></a>
            <a href="#" className=" hover:text-sky-300">The Last Of Us </a>
          </div>
          <div>
            <a href="#"><img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-n1fmjRv4JQUd.jpg" className="max-w-44 rounded-sm" /></a>
            <a href="#" className=" hover:text-sky-300">The Last Of Us </a>
          </div>
          <div>
            <a href="#"><img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-n1fmjRv4JQUd.jpg" className="max-w-44 rounded-sm" /></a>
            <a href="#" className=" hover:text-sky-300">The Last Of Us </a>
          </div>
          <div>
            <a href="#"><img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-n1fmjRv4JQUd.jpg" className="max-w-44 rounded-sm" /></a>
            <a href="#" className=" hover:text-sky-300">The Last Of Us </a>
          </div>
          <div>
            <a href="#"><img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-n1fmjRv4JQUd.jpg" className="max-w-44 rounded-sm" /></a>
            <a href="#" className=" hover:text-sky-300">The Last Of Us </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};