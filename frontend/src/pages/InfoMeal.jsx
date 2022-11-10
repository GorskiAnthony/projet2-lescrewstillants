import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useApi from "@services/useAxios";

function InfoMeal() {
  const { id } = useParams();
  const [meal, setMeal] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const api = useApi();

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    api
      .get(`/lookup.php?i=${id}`, { signal })
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
      controller.abort();
    };
  }, [id]);

  return (
    (isLoading && <div>Loading...</div>) || (
      <div>
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
              <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="py-3 px-6">
                        Ingredient
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Mesure
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(meal)
                      .filter((key) => key.includes("strIngredient"))
                      .map((key, index) => {
                        return (
                          meal[key] && (
                            <tr
                              key={key}
                              className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                            >
                              <th
                                scope="row"
                                className="py-3 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                              >
                                {meal[key]}
                              </th>
                              <th className="py-3 px-6">
                                {meal[`strMeasure${index + 1}`]}
                              </th>
                            </tr>
                          )
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </section>
            <section className="flex-1">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h2 className="sm:text-2xl text-xl font-medium title-font mb-2 text-gray-900">
                  Instructions
                </h2>
                <div className="h-1 w-20 bg-amber-500 rounded" />
              </div>
              <p className="pt-2">{meal.strInstructions}</p>
            </section>
          </section>
        </section>
      </div>
    )
  );
}

export default InfoMeal;
