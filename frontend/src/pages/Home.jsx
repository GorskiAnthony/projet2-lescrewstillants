import React from "react";
import Layout from "@pages/Layout";
import Card from "@components/Card";
import meals from "@services/meals.js";

function Home() {
  return (
    <Layout>
      {meals.map((meal) => (
        <Card key={meal.idMeal} meal={meal} />
      ))}
    </Layout>
  );
}

export default Home;
