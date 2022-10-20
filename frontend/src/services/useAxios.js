import axios from "axios";

let apiSingleton = null;

const useApi = () => {
  if (!apiSingleton)
    apiSingleton = axios.create({
      baseURL: "https://www.themealdb.com/api/json/v1/1",
    });
  return apiSingleton;
};

export default useApi;
