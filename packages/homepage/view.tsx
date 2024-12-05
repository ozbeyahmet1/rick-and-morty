"use client";
import * as React from "react";
import HeroContainer from "./sections/heroSection";

export default function HomepageView() {
  const sectionRef = React.useRef<HTMLDivElement>(null);

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
  return (
    <div>
      <HeroContainer onClickSearch={scrollToSection} />
    </div>
  );
}
