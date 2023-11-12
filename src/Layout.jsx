import { Outlet } from "react-router-dom";
import { Card, Nav } from './components/index'
function Layout() {
    return (
        // wrapper
        <div className=" rounded-lg  h-screen w-screen flex justify-between items-center px-4">
            {/* card wrapper */}
            <div className="hidden md:inline-block  text-white w-[20%]">
                <Card />
            </div>

            {/* outlet wrapper */}
            <div className="flex justify-center items-start   gap-10 h-full px-4 md:py-[4rem] py-[2rem]  rounded text-white md:w-[78%] w-full ">
                {/* outlet */}
                <div className="md:w-[90%] w-full flex py-[1rem]">
                    <Outlet />
                </div>

                {/* nav wrapper */}
                <div className="md:w-[5%] px-4 md:px-0 w-full backdrop-blur-xl md:backdrop-blur-none  fixed md:static bottom-0 left-0  border border-slate-600 rounded-lg md:rounded-full self-center">
                    <Nav />
                </div>
            </div>
        </div>
    )
}

export default Layout;