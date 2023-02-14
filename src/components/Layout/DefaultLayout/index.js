import Header from "~/components/Layout/components/Header";
import Sidebar from "./Sidebar";
import Footer from "../components/Footer";

function DefaultLayout({children}) {
    return (
        <div>
            <Header />
            <div>
                <Sidebar />
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
        
    );
}

export default DefaultLayout;