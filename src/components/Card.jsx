
import { BiLogoInstagramAlt, BsLinkedin, BsGithub, BsFacebook } from '../Logos/index.logos'
export default function Card() {
    return (
        // card content
        <div className="w-full flex flex-col justify-center items-center gap-3 py-2 px-5">
            {/* name */}
            <h2 className="w-full text-center text-2xl font-semibold">Lokesh Ghosh</h2>

            {/* image */}
            <img className=" w-full rounded-lg" src="https://raw.githubusercontent.com/ilokeshghosh/RESOURCE_WAREHOUSE/main/profile%20images/out..jpg" alt="profile image" />

            {/* description */}
            <div className="flex flex-col justify-center items-center w-full">
                {/* location */}
                <h2 className="text-xl font-semibold">Kolkata, India</h2>
                {/* role / description */}
                <h3 className="text-lg text-slate-500">Software Engineer</h3>
            </div>

            {/* social logos */}
            <div className="flex w-full justify-between items-center text-[30px]">
                <a href="https://react-icons.github.io/react-icons/icons?name=bs"> <BsLinkedin /></a>
                <a href="https://react-icons.github.io/react-icons/icons?name=bs"> <BsGithub /></a>
                <a href="https://react-icons.github.io/react-icons/icons?name=bs"> <BiLogoInstagramAlt /></a>
                <a href="https://react-icons.github.io/react-icons/icons?name=bs"> <BsFacebook /></a>
            </div>

            {/* hire me button */}
            <button className="px-4 py-2 border-2 font-bold text-lg w-full rounded-lg my-4">HIRE ME!</button>
        </div>
    )
}