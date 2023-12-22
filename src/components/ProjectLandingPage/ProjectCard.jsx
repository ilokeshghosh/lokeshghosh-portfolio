import { Link } from "react-router-dom";

export default function ProjectCard({
  className = "",
  flexDirection = "flex-row",
  textAlign='',
  title,
  imgUrl,
  imgAlt = "project-image",
  projectUrl,
  year,
  projectTag,
  projectContent,
}) {
  
  return (
    <div
      className={`flex  flex-col items-center lg:${flexDirection} justify-center lg:w-[80%] sm:w-[60%] w-[80%] mx-auto lg:gap-20 gap-5 bg-white py-4 px-4 rounded-xl`}
    >
      <img
        className="lg:w-[310px] w-full lg:h-[186px] rounded-xl border border-[#8695A4]"
        src={imgUrl}
        alt={imgAlt}
      />

      {/* right section */}
      <div className={`flex   flex-col gap-2 lg:w-[90%] w-full lg:${className} items-center`}>
        {/* project title */}
        <h2 className={`lg:text-4xl md:text-2xl text-xl text-center font-bold lg:${textAlign}`}>
          <Link className="w-full " to={projectUrl}>{title}</Link>
        </h2>

        {/* tags section */}
        <div className={`flex lg:justify-start justify-center gap-4 lg:${flexDirection}`}>
          <button className=" text-white bg-black flex justify-center items-center py-1 lg:px-6 px-4 text-center lg:text-base text-sm rounded-full font-bold">
            {year}
          </button>
          <button className="text-[#8695A4]  lg:text-lg text-base">{projectTag}</button>
        </div>

        {/* content */}
        <div className={`lg:${textAlign}   text-center`}>{projectContent}</div>
      </div>
    </div>
  );
}
