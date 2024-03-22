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
        <div className="mx-auto px-8 pt-24 h-full backdrop-blur-sm backdrop-brightness-75">
          <h1 className=" font-bold sm:text-4xl relative -z-10">
            <a href="#">Jaku-Chara Tomozaki-kun 2nd Stage</a>
          </h1>
          <div>
            Mùa 2 của Jaku Chara Tomozaki-kun.
          </div>
        </div>
      </div>
      <div className="px-4">
        <div className=" px-8 mt-8 flex justify-between items-end" /*</main>style={{ "margin-top": "-100%" }}*/>
          <div className="text-4xl">Phim mới cập nhật</div>
          <div><Link href={'#'} className="text-2xl hover:text-red-400">Xem thêm</Link></div>
        </div>
        <div className="flex justify-between col-auto px-8">
          <div>
            <a href="#"><img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-n1fmjRv4JQUd.jpg" className="max-w-48 rounded-sm" /></a>
            <a href="#" className="text-lg hover:text-sky-300">The Last Of Us </a>
          </div>
          <div>
            <a href="#"><img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-n1fmjRv4JQUd.jpg" className="max-w-48 rounded-sm" /></a>
            <a href="#" className="text-lg hover:text-sky-300">The Last Of Us </a>
          </div>
          <div>
            <a href="#"><img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-n1fmjRv4JQUd.jpg" className="max-w-48 rounded-sm" /></a>
            <a href="#" className="text-lg hover:text-sky-300">The Last Of Us </a>
          </div>
          <div>
            <a href="#"><img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-n1fmjRv4JQUd.jpg" className="max-w-48 rounded-sm" /></a>
            <a href="#" className="text-lg hover:text-sky-300">The Last Of Us </a>
          </div>
          <div>
            <a href="#"><img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-n1fmjRv4JQUd.jpg" className="max-w-48 rounded-sm" /></a>
            <a href="#" className="text-lg hover:text-sky-300">The Last Of Us </a>
          </div>
          <div>
            <a href="#"><img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-n1fmjRv4JQUd.jpg" className="max-w-48 rounded-sm" /></a>
            <a href="#" className="text-lg hover:text-sky-300">The Last Of Us </a>
          </div>
        </div>
      </div>
      <div className="px-4">
        <div className=" px-8 mt-8 flex justify-between items-end" /*</main>style={{ "margin-top": "-100%" }}*/>
          <div className="text-4xl">Phim mới</div>
          <div><Link href={'#'} className="text-2xl hover:text-red-400">Xem thêm</Link></div>
        </div>
        <div className="flex justify-between col-auto px-8">
          <div>
            <a href="#"><img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-n1fmjRv4JQUd.jpg" className="max-w-48 rounded-sm" /></a>
            <a href="#" className="text-lg hover:text-sky-300">The Last Of Us </a>
          </div>
          <div>
            <a href="#"><img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-n1fmjRv4JQUd.jpg" className="max-w-48 rounded-sm" /></a>
            <a href="#" className="text-lg hover:text-sky-300">The Last Of Us </a>
          </div>
          <div>
            <a href="#"><img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-n1fmjRv4JQUd.jpg" className="max-w-48 rounded-sm" /></a>
            <a href="#" className="text-lg hover:text-sky-300">The Last Of Us </a>
          </div>
          <div>
            <a href="#"><img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-n1fmjRv4JQUd.jpg" className="max-w-48 rounded-sm" /></a>
            <a href="#" className="text-lg hover:text-sky-300">The Last Of Us </a>
          </div>
          <div>
            <a href="#"><img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-n1fmjRv4JQUd.jpg" className="max-w-48 rounded-sm" /></a>
            <a href="#" className="text-lg hover:text-sky-300">The Last Of Us </a>
          </div>
          <div>
            <a href="#"><img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-n1fmjRv4JQUd.jpg" className="max-w-48 rounded-sm" /></a>
            <a href="#" className="text-lg hover:text-sky-300">The Last Of Us </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};