"use client"
import { Results } from "@/components"
import { useState } from "react"

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1)
  if (currentPage < 1) {
    setCurrentPage(1)
  }

  return (
    <div className="">
      <Results currentPage={currentPage} />
      <div className="buttons flex gap-3 justify-center py-5">
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
