export function GET(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id"); // Query parameter `id`
  const page = url.searchParams.get("page"); // Query parameter `page`

  return new Response(`Post ID: ${id}, Page: ${page}`);
}
