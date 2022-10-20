import Tag from "@components/Tag";
import Button from "@components/Button";
import PropTypes from "prop-types";

function Card({ meal }) {
  const tags = meal.strTags.split(",");
  return (
    <div className="w-full overflow-hidden rounded-md border shadow-sm">
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
          {tags.map((tag) => (
            <Tag key={tag} name={tag} />
          ))}
        </div>
        <div className="mt-8 flex justify-between ">
          <Button name="HeartIcon" href="#" />
          <Button name="CalendarIcon" href="#" />
          <Button name="InformationCircleIcon" href="#" />
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  meal: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Card;
