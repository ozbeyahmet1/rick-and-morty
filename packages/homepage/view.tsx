"use client";
import * as React from "react";
import HeroContainer from "./sections/heroSection";
import { Character, Info } from "./helpers/types";
import CharacterCard from "./components/characterCard";
import Pagination from "@/ui/layout/pagination";
import { useParams, useSearchParams } from "next/navigation";
interface HomepageViewProps {
  characters: Array<Character>;
  info: Info;
}
export default function HomepageView({ characters, info }: HomepageViewProps): JSX.Element {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
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
  return (
    <div>
      <HeroContainer onClickSearch={scrollToSection} />
      <div className="w-full border-t-2 pt-10">
        <div className="container mx-auto">
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
