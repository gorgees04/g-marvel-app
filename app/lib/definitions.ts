export type Character = {
  id: string;
  name: string;
  description: string;
  thumbnail: { path: string; extension: string };
};

export type Img = {
  path: string;
  extension: string;
};

export type Comic = {
  id: string;
  title: string;
  description: string;
  thumbnail: { path: string; extension: string };
};
