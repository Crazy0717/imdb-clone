import Image from "next/image"
import Link from "next/link"
import { FiThumbsUp } from "react-icons/fi"

interface propsType {
  cardData: {
    id?: number
    backdrop_path: string
    title: string
    poster_path: string
    name: string
    overview: string
    release_date: string | number
    first_air_date: string | number
    vote_count: string | number
  }
}

const Card = ({ cardData }: propsType) => {
  return (
    <div className="Moviebox group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${cardData.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            cardData.backdrop_path || cardData.poster_path
          }`}
          width={500}
          height={300}
          alt="image"
          className="sm:rounded-t-[8px]  group-hover:opacity-75 transition-opacity duration-300"
          loading="lazy"
        ></Image>
        <div className="p-2 flex flex-col gap-1">
          <p className="line-clamp-2 text-md">{cardData.overview}</p>
          <h2 className="text-lg font-bold truncate">
            {cardData.title || cardData.name}
          </h2>
          <p className="flex items-center">
            {cardData.release_date || cardData.first_air_date}
            <FiThumbsUp className="h-5 mr-1 ml-3" />
            {cardData.vote_count}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default Card
