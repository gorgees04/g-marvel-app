export interface Character {
  id: string;
  chategory: string;
  name: string;
  description: string;
  thumbnail: { path: string; extension: string };
}

export interface Img {
  path: string;
  extension: string;
}

export interface Comic {
  id: string;
  chategory: string;
  title: string;
  description: string;
  thumbnail: { path: string; extension: string };
  dates: {
    interface: string;
    date: string;
  }[];
}

export interface Series {
  id: string;
  chategory: string;
  title: string;
  description: string;
  thumbnail: { path: string; extension: string };
}

export interface Creators {
  id: string;
  fullName: string;
  thumbnail: { path: string; extension: string };
}

export interface Events {
  id: string;
  chategory: string;
  title: string;
  description: string;
  thumbnail: { path: string; extension: string };
}

export interface CollectionType {
  id: string;
  chategory: string;
  name: string;
  title: string;
  fullName: string;
  thumbnail: { path: string; extension: string };
}

export type CategoriesLinks =
  | "characters"
  | "comics"
  | "creaters"
  | "events"
  | "series";
