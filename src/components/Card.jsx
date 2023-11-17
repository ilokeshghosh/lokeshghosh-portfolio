import { Contact } from ".";
import {
  BiLogoInstagramAlt,
  BsLinkedin,
  BsGithub,
  BsFacebook,
} from "../Logos/index.logos";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    // card content
    <div className="w-full hidden rounded-lg md:flex flex-col border border-slate-600 justify-center items-center gap-3 py-2 px-5">
      {/* name */}
      <h2 className="w-full  text-2xl font-semibold">
        {" "}
        <span className="text-orange-600">L</span>okesh{" "}
        <span className="text-orange-600">G</span>hosh
      </h2>

      {/* image */}
      <img
        className=" w-full h-[100%] rounded-lg"
        src="https://ik.imagekit.io/8fgpvoiai/profile/out._Vt6Gk9Ia-p.jpg?updatedAt=1700229684772"
        alt="profile image"
      />

      {/* description */}
      <div className="flex flex-col justify-center items-center w-full">
        {/* location */}
        <h2 className="text-xl font-semibold">Kolkata, India</h2>
        {/* role / description */}
        <h3 className="text-lg text-slate-500">Software Engineer</h3>
      </div>

      {/* social logos */}
      <div className="flex w-full justify-between items-center text-[30px]">
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

      {/* hire me button */}
      <Link
        to="/contact"
        className="px-4 py-2 bg-orange-500 border-2 text-center border-orange-500 hover:bg-transparent hover:text-white text-black font-bold text-lg w-full rounded-lg my-4"
      >
        HIRE ME!
      </Link>
    </div>
  );
}
