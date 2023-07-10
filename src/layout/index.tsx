import Header from "./Header";
import Footer from "./Footer";

function Layout(props: any) {
    return (
        <div className="w-full mx-auto">
            <Header />
            {props.children}
            <Footer />
        </div>
    );
}

export default Layout;
