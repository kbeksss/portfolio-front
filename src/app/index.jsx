import Routing from "pages";
import { withProviders } from "./providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer autoClose={1000} />
      <Routing />
    </>
  );
}

export default withProviders(App);
