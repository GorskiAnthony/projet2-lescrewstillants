import PropTypes from "prop-types";

function Tag({ name }) {
  const tags = name.split(",");

  return (
    <>
      {tags.map((tag) => {
        return (
          <span className="inline-flex items-center rounded-full bg-amber-600 py-.5 px-5 text-sm font-medium text-pink-50 mx-1">
            {tag}
          </span>
        );
      })}
    </>
  );
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Tag;
