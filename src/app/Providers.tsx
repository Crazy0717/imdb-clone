import { Header } from "@/components"
import { ThemeProvider } from "next-themes"

interface propsTypes {
  children: React.ReactNode
}

const Providers = ({ children }: propsTypes) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="text-gray-700 dark:text-white dark:bg-gray-700 min-h-screen transition-colors duration-300">
        <Header />
        <div className="mx-auto max-w-[1300px]">{children}</div>
      </div>
    </ThemeProvider>
  )
}

export default Providers
