import React from "react";
import SideList from "@/app/components/SideList";
import Carousel from "@/app/components/Carousel";
import { getLatestMovies, getLatestMoviesByTag } from "@/app/repositories/MovieRepository";
import { getAllTag } from "@/app/repositories/MovieTagRepository";
import { getRate } from "@/app/repositories/RateRepository";

export default async function Home() {
  const new_movie_list = await getLatestMovies()
  const tv_movie_list = await getLatestMoviesByTag("eccbc87e4b5ce2fe28308fd9f2a7baf3")
  const theater_movie_list = await getLatestMoviesByTag("a87ff679a2f3e71d9181a67b7542122c")
  const anime_movie_list = await getLatestMoviesByTag("45c48cce2e2d7fbdea1afc51c7c6ad26,d2ddea18f00665ce8623e36bd4e3c7c5")
  const chinese_movie_list = await getLatestMoviesByTag("c0c7c76d30bd3dcaefc96f40275bdc0a")
  const tag_list = await getAllTag()
  const arr_id = await Promise.all(new_movie_list.items.map((v) => getRate(v.id)))

  const mov = new_movie_list.items.map((v) => {
    return {
      ...v,
      rate: arr_id.find(v2 => v.id == v2.movieId)
    }
  })

  return (
    <div className="text-white">
      <Carousel items={mov} tagList={tag_list} />
      <SideList title="Vừa cập nhật!" link="/genres" data={new_movie_list.items} />
      <SideList title="Phim bộ" link="/genres" data={tv_movie_list.items} />
      <SideList title="Phim lẻ" link="/genres" data={theater_movie_list.items} />
      <SideList title="Trung Quốc" link="/genres" data={chinese_movie_list.items} />
      <SideList title="Anime" link="/genres" data={anime_movie_list.items} />
    </div>
  );
};