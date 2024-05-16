import Header from "./ui/Header";
import Footer from "./ui/Footer";

const Layout = ({ children }) => {
  return (
    <div className={"all"}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
