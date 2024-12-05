import HomepageView from "@/packages/homepage/view";
import { getCharacters } from "./actions/getCharacters";
import React from "react";

export default async function Homepage({
  params,
  searchParams,
}: {
  params: Promise<{ page: string }>;
  searchParams: Promise<{ page: string; gender: string; status: string }>;
}) {
  // Default to page 1 if the page parameter is not provided
  const page = (await searchParams).page || "1";
  const gender = (await searchParams).gender || "";
  const status = (await searchParams).status || "";

  try {
    // Fetch characters using the dynamic page parameter
    const data = await getCharacters(
      `character?page=${page}${gender ? `&gender=${gender}` : ""}${status ? `&status=${status}` : ""}`,
    );
    const characters = data.results;
    const info = data.info;

    // Render the HomepageView with fetched characters and pagination info
    return <HomepageView characters={characters} info={info} />;
  } catch (error) {
    console.error("Failed to load characters:", error);

    // Handle errors gracefully
    return (
      <div className="container mx-auto">
        <p>Failed to load data. Please try again later.</p>
      </div>
    );
  }
}
