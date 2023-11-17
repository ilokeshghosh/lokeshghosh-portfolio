import { Outlet, Link } from "react-router-dom";
import { Card, Nav } from "./components/index";
import { useState } from "react";
import {
  BiLogoInstagramAlt,
  BsLinkedin,
  BsGithub,
  BsFacebook,
} from "./Logos/index.logos";
function Layout() {
  const [isCardActive, setIsCardActive] = useState(false);

  function handleCard() {
    setIsCardActive(!isCardActive);
  }
  return (
    // wrapper
    <div className=" rounded-lg  h-screen w-screen flex justify-between items-center px-4">
      {/* card wrapper */}
      <div className="hidden md:inline-block  text-white w-[20%]">
        <Card />
      </div>


    {/* card for small device */}
      <div
        className={` ${
          isCardActive ? `border backdrop-blur-2xl` : `w-[100px] `
        } border-slate-500 rounded-tr-3xl  rounded-lg flex md:hidden w-[300px] item-start justify-end  fixed top-32 right-2 z-10`}
      >
        {/* card content */}
        <div
          className={`rounded-lg text-white  transition-all  px-4 py-2 text-center ${
            isCardActive ? `inline-block` : `hidden`
          }`}
        >
          {/* description */}
          <div className="flex flex-col justify-center items-center w-full mb-3">
            {/* location */}
            <h2 className="text-xl font-semibold">Kolkata, India</h2>
            {/* role / description */}
            <h3 className="text-lg text-slate-500">Software Engineer</h3>
          </div>

          {/* social logos */}
          <div className="flex w-full gap-5 justify-between items-center text-[30px]">
            <Link to="https://www.linkedin.com/in/ilokeshghosh/">
              <BsLinkedin />
            </Link>
            <Link to="https://github.com/ilokeshghosh">
              <BsGithub />
            </Link>
            <Link to="https://www.instagram.com/i_lokeshghosh/">
              <BiLogoInstagramAlt />
            </Link>
            <Link to="https://www.facebook.com/ilokeshghosh/">
              <BsFacebook />
            </Link>
          </div>
        </div>

        <button
          className="cursor-pointer flex items-start justify-center"
          onMouseEnter={handleCard}
          onMouseLeave={handleCard}
          aria-label='profileButton'
        >
          <img
            className="w-[50px] h-auto border border-slate-400 rounded-full "
            src="https://ik.imagekit.io/8fgpvoiai/profile/out.-removebg-preview_qWWF-CyHP.png?updatedAt=1700229683095"
            alt=""
          />
        </button>
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
  );
}

export default Layout;
