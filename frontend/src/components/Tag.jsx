import PropTypes from "prop-types";

function Tag({ name }) {
  return (
    <span className="inline-flex items-center rounded-full bg-amber-600 px-3 py-.5 px-5 text-sm font-medium text-pink-50 mx-1">
      {name}
    </span>
  );
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Tag;
