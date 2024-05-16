import Header from "./ui/Header";
import Footer from "./ui/Footer";
import "./index.css";

const Layout = ({ children }) => {
  return (
    <div className={"whole-page font-mono"}>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
