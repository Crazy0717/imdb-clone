import { Boxes } from "@/components"
import axios from "axios"
import { useSearchParams } from "next/navigation"
import { Suspense, useEffect, useState } from "react"

const API_KEY = process.env.NEXT_PUBLIC_API_KEY

interface ParamsTypes {
  currentPage: number
}

const Results = ({ currentPage }: ParamsTypes) => {
  const searParams = useSearchParams()
  const genre = searParams.get("genre")
  const [BoxesData, setData] = useState<any>()

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
    <div>
      <Boxes BoxesData={BoxesData} />
    </div>
  )
}

const ResultsWithSuspense = ({ currentPage }: ParamsTypes) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Results currentPage={currentPage} />
    </Suspense>
  )
}

export default ResultsWithSuspense
