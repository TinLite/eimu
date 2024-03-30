'use client'
import Link from "next/link";
import { createRef, useRef } from "react";

export default async function Carousel() {
  var ref = createRef()

  function scrollToNext() {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    ref.current
  }

  return <div className="carousel w-full">
    <div className="carousel-item relative w-full">
      <div className="w-full h-[450px] inset-0 z-0 absolute overflow-hidden blur-sm" style={{ "background": `center / cover no-repeat url('${'https://phim.nguonc.com/public/images/Film/140627.jpg'}')` }}></div>
      <div className=" relative h-[450px] flex items-center px-36 bg-gradient-to-r from-[#000000aa]">
        <div>
          <h1 className="mb-4 font-bold sm:text-4xl">
            <Link href="#">Jaku-Chara Tomozaki-kun 2nd Stage</Link>
          </h1>
          <div className="flex items-center">
            <div className="flex items-center mr-28">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
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
      <div className="absolute flex justify-between left-5 right-5 top-40">
        {/* <a className="btn btn-circle text-3xl">❮</a> */}
        <a className="btn btn-circle text-3xl" onClick={scrollToNext}>Next</a>
      </div>
    </div>
    {/* slide2 */}
  </div>
}