import compose from "compose-function";
import { withRouter } from "./with-router.jsx";
import { withStore } from "./with-store.jsx";

export const withProviders = compose(withStore, withRouter);
