export interface Character {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: {
    name: string;
    url: string; // Assuming this is a URL to the origin location
  };
  location: {
    name: string;
    url: string; // Assuming this is a URL to the last known location
  };
  image: string; // URL to the character's image
  episode: string[]; // Array of URLs (episode endpoints)
  url: string; // URL to the character's endpoint
  created: string; // Time at which the character was created in the database
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface Result {
  info: Info;
  results: Array<Character>;
}
