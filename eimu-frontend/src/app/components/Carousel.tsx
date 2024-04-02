'use client'
import Link from "next/link";
import { useState } from "react";
import { MovieListEntry } from "@/app/model/MovieModels";
import { MovieTag } from "@/app/model/MovieTagModels";

export default function Carousel({
  items,
  tagList
}: {
  items: [MovieListEntry],
  tagList: [MovieTag]
}) {
  const [index, setIndex] = useState(0)

  function getNextIndex() {
    return index + 1 >= items.length ? 0 : index + 1;
  }

  function getPreviousIndex() {
    return index - 1 < 0 ? items.length - 1 : index - 1;
  }

  function handleNext() {
    setIndex(getNextIndex())
  }

  function handlePrevious() {
    setIndex(getPreviousIndex())
  }

  function getTag(id: string): MovieTag | void {
    return tagList.find((e) => e.id == id)
  }

  return <div className="w-full relative">
    {items.map((entry) => (
      <div key={entry.id} className={`w-screen ${(items[index].id == entry.id ? "relative" : "hidden")}`}>
        <div className="w-full h-[450px] inset-0 z-0 absolute" style={{ "background": `10% / cover no-repeat url('${entry.posterUrl}')` }}></div>
        <div className="relative h-[450px] flex items-center px-36 backdrop-brightness-50 backdrop-blur-sm">
          <div>
            <div className="flex mb-4">
              <div className="grid">
                <Link href={`/movie/${entry.id}`} className="font-bold sm:text-4xl">{entry.name}</Link>
                <div className="place-self-end">{entry.originalName}</div>
              </div>
            </div>
            <div className="flex gap-8 mb-2">
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth={1.5} stroke="" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                <div className="">9.9</div>
              </div>
              {entry.tags.map(
                (v) => (<div key={v} className="">{getTag(v)?.value}</div>)
              )}
            </div>
            <div>{entry.description}</div>
          </div>
        </div>
      </div>
    ))}
    <div className="absolute flex justify-between h-full top-0 w-full items-stretch">
      <div className="bg-gradient-to-r from-[#000d1c] w-32 hover:w-36 transition-all grid place-items-center cursor-pointer select-none" onClick={handlePrevious}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
        </svg>
      </div>
      <div className="bg-gradient-to-l from-[#000d1c] w-32 hover:w-36 transition-all grid place-items-center cursor-pointer select-none" onClick={handleNext}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
        </svg>
      </div>
    </div>
  </div>
}