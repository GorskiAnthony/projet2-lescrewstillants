import {
  HeartIcon,
  CalendarIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";
import PropTypes from "prop-types";

function Button({ name, href }) {
  const icons = {
    HeartIcon: <HeartIcon className="h-6 w-6" />,
    CalendarIcon: <CalendarIcon className="h-6 w-6" />,
    InformationCircleIcon: <InformationCircleIcon className="h-6 w-6" />,
  };

  return (
    <a
      href={href}
      type="button"
      className="inline-flex items-center rounded-md border border-transparent bg-amber-600 px-4 py-2 text-sm font-medium text-white shadow-lg hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 shadow-lg"
    >
      {icons[name]}
    </a>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default Button;
