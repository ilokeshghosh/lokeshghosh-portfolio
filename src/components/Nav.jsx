import { Link, NavLink } from "react-router-dom";

import { PiUserList, BiHome, BsCodeSlash, BsChatLeftText, GoProjectRoadmap, FiGrid, LiaBookSolid } from '../Logos/index.logos'

export default function Nav() {

    return (
        <div className="w-full flex flex-col items-center justify-evenly gap-10 py-6">

            {/* home */}
            <NavLink
                to='/'
                className={({ isActive }) => `text-2xl duration-300 transition-transform font-bold ${isActive ? 'text-orange-600 scale-[1.3]' : 'text-white'}`}
            >
                <BiHome />
            </NavLink>

            {/* about */}
            <NavLink
                to='/about'
                className={({ isActive }) => `text-2xl duration-300 transition-transform font-bold ${isActive ? 'text-orange-600 scale-[1.3]' : 'text-white'}`}
            >
                <PiUserList />
            </NavLink>

            {/* Education */}
            <NavLink
                to='/educations'
                className={({ isActive }) => `text-2xl duration-300 transition-transform font-bold ${isActive ? 'text-orange-600 scale-[1.3]' : 'text-white'}`}
            >
                <LiaBookSolid />
            </NavLink>

            {/* skill */}
            <NavLink
                to='/skills'
                className={({ isActive }) => `text-2xl duration-300 transition-transform font-bold ${isActive ? 'text-orange-600 scale-[1.3]' : 'text-white'}`}
            >
                <BsCodeSlash />
            </NavLink>

            {/* specializations */}
            {/* <NavLink
                to='/specializations'
                className={({ isActive }) => `text-2xl duration-300 transition-transform font-bold ${isActive ? 'text-orange-600 scale-[1.3]' : 'text-white'}`}
            >
                <GoProjectRoadmap />
            </NavLink> */}

            {/* project */}
            <NavLink
                to='/projects'
                className={({ isActive }) => `text-2xl duration-300 transition-transform font-bold ${isActive ? 'text-orange-600 scale-[1.3]' : 'text-white'}`}
            >
                <FiGrid />
            </NavLink>

            {/* contact */}
            <NavLink
                to='/contact'
                className={({ isActive }) => `text-2xl duration-300 transition-transform font-bold ${isActive ? 'text-orange-600 scale-[1.3]' : 'text-white'}`}
            >
                <BsChatLeftText />
            </NavLink>

        </div>
    )
}