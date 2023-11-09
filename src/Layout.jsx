import { Outlet } from "react-router-dom";
import { Card, Nav } from './components/index'
function Layout() {
    return (
        // wrapper
        <div className=" rounded-lg  h-screen w-screen flex justify-between items-center px-4">
            {/* card wrapper */}
            <div className="border border-slate-600 rounded-lg   text-white w-[20%]">
                <Card />
            </div>

            {/* outlet wrapper */}
            <div className="flex justify-center items-start  gap-10 h-full px-4 py-[6rem]  rounded text-white w-[78%] ">
                {/* outlet */}
                <div className="w-[90%] flex ">
                    <Outlet />
                </div>

                {/* nav wrapper */}
                <div className="w-[5%] border border-slate-600 rounded-full self-center">
                    <Nav />
                </div>
            </div>
        </div>
    )
}

export default Layout;