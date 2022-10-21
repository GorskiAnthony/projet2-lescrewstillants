import React, { useContext } from "react";
import Card from "@components/Card";

import { MealsContext } from "@contexts/MealsContext";

function Home() {
  const { meals } = useContext(MealsContext);

  return (
    <div>
      <div className="grid grid-cols-1 gap-1 md:gap-3 md:grid-cols-4 my-16">
        {meals.map((meal) => (
          <Card key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
}

export default Home;
