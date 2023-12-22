import { SliderData } from "./data";
import Slider from "./Slider";
import { Link } from "react-router-dom";
export default function Projects() {
  // console.log('hi there');
  return (
    <div className="md:w-[80%] w-full  flex flex-col  justify-start md:gap-2 gap-10 py-4 ">
      {/* heading */}
      <div className="flex justify-start items-center flex-col xl:flex-row gap-3 md:gap-0">
        <div className="md:text-5xl text-4xl justify-center md:justify-start font-bold flex gap-4 w-[60%]">
          <h3>Featured</h3>
          <h3 className="text-orange-600">Projects</h3>
        </div>

        <div className="flex justify-center items-center w-[50%] md:w-[20%]">
          {" "}
          <Link
            to={"/project-landing-page"}
            className="text-orange-600 text-xs border border-orange-600  px-5 py-2 rounded-3xl text-center"
          >
            See All Projects
          </Link>
        </div>
      </div>

      {/* content container*/}
      <div className="w-full flex flex-col items-start  justify-between gap-8">
        {/* image slider */}
        <Slider slides={SliderData} />
      </div>
    </div>
  );
}
