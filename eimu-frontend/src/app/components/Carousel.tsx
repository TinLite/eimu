'use client'
import { useRef } from "react";
import { MovieListEntry } from "@/app/model/MovieModels";
import { MovieTag } from "@/app/model/MovieTagModels";

export default function Carousel({
  items,
  tagList
}: {
  items: MovieListEntry[],
  tagList: [MovieTag]
}) {
  const ref = useRef<any>(null);
  function getTag(id: string): MovieTag | void {
    return tagList.find((e) => e.id == id);
  }

  var index = 0;

  function previousIndex() {
    index -= 1;
    if (index < 0)
      index = items.length;
  }

  function nextIndex() {
    index += 1
    if (index >= items.length)
      index = 0;
  }
  function toPreviousSlide() {
    if (ref.current) {
      previousIndex();
      ref.current.scrollLeft = ref.current.offsetWidth * index;
    }
  }

  function toNextSlide() {
    if (ref.current) {
      nextIndex();
      ref.current.scrollLeft = ref.current.offsetWidth * index;
    }
  }

  return (
    <div className="relative w-screen h-[450px]">
      <div ref={ref} className="overflow-x-hidden scroll-smooth snap-x">
        <div className="flex w-fit flex-row relative snap-x">
          {items.map((entry) => (
            <a href={`/movie/${entry.id}`} key={entry.id} className={`block w-screen snap-center`}>
              <div>
                <div className="w-screen h-[450px] z-0 absolute" style={{ "background": `10% / cover no-repeat url('${entry.posterUrl}')` }}></div>
                <div className="relative h-[450px] flex items-center px-36 backdrop-brightness-50 backdrop-blur-sm">
                  <div>
                    <div className="flex mb-4">
                      <div className="grid">
                        <h1 className="font-bold sm:text-4xl">{entry.name}</h1>
                        <div className="place-self-end">{entry.originalName}</div>
                      </div>
                    </div>
                    <div className="flex gap-4 mb-2">
                      <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth={1.5} stroke="" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                        <div className="">9.9</div>
                      </div>
                      {entry.tags.map(
                        // (v) => (<div key={v}><a href={`/genres/${v}`} className='bg-gray-800 px-2 hover:bg-blue-800 transition-colors'>{getTag(v)?.value}</a></div>)
                        (v) => (<div key={v}>{getTag(v)?.value}</div>) // 2 thẻ a lồng vào nhau react không biết xử lí, nên để tạm div
                      )}
                    </div>
                    <div>{entry.description}</div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <button className="absolute top-0 h-full bg-gradient-to-r from-[#000d1c] hover:from-blue-950 w-32 hover:w-36 transition-all grid place-items-center select-none" onClick={toPreviousSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
        </svg>
      </button>
      <button className="absolute top-0 h-full right-0 bg-gradient-to-l from-[#000d1c] hover:from-blue-950 w-32 hover:w-36 transition-all grid place-items-center select-none" onClick={toNextSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>)
}