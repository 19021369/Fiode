import Header from "~/components/Layout/components/Header";
import Footer from "../components/Footer";
import ScrollTop from '~/components/ScrollTop';


function DefaultLayout({children}) {
    return (
        <div>
            <Header />
            <div>
                <div className="content">{children}</div>
            </div>
            <Footer />
            <ScrollTop />
        </div>
        
    );
}

export default DefaultLayout;