"use client";
import * as React from "react";
import HeroContainer from "./sections/heroSection";
import { Character, Info } from "./helpers/types";
import CharacterCard from "./components/characterCard";
import Pagination from "@/ui/layout/pagination";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { updateQueryParam } from "./helpers/utils";
import { IoIosMale } from "react-icons/io";
import { IoIosFemale } from "react-icons/io";
interface HomepageViewProps {
  characters: Array<Character>;
  info: Info;
}
export default function HomepageView({ characters, info }: HomepageViewProps): JSX.Element {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const status = searchParams.get("status");
  const gender = searchParams.get("gender");
  /**
   * Scrolls the page to the referenced section.
   */
  const scrollToSection = () => {
    const sectionElement = sectionRef.current;
    if (sectionElement) {
      const sectionPosition = sectionElement.offsetTop;
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  };
  React.useEffect(() => {
    if (searchParams.get("page")) {
      scrollToSection();
    }
  }, [searchParams]);
  const [currentPage, setCurrentPage] = React.useState(1);

  const pathname = usePathname();

  return (
    <div>
      <HeroContainer onClickSearch={scrollToSection} />

      <div className="w-full border-t-2 pt-10">
        <div className="container mx-auto">
          <div className="pb-6 flex justify-between">
            <div className="flex items-center space-x-2">
              <Link
                href={`${pathname}?${updateQueryParam("status", "dead", searchParams)}`}
                className={`px-6 py-2 border-2 rounded-md text-white hover:bg-white hover:text-black transition-all duration-300 ${status == "dead" && "bg-black"}`}>
                Dead
              </Link>
              <Link
                href={`${pathname}?${updateQueryParam("status", "alive", searchParams)}`}
                className={`px-6 py-2 border-2 rounded-md text-white hover:bg-white hover:text-black transition-all duration-300 ${status == "alive" && "bg-black"}`}>
                Alive
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <Link
                href={`${pathname}?${updateQueryParam("gender", "male", searchParams)}`}
                className={`p-2 rounded-full border-2 ${gender == "male" && "bg-black"}`}>
                <IoIosMale size={33} fill="#00AEF2" />
              </Link>
              <Link
                href={`${pathname}?${updateQueryParam("gender", "female", searchParams)}`}
                className={`p-2 rounded-full border-2 ${gender == "female" && "bg-black"}`}>
                <IoIosFemale size={33} fill="#DC4040" />
              </Link>
            </div>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-sm:px-5"
            ref={sectionRef}>
            {characters.map((character) => (
              <CharacterCard key={character.id} data={character} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={info?.pages}
            onPageChange={(i: number) => setCurrentPage(i)}
          />
        </div>
      </div>
    </div>
  );
}
