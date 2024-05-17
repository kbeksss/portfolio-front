import Header from "./ui/Header";
import Footer from "./ui/Footer";
import "./index.css";

const Layout = ({ children }) => {
  return (
    <div className={"whole-page font-mono"} key="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
