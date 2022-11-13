import { error, success, warn } from "./useNotify";

const getItem = (key) => {
  // parse the value
  return JSON.parse(localStorage.getItem([key]));
};

const setItem = (key, value) => {
  // json stringify the value
  const allEntries = JSON.parse(localStorage.getItem(key));
  if (allEntries) {
    // verify if the value is already in the array
    const isAlreadyInArray = allEntries.some(
      (entry) => entry.idMeal === value.idMeal
    );
    if (!isAlreadyInArray) {
      allEntries.push(value);
      success(`The "${value.strMeal}" was added to favorites`);
      return localStorage.setItem(key, JSON.stringify(allEntries));
    } else {
      error("This recipe is already in your list");
    }
  } else return localStorage.setItem(key, JSON.stringify([value]));
};

const remoteOneItem = (key, value) => {
  const allEntries = JSON.parse(localStorage.getItem(key));
  const filteredEntries = allEntries.filter(
    (entry) => entry.idMeal !== value.idMeal
  );
  warn(`Removed "${value.strMeal}" from favorites`);
  return localStorage.setItem(key, JSON.stringify(filteredEntries));
};

export { getItem, setItem, remoteOneItem };
