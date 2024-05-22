import { toast } from "react-toastify";

export const notify = (type, msg, id) =>
  toast[type](msg, {
    position: toast.POSITION.TOP_RIGHT,
    toastId: id,
  });
