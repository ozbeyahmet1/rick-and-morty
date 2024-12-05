export function updateQueryParam(key: string, value: string, searchParams: URLSearchParams): string {
  const updatedSearchParams = new URLSearchParams(searchParams.toString());
  updatedSearchParams.set(key, value); // Add or update the parameter
  return updatedSearchParams.toString();
}
