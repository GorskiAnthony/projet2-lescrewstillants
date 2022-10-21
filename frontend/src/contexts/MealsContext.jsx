import PropTypes from "prop-types";
import { useEffect, useState, createContext, useMemo } from "react";
import useApi from "@services/useAxios";

const MealsContext = createContext();

function MealsContextProvider({ children }) {
  const [search, setSearch] = useState("Beef");
  const [meals, setMeals] = useState([]);
  const api = useApi();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.childNodes[1].childNodes[1].value);
  };

  console.warn("search", search);

  useEffect(() => {
    api
      .get(`/filter.php?c=${search}`)
      .then((res) => {
        setMeals(res.data.meals);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [search]);

  const mealsProviderValue = useMemo(() => {
    return {
      meals,
      handleSubmit,
    };
  });

  return (
    <MealsContext.Provider value={mealsProviderValue}>
      {children}
    </MealsContext.Provider>
  );
}

MealsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MealsContext, MealsContextProvider };
