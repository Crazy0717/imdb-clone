import Link from "next/link"
import { useSearchParams } from "next/navigation"

const Navbar = () => {
  const searchParams = useSearchParams()
  const genre = searchParams.get("genre")

  return (
    <div className="flex justify-center gap-[16px] dark:bg-gray-500 bg-amber-100 rounded-[4px] p-3 ">
      <Link
        href={"/?genre=fetchTrending"}
        className={`hover:text-amber-500 transition duration-[.1s] ${
          genre === "fetchTrending"
            ? "underline underline-offset-8 decoration-2 decoration-amber-500 "
            : ""
        }`}
      >
        Trending
      </Link>
      <Link
        href={"/?genre=fetchTopRated"}
        className={`hover:text-amber-500 transition duration-[.1s] ${
          genre === "fetchTopRated"
            ? "underline underline-offset-8 decoration-2 decoration-amber-500 "
            : ""
        }`}
      >
        Trending
      </Link>
    </div>
  )
}

export default Navbar
