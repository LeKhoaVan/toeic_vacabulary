import { Outlet } from "react-router"
import Footer from "../../Footer"
import Header from "../../Header"

export function DefaultLayout() {

    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}