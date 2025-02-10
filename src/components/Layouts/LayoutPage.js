import { Outlet } from "react-router-dom";
import Banner from "../Banner";
import Footer from "../Footer";
import NavigationMenu from "../Header";

function LayoutPage() {
    return (
        <>
            <NavigationMenu />
        
            <main >
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
export default LayoutPage;