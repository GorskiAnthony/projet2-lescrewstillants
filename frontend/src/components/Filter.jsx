import { useEffect, useState, useContext } from "react";
import useApi from "@services/useAxios";
import { MealsContext } from "@contexts/MealsContext";

function Filter() {
  const [filter, setFilter] = useState([]);
  const api = useApi();
  const { handleSubmit, search } = useContext(MealsContext);

  const handleChanges = (e) => {
    handleSubmit(e.target.value);
  };

  useEffect(() => {
    api
      .get(`/list.php?c=list`)
      .then((res) => {
        setFilter(res.data.meals);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="mx-auto max-w-xl mb-4">
      <select
        id="filter"
        name="filter"
        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-amber-500 focus:outline-none focus:ring-amber-500 sm:text-sm"
        onChange={(e) => {
          handleChanges(e);
        }}
        defaultValue={search}
      >
        {filter.map((item) => (
          <option key={item.strCategory}>{item.strCategory}</option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
