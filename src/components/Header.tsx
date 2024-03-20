"use client"
import { useTheme } from "next-themes"
import Link from "next/link"
import { AiFillHome } from "react-icons/ai"
import { BsInfoCircleFill } from "react-icons/bs"
import { MdDarkMode, MdLightMode } from "react-icons/md"
import { Navbar, SearchBox } from "."

const Header = () => {
  const { theme, setTheme, systemTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  
  return (
    <div className="mx-auto max-w-[1300px]">
      <div className="flex items-center justify-between py-3 px-2">
        <div className="flex gap-[16px]">
          <Link
            href={"/"}
            className="text-neutral-900 dark:text-white dark:hover:text-amber-500 hover:text-amber-500 transition duration-[.1s]"
          >
            <AiFillHome className="text-[24px] sm:hidden" />
            <p className="uppercase hidden sm:inline-block text-sm">Home</p>
          </Link>
          <Link
            href={"/about"}
            className="text-neutral-900 hover:text-amber-500 dark:text-white dark:hover:text-amber-500 transition duration-[.1s]"
          >
            <BsInfoCircleFill className="text-[24px] sm:hidden" />
            <p className="uppercase hidden sm:inline-block text-sm">About</p>
          </Link>
        </div>
        <div className="flex gap-[20px] items-center">
          <div>
            {currentTheme === "dark" ? (
              <MdLightMode
                onClick={() => setTheme("light")}
                className="text-xl cursor-pointer hover:text-amber-500 transition duration-[.1s]"
              />
            ) : (
              <MdDarkMode
                onClick={() => setTheme("dark")}
                className="text-xl cursor-pointer hover:text-amber-500 transition duration-[.1s]"
              />
            )}
          </div>
          <Link href={"/"} className="flex gap-[4px] items-center">
            <span className="text-[22px] text-neutral-900 dark:text-white font-bold rounded-[5px]  bg-amber-500 py-1 px-2">
              IMDb
            </span>
            <span className="text-[20px] text-neutral-900 dark:text-white  hidden sm:inline-block">
              clone
            </span>
          </Link>
        </div>
      </div>
      <Navbar />
      <SearchBox />
    </div>
  )
}

export default Header
