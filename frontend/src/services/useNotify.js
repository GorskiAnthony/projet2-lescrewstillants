import { toast } from "react-toastify";

const success = (msg) => {
  toast.success(msg, {
    position: toast.POSITION.BOTTOM_RIGHT,
  });
};

const error = (msg) => {
  toast.error(msg, {
    position: toast.POSITION.BOTTOM_RIGHT,
  });
};

const warn = (msg) => {
  toast.warn(msg, {
    position: toast.POSITION.BOTTOM_RIGHT,
  });
};

export { success, error, warn };
