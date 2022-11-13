import { getItem } from "@services/useStorage";
import { useState, useEffect } from "react";
import Card from "@components/Card";

function FavMeal() {
  const [favMeals, setFavMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setFavMeals(getItem("favMeal"));
    setIsLoading(false);
  }, []);

  return (
    <div>
      <h1>Favorite Meals</h1>
      <ul className="grid grid-cols-1 gap-1 md:gap-3 md:grid-cols-4 my-16">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          favMeals.map((meal) => <Card key={meal.idMeal} meal={meal} />)
        )}
      </ul>
    </div>
  );
}

export default FavMeal;
