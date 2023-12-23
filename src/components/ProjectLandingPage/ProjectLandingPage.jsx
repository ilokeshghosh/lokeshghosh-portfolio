import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

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
  MdOutlineFolderSpecial,LuHome
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
  });
  return (
    <div className="overflow-y-auto no-scrollbar">
      {/* wrapper*/}
      <div className="">
        {/* nav bar */}
        <nav className="w-[100%]    bottom-0 lg:top-0  z-50 px-20 h-[10%] mx-auto lg:mx-0 flex items-center justify-center py-4 fixed bg-white">
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
              <Link className="lg:inline-block hidden" to={"/projects"}>Home</Link>
              <Link to={"/projects"}  className="text-2xl lg:hidden"><LuHome/></Link>
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
              <a className="lg:inline-block hidden" href="#htmlCss">HTML + CSS</a>
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
                  }));
                }}
                to={"/project-landing-page#htmlCss"}
                className={`transition-all lg:hidden duration-300 ease-linear ${
                  hashLinkActive.htmlCss ? "text-[#e34c26] text-3xl" : "text-2xl"
                }`}
              >
                <FaHtml5 />
              </HashLink>
            </li>
            <li>
              <a className="lg:inline-block hidden" href="#figma">Figma</a>
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
                    React and MongoDB to expand my skills as a FullStack
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
              <h3 className="font-bold lg:text-start text-center text-lg w-[90%]">Featured Projects</h3>
              <div className="w-[90%] border-[#2D2D2D] mx-auto rounded-full border-[3px]"></div>
            </div>

            {/* project section */}
            <div className="py-10 flex flex-col flex-wrap lg:flex-nowrap gap-3 h-[90%]">
              
              {/* project card 1 */}
              <div className="flex items-center lg:flex-row flex-col justify-center lg:w-[80%] sm:w-[60%] w-[80%] mx-auto lg:gap-20 gap-5 bg-white py-4 px-4 rounded-xl">
                <img
                  className="lg:w-[310px] w-full lg:h-[186px] rounded-xl"
                  src="https://ik.imagekit.io/8fgpvoiai/project-image/artinest-project__oIf_SVV-.png?updatedAt=1702316763487"
                  alt="project1"
                />

                {/* right section */}
                <div className="flex flex-col gap-2 lg:w-[90%] w-full">
                  {/* project title */}
                  <h2 className="lg:text-4xl md:text-2xl text-xl lg:text-start text-center font-bold">
                    <Link to={"https://github.com/ilokeshghosh/artinest"}>
                      Artinest Blogging Platform
                    </Link>
                  </h2>

                  {/* tags section */}
                  <div className="flex lg:justify-start justify-center items-center gap-4">
                    <button className=" text-white bg-black flex justify-center items-center py-1 lg:px-6 px-4 lg:text-base text-sm text-center rounded-full font-bold">
                      2023
                    </button>
                    <button className="text-[#8695A4] lg:text-lg text-base ">
                      React + Appwrite
                    </button>
                  </div>

                  {/* content */}
                  <div className="lg:text-start  text-center">
                    Artinest Blog Platform is a modern web application built
                    with React.js for the frontend and powered by Appwrite as
                    the Backend as a Service (BaaS). This project provides a
                    seamless and user-friendly interface for registered users to
                    create, read, update, and delete blog posts, along with
                    additional features like profile picture and name
                    modification, email verification and advanced blog and
                    username search capabilities.
                  </div>
                </div>
              </div>

              {/* project card 2 */}
              <div className="flex flex-col lg:flex-row-reverse items-center justify-center lg:w-[80%] sm:w-[60%] w-[80%] mx-auto lg:gap-20 gap-5 bg-white py-4 px-4 rounded-xl">
                <img
                  className="lg:w-[310px] w-full lg:h-[186px] rounded-xl "
                  src="https://ik.imagekit.io/8fgpvoiai/project-image/react-todo-application_IKcr3divR.png?updatedAt=1700229585056"
                  alt="project1"
                />

                {/* right section */}
                <div className="flex flex-col justify-center items-center lg:items-end gap-2 lg:w-[90%] w-full">
                  {/* project title */}
                  <h2 className="lg:text-4xl md:text-2xl text-lg font-bold text-center lg:text-end">
                    <Link to={"https://lokesh-react-todo-project.netlify.app/"}>
                      {" "}
                      To-Do Application using React
                    </Link>
                  </h2>

                  {/* tags section */}
                  <div className="flex lg:flex-row-reverse justify-center gap-4">
                    <button className=" text-white bg-black flex justify-center items-center py-1 lg:px-6 px-4 lg:text-base text-sm text-center rounded-full font-bold">
                      2023
                    </button>
                    <button className="text-[#8695A4] lg:text-lg text-base ">
                      React + Redux Tool Kit
                    </button>
                  </div>

                  {/* content */}
                  <div className="lg:text-end text-center">
                    A Deployed React Project by using Redux Tool Kit
                  </div>
                </div>
              </div>

              {/* project card 3 */}
              <div className="flex lg:flex-row flex-col items-center justify-center lg:w-[80%] sm:w-[60%] w-[80%] mx-auto lg:gap-20 gap-5 bg-white py-4 px-4 rounded-xl">
                <img
                  className="lg:w-[310px] w-full lg:h-[186px] rounded-xl"
                  src="https://ik.imagekit.io/8fgpvoiai/project-image/js30_jqF4D2pFBp.png?updatedAt=1700229586132"
                  alt="project1"
                />

                {/* right section */}
                <div className="flex flex-col gap-2 w-[90%]">
                  {/* project title */}
                  <h2 className="lg:text-4xl md:text-2xl text-xl lg:text-start text-center font-bold">
                    <Link
                      to={
                        "https://ilokeshghosh.github.io/javascript-30/index%20page/dist/"
                      }
                    >
                      JavaScript 30
                    </Link>
                  </h2>

                  {/* tags section */}
                  <div className="flex lg:justify-start justify-center items-center gap-4">
                    <button className=" text-white bg-black flex justify-center items-center py-1 lg:px-6 px-4 lg:text-base text-sm tex-center rounded-full font-bold">
                      2023
                    </button>
                    <button className="text-[#8695A4] lg:text-lg text-base ">
                      HTML + CSS + JS
                    </button>
                  </div>

                  {/* content */}
                  <div className="lg:text-start  text-center">
                    Mastering JS Skills By Doing One Project at a Time and
                    Elevating Web Wizardry 🧙‍♂️🪄
                  </div>
                </div>
              </div>
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
            <div className="flex flex-col gap-4 py-4">
              {/* card 1 */}

              <ProjectCard
                title="Artinest Blogging Platform"
                imgUrl="https://ik.imagekit.io/8fgpvoiai/project-image/artinest-project__oIf_SVV-.png?updatedAt=1702316763487"
                imgAlt="Agency Landing Page "
                projectUrl="https://github.com/ilokeshghosh/artinest"
                year="2023"
                projectTag="React + Appwrite"
                projectContent=" Artinest Blog Platform is a modern web application built
              with React.js for the frontend and powered by Appwrite as
              the Backend as a Service (BaaS). This project provides a
              seamless and user-friendly interface for registered users to
              create, read, update, and delete blog posts, along with
              additional features like profile picture and name
              modification, email verification and advanced blog and
              username search capabilities."
              />

              <div className="w-[80%] border-[#E0E0E0] mx-auto rounded-full border"></div>

              {/* card 2 */}
              <ProjectCard
                flexDirection="flex-row-reverse"
                className="items-end"
                textAlign="text-end"
                title=" To-Do Application using React"
                imgUrl="https://ik.imagekit.io/8fgpvoiai/project-image/react-todo-application_IKcr3divR.png?updatedAt=1700229585056"
                imgAlt=" To-Do Application using React"
                projectUrl="https://lokesh-react-todo-project.netlify.app/"
                year="2023"
                projectTag="React + Redux Tool Kit"
                projectContent="A Deployed React Project by using Redux Tool Kit"
              />

              <div className="w-[80%] border-[#E0E0E0] mx-auto rounded-full border"></div>

              {/* card 3 */}
              <ProjectCard
                title="Context API Project"
                imgUrl="https://ik.imagekit.io/8fgpvoiai/project-image/context%20api%20project_UWXtR-pvId.png?updatedAt=1703073323747"
                alt="project1"
                imgAlt=" To-Do Application using React"
                projectUrl="https://context-api-project-using-react.netlify.app/"
                year="2023"
                projectTag="React Context API"
                projectContent="A real life implementation of React Context API"
              />

              <div className="w-[80%] border-[#E0E0E0] mx-auto rounded-full border"></div>

              {/* card 4 */}
              <ProjectCard
                flexDirection="flex-row-reverse"
                className="items-end"
                textAlign="text-end"
                title="Theme Switcher"
                imgUrl="https://ik.imagekit.io/8fgpvoiai/project-image/theme%20switcher_4ZUU3y_9_.png?updatedAt=1703073276980"
                alt="project1"
                imgAlt=" To-Do Application using React"
                projectUrl="https://theme-switcher-react-project.netlify.app/"
                year="2023"
                projectTag="React + TailwindCSS"
                projectContent=" A Theme Switcher using React and TailwindCSS"
              />

              <div className="w-[80%] border-[#E0E0E0] mx-auto rounded-full border"></div>

              {/* card 5 */}
              <ProjectCard
                title=" Currency Converter"
                imgUrl="https://ik.imagekit.io/8fgpvoiai/project-image/currency%20converter_1GzrcBOof.png?updatedAt=1703073324040"
                alt="project1"
                imgAlt=" To-Do Application using React"
                projectUrl="https://react-currency-converter-project.netlify.app/"
                year="2023"
                projectTag="React"
                projectContent="A Simple Currency Convertor using React"
              />

              <div className="w-[80%] border-[#E0E0E0] mx-auto rounded-full border"></div>

              {/* card 6 */}
              <ProjectCard
                className="items-end"
                textAlign="text-end"
                flexDirection="flex-row-reverse"
                title="Password Generator"
                imgUrl="https://ik.imagekit.io/8fgpvoiai/project-image/password%20generator_Th-Mg8rtw.png?updatedAt=1703073323655"
                alt="project1"
                imgAlt=" To-Do Application using React"
                projectUrl="https://passwordgenerator-project-react.netlify.app/"
                year="2023"
                projectTag="React"
                projectContent="A Simple Password Generator using React"
              />

              <div className="w-[80%] border-[#E0E0E0] mx-auto rounded-full border"></div>

              {/* card 7 */}
              <ProjectCard
                title=" Background Color Changer"
                imgUrl="https://ik.imagekit.io/8fgpvoiai/project-image/background%20project_JkJCfZ7_d.png?updatedAt=1703073323725"
                alt="project1"
                imgAlt=" To-Do Application using React"
                projectUrl="https://backgroundchanger-using-react.netlify.app/"
                year="2023"
                projectTag="React"
                projectContent="A Simple Background Color Changer using React"
              />
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
              {/* card 1 */}

              <ProjectCard
                title="JavaScript Personal Projects"
                imgUrl="https://ik.imagekit.io/8fgpvoiai/project-image/personal-js-projects_Z8LB0ZXtg.png?updatedAt=1700229586693"
                imgAlt="js-personal-project"
                projectUrl="https://ilokeshghosh.github.io/javaScript-personal-projects/indexpage/dist/"
                year="2023"
                projectTag="JavaScript"
                projectContent="Practicing JavaScript and Building"
              />

              <div className="w-[80%] border-[#E0E0E0] mx-auto rounded-full border"></div>

              {/* card 2 */}
              <ProjectCard
                className="items-end"
                textAlign="text-end"
                flexDirection="flex-row-reverse"
                title="JS30 Course by Wes Bos"
                imgUrl="https://ik.imagekit.io/8fgpvoiai/project-image/js30_jqF4D2pFBp.png?updatedAt=1700229586132"
                imgAlt="js30-project"
                projectUrl="https://ilokeshghosh.github.io/javascript-30/index%20page/dist/"
                year="2023"
                projectTag=" JavaScript"
                projectContent=" Mastering JS Skills By Doing One Project at a Time and
              Elevating Web Wizardry 🧙‍♂️🪄"
              />
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
              {/* card 1 agency landing page*/}
              <ProjectCard
                flexDirection="flex-row"
                title="Agency Landing Page"
                imgUrl="https://ik.imagekit.io/8fgpvoiai/project-image/Screenshot%202023-12-21%20130657_F0l0cvIu2.png?updatedAt=1703144954800"
                imgAlt="Agency Landing Page "
                projectUrl="https://ilokeshghosh.github.io/Web-Development-Projects/agency-landing-page/dist/"
                year="2023"
                projectTag="HTML + TailwindCSS"
                projectContent="Practicing JavaScript and Building"
              />

              <div className="w-[80%] border-[#E0E0E0] mx-auto rounded-full border"></div>

              {/* card 2 travel agency landing page*/}
              <ProjectCard
                className="items-end"
                textAlign="text-end"
                flexDirection="flex-row-reverse"
                title="Travel Agency Landing Page "
                imgUrl="https://ik.imagekit.io/8fgpvoiai/project-image/travel%20agency%20landing%20page_xnfUtYlzi.png?updatedAt=1703144951788"
                imgAlt="Travel Agency Landing Page"
                projectUrl="https://ilokeshghosh.github.io/Web-Development-Projects/travel-agency-landing-page/dist/"
                year="2023"
                projectTag="HTML + TailwindCSS"
                projectContent="Practicing JavaScript and Building"
              />

              <div className="w-[80%] border-[#E0E0E0] mx-auto rounded-full border"></div>

              {/* card 3 ui kit landing page*/}
              <ProjectCard
                title="UI Kit Landing Page"
                imgUrl="https://ik.imagekit.io/8fgpvoiai/project-image/ui-kit-landing%20page_hNcbcotQe.png?updatedAt=1703144949849"
                imgAlt="ui kit landing page"
                projectUrl="https://ilokeshghosh.github.io/Web-Development-Projects/ui-kit-landing-page/dist/"
                year="2023"
                projectTag="HTML + TailwindCSS"
                projectContent="Practicing JavaScript and Building"
              />

              <div className="w-[80%] border-[#E0E0E0] mx-auto rounded-full border"></div>

              {/* card 4 interior landing page*/}
              <ProjectCard
                className="items-end"
                textAlign="text-end"
                flexDirection="flex-row-reverse"
                title="Interior Design Landing Page "
                imgUrl="https://ik.imagekit.io/8fgpvoiai/project-image/interior%20desgn%20landing%20page_4ITy8dHWB.png?updatedAt=1703144953305"
                imgAlt="Travel Agency Landing Page"
                projectUrl="https://ilokeshghosh.github.io/Web-Development-Projects/interior-design-landing-page/"
                year="2023"
                projectTag="HTML + CSS"
                projectContent="Practicing JavaScript and Building"
              />

              <div className="w-[80%] border-[#E0E0E0] mx-auto rounded-full border"></div>

              {/* card 5 lasles vpn landing page*/}
              <ProjectCard
                flexDirection="flex-row"
                title="Lasles VPN Landing Page"
                imgUrl="https://ik.imagekit.io/8fgpvoiai/project-image/lasles%20vpn_EIwSPIjzN.png?updatedAt=1703144950014"
                imgAlt="Lasles VPN Landing Page"
                projectUrl="https://ilokeshghosh.github.io/Web-Development-Projects/LaslesVPN/"
                year="2022"
                projectTag="HTML + CSS"
                projectContent="Practicing JavaScript and Building"
              />

              <div className="w-[80%] border-[#E0E0E0] mx-auto rounded-full border"></div>

              {/* card 6  real estate landing page*/}
              <ProjectCard
                className="items-end"
                textAlign="text-end"
                flexDirection="flex-row-reverse"
                title="Real-Estate Landing Page"
                imgUrl="https://ik.imagekit.io/8fgpvoiai/project-image/real%20estate%20landing%20page_Zdw0vxqL5.png?updatedAt=1703144953645"
                imgAlt="Real-Estate Landing Page "
                projectUrl="https://ilokeshghosh.github.io/Web-Development-Projects/Real%20Estate%20Landing%20page/"
                year="2022"
                projectTag="HTML + CSS"
                projectContent="Practicing JavaScript and Building"
              />
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
            <div className="flex flex-col gap-4 py-4 w-full">
              {/* card 1 agency landing page*/}
              <ProjectCard
                title="Figma Design of Nike Landing page"
                imgUrl="https://ik.imagekit.io/8fgpvoiai/project-image/nike-figma-design_jlElKfybco.png?updatedAt=1701429008831"
                imgAlt="Figma Design"
                projectUrl="https://www.figma.com/file/dR0dj0hJ07bEniOhcRhA1C/Shoes-Design?type=design&node-id=3%3A2&mode=design&t=OdPLMtUNFpmczxe9-1"
                year="2023"
                projectTag="Figma"
                projectContent="A Figma Design on a Nike Product Landing page"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
