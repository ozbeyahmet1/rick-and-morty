/**
 * Renders a character card component.
 *
 * @component
 * @param {CharacterCardProps} props - The props for the component.
 * @param {Character} props.data - The character data.
 * @param {string} props.data.name - The name of the character.
 * @param {string} props.data.location - The location of the character.
 * @param {string} props.data.origin - The origin of the character.
 * @param {string} props.data.image - The image URL of the character.
 * @param {string} props.data.status - The status of the character.
 * @param {string} props.data.gender - The gender of the character.
 * @returns {JSX.Element} The character card component.
 */
import Image from "next/image";
import * as React from "react";
import { Character } from "../helpers/types";

export interface CharacterCardProps {
  data: Pick<Character, "name" | "location" | "image" | "episode">;
}

export default function CharacterCard({
  data: { name, location, image: characterImage, episode },
}: CharacterCardProps) {
  return (
    <div className="bg-white w-full rounded-md shadow-md">
      <Image
        src={characterImage}
        width={300}
        height={300}
        quality={100}
        alt="character image"
        className="rounded-t-md w-full transition-opacity opacity-0 duration-[2s]"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />
      <div className="p-4">
        <h1 className="font-bold text-lg">{name}</h1>
        <p>
          <b className="font-medium">Located At:</b> {location.name}
        </p>
        <p>
          {" "}
          <b className="font-medium">Played in:</b> {episode.length} episode
        </p>
      </div>
    </div>
  );
}
