"use client"
import { useEffect } from "react"

const error = ({ error, reset }: any) => {

  useEffect(() => {
    console.log(error)
  }, [error, reset])

  return (
    <div>
      <h1>Something went wrong</h1>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}

export default error
