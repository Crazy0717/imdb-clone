"use client"
import { Boxes } from "@/components"
import axios from "axios"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

const API_KEY = process.env.NEXT_PUBLIC_API_KEY

export default function Home() {
  const searParams = useSearchParams()
  const genre = searParams.get("genre")
  const [BoxesData, setData] = useState<any>()
  const [currentPage, setCurrentPage] = useState(1)
  
  if (currentPage < 1) {
    setCurrentPage(1)
  }

  const getData = async () => {
    const data: any = await axios.get(
      `https://api.themoviedb.org/3${
        genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
      }?api_key=${API_KEY}&language=en-US&page=${currentPage}`
    )
    setData(data)
  }

  useEffect(() => {
    getData()
  }, [genre, currentPage])

  return (
    <div className="">
      <Boxes BoxesData={BoxesData} />
      <div className="buttons flex gap-3 items-center justify-center py-5">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          className={`py-1 px-3 rounded-[4px] border border-slate-400 ${
            currentPage === 1 ? " text-neutral-500 border-neutral-500" : ""
          }`}
          disabled={currentPage === 1 ? true : false}
        >
          Previous page
        </button>
        <button
          onClick={() => setCurrentPage(1)}
          className="py-1 px-3 rounded-[4px] border border-slate-400"
        >
          First page
        </button>
        <ul className="flex gap-[26px]">
          <li
            onClick={() => setCurrentPage(currentPage - 2)}
            className={`py-1 ${
              currentPage - 2 <= 0 ? "hidden" : ""
            } px-3 rounded-[4px] border border-transparent hover:border-slate-400 transition duration-300 cursor-pointer`}
          >
            {currentPage - 2}
          </li>
          <li
            onClick={() => setCurrentPage(currentPage - 1)}
            className={`py-1 ${
              currentPage <= 1 ? "hidden" : ""
            } px-3 rounded-[4px] border border-transparent hover:border-slate-400 transition duration-300 cursor-pointer`}
          >
            {currentPage - 1}
          </li>
          <li className="py-1 px-3 rounded-[4px] border border-slate-400">
            {currentPage}
          </li>
          <li
            onClick={() => setCurrentPage(currentPage + 1)}
            className="py-1 px-3 rounded-[4px] border border-transparent hover:border-slate-400 transition duration-100 cursor-pointer"
          >
            {currentPage + 1}
          </li>
          <li
            onClick={() => setCurrentPage(currentPage + 2)}
            className="py-1 px-3 rounded-[4px] border border-transparent hover:border-slate-400 transition duration-100 cursor-pointer"
          >
            {currentPage + 2}
          </li>
        </ul>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          className="py-1 px-3 rounded-[4px] border border-slate-400"
        >
          Next page
        </button>
      </div>
    </div>
  )
}
