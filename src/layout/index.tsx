import Header from "./Header";
import Footer from "./Footer";
import GoToTop from "../components/GoToTop";

function Layout(props: any) {
  return (
    <div className="w-full mx-auto relative">
      <Header />
      {props.children}
      <Footer />
      <GoToTop />
    </div>
  );
}

export default Layout;
