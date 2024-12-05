import { Cabin_Sketch } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const jersey = Cabin_Sketch({
  weight: "700",
  subsets: ["latin"],
});

/**
 * Logo component that displays the site logo and a tagline.
 * Wraps the logo and tagline in a link to the homepage.
 *
 * @returns {JSX.Element} The Logo component.
 */
export default function Logo(): JSX.Element {
  return (
    <Link href="/" aria-label="Go to homepage">
      <div className="flex items-center gap-2">
        {/* Logo image */}
        <Image
          src="https://res.cloudinary.com/droheqpxn/image/upload/v1713976518/SeekPng.com_rick-and-morty-png_44144_txzuta.png"
          width={50}
          height={80}
          alt="Site logo"
        />

        {/* Logo text and tagline */}
        <div className="leading-none h-[40px]">
          <p className={`${jersey.className} text-xl`}>FIND MORTY</p>
          <p className="text-xs">Step into the portal</p>
        </div>
      </div>
    </Link>
  );
}
