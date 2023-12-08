import { IoIosArrowUp } from "../Logos/index.logos";
import "./newCard.css";
import {
  BiLogoInstagramAlt,
  BsLinkedin,
  BsGithub,
  BsFacebook,
  MdOutlineConnectWithoutContact
} from "../Logos/index.logos";
import { Link,NavLink } from "react-router-dom";
export default function NewCard() {
  const expandCard = (event) => {
    // document.querySelector('.outer').classList.add('h-[80%]')
    // document.querySelector('.outer').classList.remove('h-[20%]')

    document.querySelector(".outer").style.height = "80%";

    // event.currentTarget.classList.toggle('h-[20%]')
    // event.currentTarget.classList.toggle('h-[80%]')
  };

  const shrinkCard = (event) => {
    // document.querySelector('.outer').classList.remove('h-[80%]')
    // document.querySelector('.outer').classList.add('h-[20%]')

    document.querySelector(".outer").style.height = "20%";
  };
  return (
    // card wrapper
    <div
      onMouseEnter={expandCard}
      onMouseLeave={shrinkCard}
      className="rounded-xl hidden overflow-y-hidden lg:w-[300px] lg:h-[300px] md:w-[200px] md:h-[200px] bg-cover bg-center bg-no-repeat md:flex justify-center items-end"
      style={{
        backgroundImage:
          "url(https://ik.imagekit.io/8fgpvoiai/profile/out._Vt6Gk9Ia-p.jpg?updatedAt=1700229684772)",
      }}
    >
      {/* card content */}
      <div className="md:h-[22%]   outer transition-height duration-500 ease-linear z-10 container rounded-xl  w-full relative flex justify-center items-center">
        <span className="z-20 circle opacity-100 shadow-none rounded-full  h-[70px] w-[90px] flex justify-center items-start py-1  absolute -top-[20px] right-[30%] ">
          <IoIosArrowUp />
        </span>

        {/* card wrapper */}
        <div className=" z-0 w-full h-full px-2 py-2   ">
          {/*  container */}
          <div className="h-full  overflow-y-hidden flex flex-col gap-5">
            {/* upper section */}
            <div className=" flex justify-between items-center">
              <h2 className="lg:text-2xl md:text-lg font-semibold text-white ">
                {" "}
                <span className="text-orange-600">L</span>okesh{" "}
                <span className="text-orange-600">G</span>hosh
              </h2>

              <Link className="text-orange-500 md:text-2xl lg:text-4xl" to="/contact">
                  <MdOutlineConnectWithoutContact />
                </Link>
             
            </div>

            {/* lower section */}
            <div className="flex flex-col lg:gap-8 md:gap-4">
              {/* description */}
              <div className="flex flex-col justify-center items-center w-full lg:gap-1">
                {/* location */}
                <h2 className="text-xl  font-semibold">Kolkata, India</h2>
                {/* role / description */}
                <h3 className="text-lg  text-slate-300">Software Engineer</h3>
              </div>

              {/* social logos */}
              <div className="flex w-full justify-evenly items-center  lg:text-4xl md:text-xl">
                <Link to="https://www.linkedin.com/in/ilokeshghosh/">
                  <BsLinkedin />
                </Link>
                <Link to="https://www.instagram.com/i_lokeshghosh/">
                  <BiLogoInstagramAlt />
                </Link>
                <Link to="https://www.facebook.com/ilokeshghosh/">
                  <BsFacebook />
                </Link>

                <Link
                className=""
                to="https://github.com/ilokeshghosh"
              >
                <BsGithub />
              </Link>
                
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
