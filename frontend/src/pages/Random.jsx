import useApi from "@services/useAxios";
import { useEffect, useState } from "react";

function Random() {
  const [randomMeal, setRandomMeal] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const api = useApi();

  useEffect(() => {
    api
      .get(`/random.php`)
      .then((res) => {
        setRandomMeal(res.data.meals);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    (isLoading && <div>Loading...</div>) || (
      <div>
        <h1 className="text-center text-3xl">{randomMeal[0].strMeal}</h1>
        <section className="flex flex-col lg:flex-row items-center justify-center">
          <div className="group relative p-6">
            <div className="relative z-20 h-64 w-64 transform overflow-hidden rounded-lg bg-white p-6 shadow-md duration-300 ease-in-out group-hover:-translate-y-1">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src={randomMeal[0].strMealThumb}
                alt={randomMeal[0].strMeal}
              />
            </div>
            <img
              className="absolute inset-0 z-10 h-full w-full transform object-cover opacity-0 blur-3xl filter duration-300 ease-in-out group-hover:opacity-70"
              src={randomMeal[0].strMealThumb}
              alt={randomMeal[0].strMeal}
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
                    {Object.keys(randomMeal[0])
                      .filter((key) => key.includes("strIngredient"))
                      .map((key, index) => {
                        return (
                          randomMeal[0][key] && (
                            <tr
                              key={key}
                              className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                            >
                              <th
                                scope="row"
                                className="py-3 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                              >
                                {randomMeal[0][key]}
                              </th>
                              <th className="py-3 px-6">
                                {randomMeal[0][`strMeasure${index + 1}`]}
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
              <p className="pt-2">{randomMeal[0].strInstructions}</p>
            </section>
          </section>
        </section>
      </div>
    )
  );
}

export default Random;
