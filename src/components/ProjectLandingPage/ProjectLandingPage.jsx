import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import {
  featuredProjects,
  reactProjects,
  htmlCssProjects,
  figmaProjects,
  jsProjects,
  muiProjects,
} from "./ProjectData/index";

import {
  FaReact,
  IoLogoJavascript,
  SiTailwindcss,
  BsGit,
  BiLogoMongodb,
  FaFigma,
  SiAppwrite,
  FaHtml5,
  FaCss3,
  MdOutlineFolderSpecial,
  LuHome,
  SiMui,
  SiExpress,
  SiReactquery,
  SiRedux,
  SiTypescript,
} from "../../Logos/index.logos";

import { ProjectCard } from "../";
import { HashLink } from "react-router-hash-link";

export default function ProjectLandingPage() {
  const [hashLinkActive, setHashLinkActive] = useState({
    featuredProject: false,
    react: false,
    js: false,
    htmlCss: false,
    figma: false,
    mui: false,
  });
  return (
    <div className="overflow-y-auto no-scrollbar">
      {/* wrapper*/}
      <div className="">
        {/* nav bar */}
        <nav className="w-[100%]    bottom-0 lg:top-0  z-50 px-2 md:px-20 h-[10%] mx-auto lg:mx-0 flex items-center justify-center py-4 fixed backdrop-blur-3xl">
          {/* logo */}

          <a className="hidden lg:w-[40%] lg:inline-block" href="#home">
            {" "}
            <img
              className="w-[40px]  h-[40px] border border-[#e0e0e0] rounded-full bg-[#f9e6f0]"
              src="https://ik.imagekit.io/8fgpvoiai/profile/octocat-1693317410462_d12-ZLppu.png?updatedAt=1700229684325"
              alt="logo"
            />
          </a>

          {/* icons container */}
          <ul
            className="flex   w-full mx-auto lg:w-[90%] justify-between items-center lg:gap-10 gap-5 font-bold "
            style={{ fontFamily: "'Epilogue', sans-serif" }}
          >
            <li className="text-[#ea58a5]">
              {" "}
              <Link className="lg:inline-block hidden" to={"/projects"}>
                Home
              </Link>
              <Link to={"/projects"} className="text-2xl lg:hidden">
                <LuHome />
              </Link>
            </li>
            <li>
              <a className="lg:inline-block hidden" href="#featuredProject">
                Featured Projects
              </a>
              <HashLink
                smooth
                onClick={(e) => {
                  setHashLinkActive((prevState) => ({
                    ...prevState,
                    featuredProject: true,
                    react: false,
                    js: false,
                    htmlCss: false,
                    figma: false,
                    mui: false,
                  }));
                }}
                to={"/project-landing-page#featuredProject"}
                className={`transition-all lg:hidden duration-300 ease-linear ${
                  hashLinkActive.featuredProject
                    ? "text-[#FFB534] text-3xl"
                    : "text-2xl"
                }`}
              >
                <MdOutlineFolderSpecial />
              </HashLink>
            </li>
            <li>
              <a className="lg:inline-block hidden" href="#react">
                React
              </a>
              <HashLink
                smooth
                onClick={(e) => {
                  setHashLinkActive((prevState) => ({
                    ...prevState,
                    featuredProject: false,
                    react: true,
                    js: false,
                    htmlCss: false,
                    figma: false,
                    mui: false,
                  }));
                }}
                to={"/project-landing-page#react"}
                className={`transition-all lg:hidden duration-300 ease-linear ${
                  hashLinkActive.react ? "text-blue-400 text-3xl" : "text-2xl"
                }`}
              >
                <FaReact />
              </HashLink>
            </li>
            <li>
              <a className="lg:inline-block hidden" href="#js">
                JS
              </a>
              <HashLink
                smooth
                onClick={(e) => {
                  setHashLinkActive((prevState) => ({
                    ...prevState,
                    featuredProject: false,
                    react: false,
                    js: true,
                    htmlCss: false,
                    figma: false,
                    mui: false,
                  }));
                }}
                to={"/project-landing-page#js"}
                className={`transition-all lg:hidden duration-300 ease-linear ${
                  hashLinkActive.js ? "text-yellow-400 text-3xl" : "text-2xl"
                }`}
              >
                <IoLogoJavascript />
              </HashLink>
            </li>
            <li>
              <a className="lg:inline-block hidden" href="#htmlCss">
                HTML + CSS
              </a>
              <HashLink
                smooth
                onClick={(e) => {
                  setHashLinkActive((prevState) => ({
                    ...prevState,
                    featuredProject: false,
                    react: false,
                    js: false,
                    htmlCss: true,
                    figma: false,
                    mui: false,
                  }));
                }}
                to={"/project-landing-page#htmlCss"}
                className={`transition-all lg:hidden duration-300 ease-linear ${
                  hashLinkActive.htmlCss
                    ? "text-[#e34c26] text-3xl"
                    : "text-2xl"
                }`}
              >
                <FaHtml5 />
              </HashLink>
            </li>
            <li>
              <a className="lg:inline-block hidden" href="#mui">
                MUI
              </a>
              <HashLink
                smooth
                onClick={(e) => {
                  setHashLinkActive((prevState) => ({
                    ...prevState,
                    featuredProject: false,
                    react: false,
                    js: false,
                    htmlCss: false,
                    figma: false,
                    mui: true,
                  }));
                }}
                to={"/project-landing-page#mui"}
                className={`transition-all lg:hidden duration-300 ease-linear ${
                  hashLinkActive.mui ? "text-[#007FFF] text-3xl" : "text-2xl"
                }`}
              >
                <SiMui />
              </HashLink>
            </li>
            <li>
              <a className="lg:inline-block hidden" href="#figma">
                Figma
              </a>
              <HashLink
                smooth
                onClick={(e) => {
                  setHashLinkActive((prevState) => ({
                    ...prevState,
                    featuredProject: false,
                    react: false,
                    js: false,
                    htmlCss: false,
                    figma: true,
                    mui: false,
                  }));
                }}
                to={"/project-landing-page#figma"}
                className={`transition-all lg:hidden duration-300 ease-linear ${
                  hashLinkActive.figma ? "text-[#F24E1E] text-3xl" : "text-2xl"
                }`}
              >
                <FaFigma />
              </HashLink>
            </li>
          </ul>
        </nav>

        {/* content section */}
        <main className="h-[100%] ">
          {/* hero  and skills wrapper */}
          <div id="home" className="h-full">
            {/* hero page wrapper */}
            <div className="bg-[#F9E6F0]  md:py-32 h-[70%]">
              {/* hero page content */}
              <div
                className="lg:w-[60%] w-full mx-auto flex-col lg:flex-row flex justify-center items-center gap-10  "
                style={{ fontFamily: "'Epilogue', sans-serif" }}
              >
                {/* right section */}
                <div className="flex flex-col  lg:items-start  justify-center items-center  gap-3 text-lg w-[30%] ">
                  {/* image */}
                  <img
                    className="w-[195px] border-2 border-zinc-900"
                    src="https://ik.imagekit.io/8fgpvoiai/profile/profile-image-black-white_81gzUNk43.png?updatedAt=1703005079604"
                    alt="profile-image"
                  />

                  {/* name and title */}
                  <div className="flex  flex-col gap-1 font-bold">
                    <h3 className="underline">Lokesh Ghosh</h3>
                    <h3>Software Engineering</h3>
                  </div>
                </div>

                {/* left section */}
                <div className="  w-[80%] h-full">
                  {/* upper section */}
                  <h3 className="font-bold text-lg">Bio:</h3>
                  <h3 className="">
                    Hello, I'm Lokesh Ghosh, a recent graduate with a Bachelor's
                    in Computer Application. I'm currently immersed in learning
                    Typescript and Backend to expand my skills as a FullStack
                    Developer. My journey in web development is fueled by a
                    curiosity to create seamless and innovative digital
                    experiences.
                  </h3>
                </div>
              </div>
            </div>

            <div className="w-[90%] border-[#2D2D2D] mx-auto rounded-full border-[3px]"></div>

            {/* skill section */}
            <div
              className="flex h-[25%] justify-between items-center overflow-x-auto no-scrollbar gap-10 py-8 mx-auto w-[90%]"
              style={{ fontFamily: "'Epilogue', sans-serif" }}
            >
              {/* skill1 */}
              <div className="flex flex-col justify-center gap-4 items-center">
                <FaReact className="text-blue-400 lg:text-7xl text-4xl" />
                <h3 className="font-semibold ">React</h3>
              </div>

              {/* skill2 */}
              <div className="flex flex-col justify-center gap-4 items-center">
                <IoLogoJavascript className="text-yellow-400 lg:text-7xl text-4xl" />
                <h3 className="font-semibold ">JavaScript</h3>
              </div>

              {/* skill3 */}
              <div className="flex flex-col justify-center gap-4 items-center">
                <SiTailwindcss className="text-cyan-400 lg:text-7xl text-4xl" />
                <h3 className="font-semibold ">TailwindCSS</h3>
              </div>

              {/* skill4 */}
              <div className="flex flex-col justify-center gap-4 items-center">
                <BsGit className="text-orange-600 lg:text-7xl text-4xl" />
                <h3 className="font-semibold ">Git</h3>
              </div>

              {/* skill5 */}
              <div className="flex flex-col justify-center gap-4 items-center">
                <BiLogoMongodb className="text-green-600 lg:text-7xl text-4xl" />
                <h3 className="font-semibold ">MongoDB</h3>
              </div>

              {/* skill6 */}
              <div className="flex flex-col justify-center gap-4 items-center">
                <SiAppwrite className="lg:text-7xl text-4xl text-[#fc4478]" />
                <h3 className="font-semibold ">Appwrite</h3>
              </div>

              {/* skill7 */}
              <div className="flex flex-col justify-center gap-4 items-center">
                <FaFigma className="lg:text-7xl text-4xl text-[#F24E1E]" />
                <h3 className="font-semibold ">Figma</h3>
              </div>

              {/* skill8 */}
              <div className="flex flex-col justify-center gap-4 items-center">
                <SiMui className="lg:text-7xl text-4xl text-[#007FFF]" />
                <h3 className="font-semibold ">MUI</h3>
              </div>

              {/* skill9 */}
              <div className="flex flex-col justify-center gap-4 items-center">
                <SiExpress className="lg:text-7xl text-4xl text-[#000000]" />
                <h3 className="font-semibold ">Express</h3>
              </div>

              {/* skill10 */}
              <div className="flex flex-col justify-center gap-4 items-center">
                <SiReactquery className="lg:text-7xl text-4xl text-[#FF4154]" />
                <h3 className="font-semibold text-center">React Query</h3>
              </div>

              {/* skill11 */}
              <div className="flex flex-col justify-center gap-4 items-center">
                <SiRedux className="lg:text-7xl text-4xl text-[#764ABC]" />
                <h3 className="font-semibold ">Redux</h3>
              </div>

              {/* skill12 */}
              <div className="flex flex-col justify-center gap-4 items-center">
                <SiTypescript className="lg:text-7xl text-4xl text-[#3178C6]" />
                <h3 className="font-semibold ">Typescript</h3>
              </div>
            </div>

            <div className="w-[90%] border-[#2D2D2D] mx-auto rounded-full border-[3px]"></div>
          </div>

          {/* featured projects */}
          <div
            id="featuredProject"
            className=" bg-[#EDF7FA]  py-24 flex flex-col  "
            style={{ fontFamily: "'Epilogue', sans-serif" }}
          >
            {/* upper section */}
            <div className="flex flex-col justify-center items-center  w-full">
              <h3 className="font-bold lg:text-start text-center text-lg w-[90%]">
                Featured Projects
              </h3>
              <div className="w-[90%] border-[#2D2D2D] mx-auto rounded-full border-[3px]"></div>
            </div>

            {/* project section */}
            <div className="py-10 flex flex-col  flex-wrap lg:flex-nowrap gap-3 h-[90%]">
              {featuredProjects.map((item, index) => (
                <div key={index}>
                  <ProjectCard
                    title={item.title}
                    imgUrl={item.imgUrl}
                    imgAlt={item.imgAlt}
                    projectContent={item.projectContent}
                    projectTag={item.projectTag}
                    projectUrl={item.projectUrl}
                    year={item.year}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* React wrapper */}
          <div
            id="react"
            className="py-24"
            style={{ fontFamily: "'Epilogue', sans-serif" }}
          >
            {/* upper section */}
            <div className="flex flex-col justify-center items-start gap-2">
              {/* name and logo */}
              <div className="flex  lg:justify-start justify-center text-5xl lg:text-base gap-2 mx-auto items-center w-[90%]">
                <FaReact className="text-blue-400 lg:text-3xl text-5xl animate-spin-slow" />
                <h3 className="font-semibold ">React</h3>
              </div>

              <div className="w-[90%] border-[#2D2D2D] mx-auto rounded-full border-[3px]"></div>
            </div>

            {/* lower section */}
            <div className="flex flex-col gap-4 py-4 w-full">
              {reactProjects.map((item, index) => (
                <div key={index}>
                  <ProjectCard
                    index={index}
                    title={item.title}
                    imgUrl={item.imgUrl}
                    imgAlt={item.imgAlt}
                    projectContent={item.projectContent}
                    projectTag={item.projectTag}
                    projectUrl={item.projectUrl}
                    year={item.year}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* js wrapper*/}
          <div
            id="js"
            className="py-24   flex flex-col justify-start items-center gap-8"
            style={{ fontFamily: "'Epilogue', sans-serif" }}
          >
            {/* upper section */}
            <div className="flex flex-col  justify-center items-start gap-2 w-full">
              {/* name and logo */}
              <div className="flex   lg:justify-start justify-center text-5xl lg:text-base gap-2 mx-auto items-center w-[90%]">
                <IoLogoJavascript className="text-yellow-400 lg:text-3xl text-5xl animate-pulse" />
                <h3 className="font-semibold ">JavaScript</h3>
              </div>

              <div className="w-[90%] border-[#2D2D2D] mx-auto rounded-full border-[3px]"></div>
            </div>

            {/* lower section */}
            <div className="flex flex-col gap-4 py-4 w-full">
              {jsProjects.map((item, index) => (
                <div key={index}>
                  <ProjectCard
                    index={index}
                    title={item.title}
                    imgUrl={item.imgUrl}
                    imgAlt={item.imgAlt}
                    projectContent={item.projectContent}
                    projectTag={item.projectTag}
                    projectUrl={item.projectUrl}
                    year={item.year}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* html + css wrapper*/}
          <div
            id="htmlCss"
            className="py-24 flex flex-col justify-start items-center gap-8"
            style={{ fontFamily: "'Epilogue', sans-serif" }}
          >
            {/* upper section */}
            <div className="flex flex-col justify-center items-start gap-2 w-full">
              {/* name and logo */}
              <div className="flex  lg:justify-start justify-center text-2xl lg:text-base gap-1 mx-auto items-center w-[90%]">
                <FaHtml5 className="text-[#e34c26] lg:text-3xl text-5xl animate-pulse" />
                <h3 className="font-semibold ">HTML +</h3>
                <FaCss3 className="text-[#264de4] lg:text-3xl text-5xl animate-pulse" />
                <h3 className="font-semibold"> CSS</h3>
              </div>

              <div className="w-[90%] border-[#2D2D2D] mx-auto rounded-full border-[3px]"></div>
            </div>

            {/* lower section */}
            <div className="flex flex-col gap-4 py-4 w-full">
              {htmlCssProjects.map((item, index) => (
                <div key={index}>
                  <ProjectCard
                    index={index}
                    title={item.title}
                    imgUrl={item.imgUrl}
                    imgAlt={item.imgAlt}
                    projectContent={item.projectContent}
                    projectTag={item.projectTag}
                    projectUrl={item.projectUrl}
                    year={item.year}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* mui wrapper */}
          <div
            id="mui"
            className="py-24 h-screen  flex flex-col justify-start items-center gap-8"
            style={{ fontFamily: "'Epilogue', sans-serif" }}
          >
            {/* upper section */}
            <div className="flex flex-col justify-center items-start gap-2 w-full">
              {/* name and logo */}
              <div className="flex  lg:justify-start justify-center text-5xl lg:text-base gap-1 mx-auto items-center w-[90%]">
                <SiMui className="text-[#007FFF] lg:text-3xl text-5xl animate-pulse" />
                <h3 className="font-semibold ">MUI</h3>
              </div>

              <div className="w-[90%] border-[#2D2D2D] mx-auto rounded-full border-[3px]"></div>
            </div>

            {/* lower section */}
            <div className="flex flex-col gap-4 py-20 w-full">
              {muiProjects.map((item, index) => (
                <div key={index}>
                  <ProjectCard
                    index={index}
                    title={item.title}
                    imgUrl={item.imgUrl}
                    imgAlt={item.imgAlt}
                    projectContent={item.projectContent}
                    projectTag={item.projectTag}
                    projectUrl={item.projectUrl}
                    year={item.year}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* figma wrapper */}
          <div
            id="figma"
            className="py-24 h-screen  flex flex-col justify-start items-center gap-8"
            style={{ fontFamily: "'Epilogue', sans-serif" }}
          >
            {/* upper section */}
            <div className="flex flex-col justify-center items-start gap-2 w-full">
              {/* name and logo */}
              <div className="flex  lg:justify-start justify-center text-5xl lg:text-base gap-1 mx-auto items-center w-[90%]">
                <FaFigma className="text-[#e34c26] lg:text-3xl text-5xl animate-pulse" />
                <h3 className="font-semibold ">Figma</h3>
              </div>

              <div className="w-[90%] border-[#2D2D2D] mx-auto rounded-full border-[3px]"></div>
            </div>

            {/* lower section */}
            <div className="flex flex-col gap-4 py-20 w-full">
              {figmaProjects.map((item, index) => (
                <div key={index}>
                  <ProjectCard
                    index={index}
                    title={item.title}
                    imgUrl={item.imgUrl}
                    imgAlt={item.imgAlt}
                    projectContent={item.projectContent}
                    projectTag={item.projectTag}
                    projectUrl={item.projectUrl}
                    year={item.year}
                  />
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
