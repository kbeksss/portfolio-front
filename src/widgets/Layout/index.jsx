import Header from "./ui/Header";
import Footer from "./ui/Footer";
import "./index.css";

const Layout = ({ children }) => {
  return (
    <div className={"whole-page font-mono"}>
      <div className={"py-5 px-8"}>
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
