import {
  FaReact,
  IoLogoJavascript,
  SiTailwindcss,
  BsGit,
  BiLogoMongodb,
  FaFigma,
  SiAppwrite
} from "../Logos/index.logos";
export default function Skills() {
  return (
    <div className="md:w-[80%] w-full  flex flex-col justify-start gap-14 py-4 ">
      {/* heading */}
      <div className="md:text-5xl text-4xl  font-bold items-center justify-center md:justify-start flex gap-4 w-full">
        <h3>My</h3>
        <h3 className="text-orange-600">Skills</h3>
      </div>

      {/* content container*/}
      <div className="w-full flex flex-wrap  items-center justify-evenly md:gap-2 gap-3 ">
        {/* content 1 */}
        <div className="border rounded-full md:py-8 py-6 px-6 border-orange-500 flex flex-col md:gap-7 gap-5 justify-center items-center">
          <FaReact className="text-blue-400 md:text-7xl text-5xl" />
          <h3 className="font-semibold text-orange-500">30%</h3>
        </div>

        {/* content 2 */}
        <div className="border rounded-full md:py-8 py-6 px-6  flex flex-col md:gap-7 gap-5 justify-center items-center">
          <IoLogoJavascript className="text-yellow-400 md:text-7xl text-5xl" />
          <h3 className="font-semibold text-orange-500">40%</h3>
        </div>

        {/* content 3 */}
        <div className="border rounded-full md:py-8 py-6 px-6  flex flex-col md:gap-7 gap-5 justify-center items-center">
          <SiTailwindcss className="text-cyan-400 md:text-7xl text-5xl" />
          <h3 className="font-semibold text-orange-500">50%</h3>
        </div>

        {/* content 4 */}
        <div className="border rounded-full md:py-8 py-6 px-6  flex flex-col md:gap-7 gap-5 justify-center items-center">
          <BsGit className="text-orange-600 md:text-7xl text-5xl" />
          <h3 className="font-semibold text-orange-500">40%</h3>
        </div>

        {/* content 5 */}
        <div className="border rounded-full md:py-8 py-6 px-6  flex flex-col md:gap-7 gap-5 justify-center items-center">
          <BiLogoMongodb className="text-green-600 md:text-7xl text-5xl" />
          <h3 className="font-semibold text-orange-500">40%</h3>
        </div>

        {/* content 6 */}
        <div className="border rounded-full md:py-8 py-6 px-6  flex flex-col md:gap-7 gap-5 justify-center items-center">
          <SiAppwrite  className="md:text-7xl text-5xl text-[#fc4478]" />
          <h3 className="font-semibold text-orange-500">30%</h3>
        </div>

        {/* content 7 */}
        <div className="border rounded-full md:py-8 py-6 px-6  flex flex-col md:gap-7 gap-5 justify-center items-center">
          <FaFigma className="md:text-7xl text-5xl" />
          <h3 className="font-semibold text-orange-500">10%</h3>
        </div>
      </div>
    </div>
  );
}
