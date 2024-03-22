"use client"
import axios from "axios"
import Image from "next/image"
import { useEffect, useState } from "react"

interface propsType {
  params: {
    id: number
  }
}
interface movieDetailTypes {
  id?: number
  genres: [
    {
      id: number
      name: string
    }
  ]
  backdrop_path?: string
  title: string
  poster_path: string
  name: string
  overview: string
  release_date: string | number
  first_air_date: string | number
  vote_count: string | number
}
const API_KEY = process.env.NEXT_PUBLIC_API_KEY

export default function MoviePage({ params }: propsType) {
  const movieId = params.id
  const [movieDetail, setmovieDetail] = useState<movieDetailTypes>()

  const getData = async () => {
    const { data }: any = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
    )
    setmovieDetail(data)
    // dynamic title ↓
    document.title = `${data.title} | IMDb clone`
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movieDetail?.backdrop_path || movieDetail?.poster_path
          }`}
          alt="image"
          width={500}
          height={300}
          className="rounded-lg"
          style={{ maxWidth: "100%", height: "100%" }}
        ></Image>
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movieDetail?.title || movieDetail?.name}
          </h2>
          <p className="text-lg mb-3">{movieDetail?.overview}</p>
          <div className="flex gap-3 mb-3">
            Genres:
            {movieDetail?.genres.map((item) => (
              <p key={item.id}>{item.name},</p>
            ))}
          </div>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movieDetail?.release_date || movieDetail?.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movieDetail?.vote_count}
          </p>
        </div>
      </div>
    </div>
  )
}
