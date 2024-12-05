"use server";

import { Result } from "@/packages/homepage/helpers/types";

/**
 * Fetches characters from the Rick and Morty API based on the given query.
 * @param query - The query string for the API, e.g., "character?page=5".
 * @returns A promise resolving to the Result object containing info and character data.
 * @throws An error if the API request fails.
 */
export async function getCharacters(query: string): Promise<Result> {
  const baseUrl = "https://rickandmortyapi.com/api";
  const res = await fetch(`${baseUrl}/${query}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch characters: ${res.statusText}`);
  }

  const data: Result = await res.json(); // Ensure the response matches the Result type
  return data;
}
