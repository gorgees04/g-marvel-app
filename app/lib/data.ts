// import {
  CategoriesLinks,
  CategoryCharacters,
  CategoryComicsLinks,
  CategoryCreators,
  CategoryEventsLinks,
  CategorySeriesLinks,
  CategoryStoriesLinks,
} from "./definitions";
import {
  urlCharactersByName,
  urlComicsByTitle,
  urlComicsById,
  urlComics,
  urlCharacters,
  urlComicsCharacters,
  urlSeries,
  urlCreators,
  urlSeriesByTitle,
  urlSeriesById,
  urlSeriesCharacters,
  urlSeriesComics,
  urlCharactersById,
  urlCharactersComics,
  urlCharactersSeries,
  urlCharactersEvents,
  urlCharactersStories,
  urlComicsCreators,
  urlComicsEvents,
  urlComicsStories,
  urlCreatorsByName,
  urlCreatorsById,
  urlCreatorsComics,
  urlCreatorsEvents,
  urlCreatorsSeries,
  urlCreatorsStories,
  urlSeriesCreators,
  urlSeriesEvents,
  urlSeriesStories,
  urlEvents,
  urlEventsByTitle,
  urlEventsById,
  urlEventsCharacters,
  urlEventsComics,
  urlEventsCreators,
  urlEventsSeries,
  urlEventsStories,
} from "./utils";

//////////Fetch Categories////////
// export const fetchCategory = async (
//   category: CategoriesLinks,
//   offset: string
// ) => {
//   // object of each category and its link
//   const categoriesLinks = {
//     characters: urlCharacters(offset),
//     comics: urlComics(offset),
//     creators: urlCreators(offset),
//     events: urlEvents(offset),
//     series: urlSeries(offset),
//   };

//   try {
//     let URL;
//     // checking if the category passed contain the object
//     if (category in categoriesLinks) {
//       URL = categoriesLinks[category];
//     } else {
//       throw new Error(`Invalid category: ${category}`);
//     }
//     const res = await fetch(URL);
//     return res.json();
//   } catch (error) {
//     console.error("Database Error:", error);
//     throw new Error("Failed to fetch categories data.");
//   }
// };
/////////////////////////////////////////////////

////////////////fetch category by name///////////
// export const fetchCategoryByName = async (
//   category: CategoriesLinks,
//   name: string,
//   offset: string
// ) => {
//   // object of each category and its link
//   const categoryByNameLinks = {
//     characters: urlCharactersByName(name, offset),
//     comics: urlComicsByTitle(name, offset),
//     creators: urlCreatorsByName(name, offset),
//     events: urlEventsByTitle(name, offset),
//     series: urlSeriesByTitle(name, offset),
//   };

//   try {
//     let URL;
//     // checking if the category passed contain the object
//     if (category in categoryByNameLinks) {
//       URL = categoryByNameLinks[category];
//     } else {
//       throw new Error(`Invalid category: ${category}`);
//     }
//     const res = await fetch(URL);
//     return res.json();
//   } catch (error) {
//     console.error("Database Error:", error);
//     throw new Error("Failed to search data.");
//   }
// };

////////////////////////////

////////////////fetch category by id///////////
// export const fetchCategoryById = async (
//   category: CategoriesLinks,
//   id: string
// ) => {
//   // object of each category and its link
//   const categoryByIdLinks = {
//     characters: urlCharactersById(id),
//     comics: urlComicsById(id),
//     creators: urlCreatorsById(id),
//     events: urlEventsById(id),
//     series: urlSeriesById(id),
//   };
//   try {
//     let URL;
//     // checking if the category passed contain the object
//     if (category in categoryByIdLinks) {
//       URL = categoryByIdLinks[category];
//     } else {
//       throw new Error(`Invalid category: ${category}`);
//     }
//     const res = await fetch(URL);
//     return res.json();
//   } catch (error) {
//     console.error("Database Error:", error);
//     throw new Error("Failed to fetch single page data.");
//   }
// };

////////////////////////////

////////////////fetch category Characters///////////
// export const fetchCategoryCharacters = async (
//   category: CategoryCharacters,
//   id: string
// ) => {
//   // object of each category and its link
//   const categoryCharactersLinks = {
//     comics: urlComicsCharacters(id),
//     events: urlEventsCharacters(id),
//     series: urlSeriesCharacters(id),
//   };
//   try {
//     let URL;
//     // checking if the category passed contain the object
//     if (category in categoryCharactersLinks) {
//       URL = categoryCharactersLinks[category];
//     } else {
//       throw new Error(`Invalid category: ${category}`);
//     }
//     const res = await fetch(URL);
//     return res.json();
//   } catch (error) {
//     console.error("Database Error:", error);
//     throw new Error("Failed to fetch characters data.");
//   }
// };

////////////////////////////

////////////////fetch category Characters///////////
// export const fetchCategoryCreators = async (
//   category: CategoryCreators,
//   id: string
// ) => {
//   // object of each category and its link
//   const categoryCreatorsLink = {
//     comics: urlComicsCreators(id),
//     events: urlEventsCreators(id),
//     series: urlSeriesCreators(id),
//   };

//   try {
//     let URL;
//     // checking if the category passed contain the object
//     if (category in categoryCreatorsLink) {
//       URL = categoryCreatorsLink[category];
//     } else {
//       throw new Error(`Invalid category: ${category}`);
//     }
//     const res = await fetch(URL);
//     return res.json();
//   } catch (error) {
//     console.error("Database Error:", error);
//     throw new Error("Failed to fetch creators data.");
//   }
// };

////////////////////////////

//////////////fetch category Comics/////////////

// export const fetchCategoryComics = async (
//   category: CategoryComicsLinks,
//   id: string
// ) => {
//   const categoryComicsLink = {
//     characters: urlCharactersComics(id),
//     creators: urlCreatorsComics(id),
//     events: urlEventsComics(id),
//     series: urlSeriesComics(id),
//   };

//   try {
//     let URL;
//     // checking if the category passed contain the object
//     if (category in categoryComicsLink) {
//       URL = categoryComicsLink[category];
//     } else {
//       1;
//       throw new Error(`Invalid category: ${category}`);
//     }
//     const res = await fetch(URL);
//     return res.json();
//   } catch (error) {
//     console.error("Database Error:", error);
//     throw new Error("Failed to fetch Comics data.");
//   }
// };
///////////////////////////////////

///////////fetch categoy Series/////////
// export const fetchCategorySeries = async (
//   category: CategorySeriesLinks,
//   id: string
// ) => {
//   const categorySeriesLink = {
//     characters: urlCharactersSeries(id),
//     creators: urlCreatorsSeries(id),
//     events: urlEventsSeries(id),
//   };

//   try {
//     let URL;
//     // checking if the category passed contain the object
//     if (category in categorySeriesLink) {
//       URL = categorySeriesLink[category];
//     } else {
//       1;
//       throw new Error(`Invalid category: ${category}`);
//     }
//     const res = await fetch(URL);
//     return res.json();
//   } catch (error) {
//     console.error("Database Error:", error);
//     throw new Error("Failed to fetch Series data.");
//   }
// };
//////////////////////////////////////////

///////////fetch categoy Events/////////
// export const fetchCategoryEvents = async (
//   category: CategoryEventsLinks,
//   id: string
// ) => {
//   const categoryEventsLink = {
//     characters: urlCharactersEvents(id),
//     comics: urlComicsEvents(id),
//     creators: urlCreatorsEvents(id),
//     series: urlSeriesEvents(id),
//   };

//   try {
//     let URL;
//     // checking if the category passed contain the object
//     if (category in categoryEventsLink) {
//       URL = categoryEventsLink[category];
//     } else {
//       1;
//       throw new Error(`Invalid category: ${category}`);
//     }
//     const res = await fetch(URL);
//     return res.json();
//   } catch (error) {
//     console.error("Database Error:", error);
//     throw new Error("Failed to fetch Events data.");
//   }
// };
//////////////////////////////////////////

///////////fetch categoy Stories/////////
// export const fetchCategoryStories = async (
//   category: CategoryStoriesLinks,
//   id: string
// ) => {
//   const categoryStoriesLink = {
//     characters: urlCharactersStories(id),
//     comics: urlComicsStories(id),
//     creators: urlCreatorsStories(id),
//     events: urlEventsStories(id),
//     series: urlSeriesStories(id),
//   };
//   try {
//     let URL;
//     // checking if the category passed contain the object
//     if (category in categoryStoriesLink) {
//       URL = categoryStoriesLink[category];
//     } else {
//       1;
//       throw new Error(`Invalid category: ${category}`);
//     }
//     const res = await fetch(URL);
//     return res.json();
//   } catch (error) {
//     console.error("Database Error:", error);
//     throw new Error("Failed to fetch Stories data.");
//   }
// };
//////////////////////////////////////////
