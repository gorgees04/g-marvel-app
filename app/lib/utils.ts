import { MD5 } from "crypto-js";
import { Img } from "./definitions";

// Marvel API form https://developer.marvel.com/

// geting api from .env
const API_URL = "https://gateway.marvel.com";
const PUBLIC_KEY = "55cf85fd0c1e2b30c2b45b25f027fb86";
const PRIVATE_KEY = "a1e8519b5275cd80347905f7ae7b37d7df140f86";

// the api require a hash in link
// using MD5 to make crypto line
const getHash = (ts: string, privateKey?: string, publicKey?: string) => {
  return MD5(ts + privateKey + publicKey).toString();
};
// combine all the link (baseUrl + ts + apikey + hash)
const ts = Date.now().toString();
const apiKey = PUBLIC_KEY;
const privateKey = PRIVATE_KEY;
const hash = getHash(ts, privateKey, apiKey);

const link = `ts=${ts}&apikey=${apiKey}&hash=${hash}`;

// get image url
export const getImageUrl = (img: Img) => {
  const IMG_SIZE = "portrait_fantastic";
  return `${img.path}/${IMG_SIZE}.${img.extension}`;
};

/////////characters section///////////

const charactersBaseUrl = `${API_URL}/v1/public/characters`;

export const urlCharacters = (offset: string) => {
  return `${charactersBaseUrl}?limit=30&offset=${offset}&${link}`;
};

export const urlCharactersByName = (
  name: string | undefined,
  offset: string
) => {
  return `${charactersBaseUrl}?nameStartsWith=${name}&offset=${offset}&${link}`;
};

export const urlCharactersById = (id: string) => {
  return `${charactersBaseUrl}/${id}?${link}`;
};

export const urlCharactersComics = (id: string) => {
  return `${charactersBaseUrl}/${id}/comics?${link}`;
};

export const urlCharactersSeries = (id: string) => {
  return `${charactersBaseUrl}/${id}/series?${link}`;
};

export const urlCharactersEvents = (id: string) => {
  return `${charactersBaseUrl}/${id}/events?${link}`;
};

export const urlCharactersStories = (id: string) => {
  return `${charactersBaseUrl}/${id}/stories?${link}`;
};
////////////////////////////////////////////

/////////Comics section///////////
const comicsBaseUrl = `${API_URL}/v1/public/comics`;

export const urlComics = (offset: string) => {
  return `${comicsBaseUrl}?dateDescriptor=thisMonth&limit=50&offset=${offset}&${link}`;
};

export const urlComicsByTitle = (title: string, offset: string) => {
  return `${comicsBaseUrl}?titleStartsWith=${title}&offset=${offset}&${link}`;
};
export const urlComicsById = (id: string) => {
  return `${comicsBaseUrl}/${id}?${link}`;
};

export const urlComicsCharacters = (id: string) => {
  return `${comicsBaseUrl}/${id}/characters?${link}`;
};

export const urlComicsCreators = (id: string) => {
  return `${comicsBaseUrl}/${id}/creators?${link}`;
};

export const urlComicsEvents = (id: string) => {
  return `${comicsBaseUrl}/${id}/events?${link}`;
};

export const urlComicsStories = (id: string) => {
  return `${comicsBaseUrl}/${id}/stories?${link}`;
};
/////////////////////////////////////////////////////

/////////Creators section///////////

const createrBaseUrl = `${API_URL}/v1/public/creators`;

export const urlCreators = (offset: string) => {
  return `${createrBaseUrl}?orderBy=suffix&limit=50&offset=${offset}&${link}`;
};

export const urlCreatorsByName = (name: string, offset: string) => {
  return `${createrBaseUrl}?nameStartsWith=${name}&offset=${offset}&${link}`;
};

export const urlCreatorsById = (id: string) => {
  return `${createrBaseUrl}/${id}?${link}`;
};

export const urlCreatorsComics = (id: string) => {
  return `${createrBaseUrl}/${id}/comics?${link}`;
};

export const urlCreatorsEvents = (id: string) => {
  return `${createrBaseUrl}/${id}/events?${link}`;
};

export const urlCreatorsSeries = (id: string) => {
  return `${createrBaseUrl}/${id}/series?${link}`;
};

export const urlCreatorsStories = (id: string) => {
  return `${createrBaseUrl}/${id}/stories?${link}`;
};

/////////////////////////////////////////////////////

/////////Series section///////////

const seriesBaseUrl = `${API_URL}/v1/public/series`;

export const urlSeries = (offset: string) => {
  return `${seriesBaseUrl}?orderBy=startYear&limit=50&offset=${offset}&${link}`;
};

export const urlSeriesByTitle = (title: string, offset: string) => {
  return `${seriesBaseUrl}?titleStartsWith=${title}&offset=${offset}&${link}`;
};
export const urlSeriesById = (id: string) => {
  return `${seriesBaseUrl}/${id}?${link}`;
};

export const urlSeriesCharacters = (id: string) => {
  return `${seriesBaseUrl}/${id}/characters?${link}`;
};

export const urlSeriesComics = (id: string) => {
  return `${seriesBaseUrl}/${id}/comics?${link}`;
};

export const urlSeriesCreators = (id: string) => {
  return `${seriesBaseUrl}/${id}/creators?${link}`;
};

export const urlSeriesEvents = (id: string) => {
  return `${seriesBaseUrl}/${id}/events?${link}`;
};

export const urlSeriesStories = (id: string) => {
  return `${seriesBaseUrl}/${id}/stories?${link}`;
};

/////////////////////////////////////////////////////

/////////Events section///////////
const eventsBaseUrl = `${API_URL}/v1/public/events`;

export const urlEvents = (offset: string) => {
  return `${eventsBaseUrl}?limit=50&offset=${offset}&${link}`;
};

export const urlEventsByTitle = (title: string, offset: string) => {
  return `${eventsBaseUrl}?nameStartsWith=${title}&offset=${offset}&${link}`;
};
export const urlEventsById = (id: string) => {
  return `${eventsBaseUrl}/${id}?${link}`;
};

export const urlEventsCharacters = (id: string) => {
  return `${eventsBaseUrl}/${id}/characters?${link}`;
};

export const urlEventsComics = (id: string) => {
  return `${eventsBaseUrl}/${id}/comics?${link}`;
};

export const urlEventsCreators = (id: string) => {
  return `${eventsBaseUrl}/${id}/creators?${link}`;
};

export const urlEventsSeries = (id: string) => {
  return `${eventsBaseUrl}/${id}/series?${link}`;
};

export const urlEventsStories = (id: string) => {
  return `${eventsBaseUrl}/${id}/stories?${link}`;
};
/////////////////////////////////////////////////////
