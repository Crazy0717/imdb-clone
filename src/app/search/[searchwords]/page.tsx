"use client"
import { Boxes } from "@/components"
import axios from "axios"
import { useEffect, useState } from "react"

interface propsTypes {
  params: {
    searchwords?: string
  }
}
const API_KEY = process.env.NEXT_PUBLIC_API_KEY

const page = ({ params }: propsTypes) => {
  const searchWords = params.searchwords
  const [currentPage, setCurrentPage] = useState(1)
  const [boxesData, setBoxesData] = useState<any>()
  const [totalPages, setTotalPages] = useState<number>()

  if (currentPage < 1) {
    setCurrentPage(1)
  }

  const getData = async () => {
    const data: any = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchWords}&language=en-US&page=${currentPage}&include_adult=false`
    )
    setBoxesData(data)
    setTotalPages(data.data.total_pages)
  }

  useEffect(() => {
    getData()
  }, [currentPage])

  return (
    <div>
      <h1 className="text-center">{searchWords}</h1>
      {!boxesData && <h1 className="text-center pt-6">No results found</h1>}
      {boxesData && <Boxes BoxesData={boxesData} />}
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
            className={`py-1 px-3 rounded-[4px] border border-transparent hover:border-slate-400 transition duration-300 cursor-pointer ${
              totalPages! - 1 === currentPage ? "hidden" : ""
            } `}
          >
            {currentPage + 1}
          </li>
          <li
            onClick={() => setCurrentPage(currentPage + 2)}
            className={`py-1 px-3 rounded-[4px] border border-transparent hover:border-slate-400 transition duration-300 cursor-pointer  ${
              totalPages! - 2 === currentPage
                ? "hidden"
                : totalPages! + 1 === currentPage + 2
                ? "hidden"
                : ""
            } `}
          >
            {currentPage + 2}
          </li>
        </ul>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          className={`py-1 px-3 rounded-[4px] border border-slate-400 ${
            totalPages! - 1 === currentPage
              ? " text-neutral-500 border-neutral-500"
              : ""
          }`}
          disabled={totalPages! - 1 === currentPage ? true : false}
        >
          Next page
        </button>
      </div>
    </div>
  )
}

export default page
