import React from "react";
import Layout from "@pages/Layout";
import Card from "@components/Card";
import meals from "@services/meals.js";

function Home() {
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-1 md:gap-3 md:grid-cols-3 my-16">
        {meals.map((meal) => (
          <Card key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </Layout>
  );
}

export default Home;
