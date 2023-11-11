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
    <div className="w-full flex flex-col justify-center items-center gap-3 py-2 px-5">
      {/* name */}
      <h2 className="w-full  text-2xl font-semibold">
        {" "}
        <span className="text-orange-600">L</span>okesh{" "}
        <span className="text-orange-600">G</span>hosh
      </h2>

      {/* image */}
      <img
        className=" w-full rounded-lg"
        src="https://raw.githubusercontent.com/ilokeshghosh/RESOURCE_WAREHOUSE/main/profile%20images/out..jpg"
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
        <Link to="https://reactrouter.com/en/main/components/link">
          <BsLinkedin />
        </Link>
        <Link to="https://reactrouter.com/en/main/components/link">
          <BsGithub />
        </Link>
        <Link to="https://reactrouter.com/en/main/components/link">
          <BiLogoInstagramAlt />
        </Link>
        <Link to="https://reactrouter.com/en/main/components/link">
          <BsFacebook />
        </Link>
      </div>

      {/* hire me button */}
      <button className="px-4 py-2 bg-orange-500 border-2 border-orange-500 hover:bg-transparent hover:text-white text-black font-bold text-lg w-full rounded-lg my-4">
        HIRE ME!
      </button>
    </div>
  );
}
