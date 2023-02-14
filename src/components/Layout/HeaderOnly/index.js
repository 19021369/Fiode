import Header from "~/components/Layout/components/Header";
import Footer from "../components/Footer";

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div>
                <div>{children}</div>
            </div>
            <Footer />
        </div>
        
    );
}

export default DefaultLayout;