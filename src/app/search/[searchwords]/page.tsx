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
  const [boxesData, setBoxesData] = useState()
  
  const getData = async () => {
    const data: any = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchWords}&language=en-US&page=1&include_adult=false`
    )
    setBoxesData(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      {!boxesData && <h1 className="text-center pt-6">No results found</h1>}
      {boxesData && <Boxes BoxesData={boxesData} />}
    </div>
  )
}

export default page
