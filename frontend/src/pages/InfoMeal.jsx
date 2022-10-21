import { useEffect, useState } from "react";
import Layout from "@pages/Layout";
import { useParams } from "react-router-dom";
import useApi from "@services/useAxios";

function InfoMeal() {
  const { id } = useParams();
  const [meal, setMeal] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const api = useApi();

  useEffect(() => {
    api
      .get(`/lookup.php?i=${id}`)
      .then((res) => {
        setMeal(res.data.meals[0]);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
      console.warn("unmount");
    };
  }, [id]);

  console.warn(meal);

  return (
    (isLoading && <div>Loading...</div>) || (
      <Layout>
        <h1 className="text-center text-3xl">{meal.strMeal}</h1>
        <section className="flex flex-col lg:flex-row items-center justify-center">
          <div className="group relative p-6">
            <div className="relative z-20 h-64 w-64 transform overflow-hidden rounded-lg bg-white p-6 shadow-md duration-300 ease-in-out group-hover:-translate-y-1">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src={meal.strMealThumb}
                alt={meal.strMeal}
              />
            </div>
            <img
              className="absolute inset-0 z-10 h-full w-full transform object-cover opacity-0 blur-3xl filter duration-300 ease-in-out group-hover:opacity-70"
              src={meal.strMealThumb}
              alt={meal.strMeal}
            />
          </div>
        </section>
        <section className="flex lg:flex-row items-center justify-center my-5">
          <section className="flex">
            <section className="flex flex-1 justify-around">
              <div>
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                  <h2 className="sm:text-2xl text-xl font-medium title-font mb-2 text-gray-900">
                    Ingredient
                  </h2>
                  <div className="h-1 w-20 bg-amber-500 rounded" />
                </div>
                <ul>
                  {Object.keys(meal).map((key) => {
                    if (key.includes("Ingredient") && meal[key]) {
                      return (
                        <li key={key} className="list-disc">
                          {meal[key]}
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
              </div>
              <div>
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                  <h2 className="sm:text-2xl text-xl font-medium title-font mb-2 text-gray-900">
                    Mesure
                  </h2>
                  <div className="h-1 w-20 bg-amber-500 rounded" />
                </div>
                <ul>
                  {Object.keys(meal).map((key) => {
                    if (key.includes("Measure") && meal[key]) {
                      return (
                        <li key={key} className="list-disc">
                          {meal[key]}
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
              </div>
            </section>
            <section className="flex-1">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h2 className="sm:text-2xl text-xl font-medium title-font mb-2 text-gray-900">
                  Instructions
                </h2>
                <div className="h-1 w-20 bg-amber-500 rounded" />
              </div>
              <p>{meal.strInstructions}</p>
            </section>
          </section>
        </section>
      </Layout>
    )
  );
}

export default InfoMeal;
