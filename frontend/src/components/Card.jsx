import { useState, useEffect } from "react";
import Tag from "@components/Tag";
import Button from "@components/Button";
import PropTypes from "prop-types";
import { HeartIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import { getItem, remoteOneItem, setItem } from "@services/useStorage";

function Card({ meal }) {
  const [favMeals, setFavMeals] = useState([]);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    setFavMeals(getItem("favMeal"));
  }, [isFav]);

  const handleFav = () => {
    setItem("favMeal", meal);
    setIsFav(!isFav);
  };

  const handleUnFav = () => {
    remoteOneItem("favMeal", meal);
    setIsFav(!isFav);
  };

  const hClick = () => {
    const isAlreadyFav = favMeals.some(
      (favMeal) => favMeal.idMeal === meal.idMeal
    );
    if (isAlreadyFav) {
      handleUnFav();
    } else {
      handleFav();
    }
  };

  return (
    <div className="w-60 overflow-hidden rounded-md border shadow-sm">
      <div className="group relative flex h-64 items-end justify-end overflow-hidden">
        <img
          src={meal.strMealThumb}
          alt=""
          className="absolute z-30 h-full w-full object-cover duration-300 group-hover:scale-110"
        />
        <div className="absolute z-40 h-full w-full bg-gradient-to-b from-transparent to-white opacity-99" />
      </div>
      <div className="px-4 py-6">
        <div>
          <Tag key={meal.idMeal} name={meal.strMeal} />
        </div>
        <div className="mt-8 flex justify-between ">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-amber-600 px-4 py-2 text-sm font-medium text-white shadow-lg hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            onClick={hClick}
          >
            {favMeals?.some((favMeal) => favMeal.idMeal === meal.idMeal) ? (
              <EyeSlashIcon className="h-6 w-6" />
            ) : (
              <HeartIcon className="h-6 w-6" />
            )}
          </button>
          <Button name="CalendarIcon" href="#" />
          <Button name="InformationCircleIcon" href={meal.idMeal} />
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  meal: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Card;
