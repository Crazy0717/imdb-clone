"use client"

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"

const SearchBox = () => {
  const [search, setSearch] = useState("")
  const router = useRouter()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(`/search/${search}`)
  }

  return (
    <form className="flex justify-between px-5" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search movies..."
        className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="text-amber-600 disabled:text-gray-400"
        disabled={search === ""}
      >
        Search
      </button>
    </form>
  )
}

export default SearchBox
