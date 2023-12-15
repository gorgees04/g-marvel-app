"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const MarvelSideBar = () => {
  const pathname = usePathname().split("/");
  const linkCategory = pathname[2];

  const categories = ["characters", "comics", "creators", "series", "events"];

  return (
    <aside className="fixed bg-black z-10 top-[65px] left-0 flex flex-col sm:w-[150px] sm:bg-transparent  sm:h-screen text-white p-1 shadow-xl sm:top-[100px] md:w-[250px] md:p-6">
      <Link href={"/marvel"}>
        <h1 className="text-center text-marvelRed font-bold w-screen text-xl my-1 sm:w-full sm:text-xl sm:my-7 md:text-3xl">
          Marvel Categories
        </h1>
      </Link>

      <div className="flex flex-row w-screen overflow-x-auto text-md pr-2 border-r-2 border-gray-700 sm:w-full sm:flex-col md:text-l md:p-4">
        {categories.map((category, id) => {
          return (
            <Link
              key={id}
              href={`/marvel/${category}?page=0`}
              title={category}
              className={clsx(
                { "bg-marvelRed": linkCategory === category },
                "truncate border-2 border-white rounded-md p-2 sm:p-3 transition-all duration-300 text-center capitalize m-2 sm:m-4 sm:hover:mr-0"
              )}
            >
              {category}
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default MarvelSideBar;
