import { FaReact,IoLogoJavascript,SiTailwindcss,BsGit, BiLogoMongodb } from '../Logos/index.logos'
export default function Skills() {
    return (
        <div className="w-[80%]  flex flex-col justify-start gap-14 py-4 ">
            {/* heading */}
            <div className="text-6xl font-bold flex gap-4 w-full"><h3>My</h3><h3 className="text-orange-600">Skills</h3></div>

            {/* content container*/}
            <div className="w-full flex flex-wrap  items-center justify-evenly gap-2 ">

                {/* content 1 */}
                <div className='border rounded-full py-8 px-6 border-orange-500 flex flex-col gap-7 justify-center items-center'>
                    <FaReact className='text-blue-400 text-7xl' />
                    <h3 className='font-semibold text-orange-500'>30%</h3>
                </div>

                 {/* content 2 */}
                 <div className='border rounded-full py-8 px-6 border-slate-500 flex flex-col gap-7 justify-center items-center'>
                    <IoLogoJavascript className='text-yellow-400 text-7xl' />
                    <h3 className='font-semibold text-orange-500'>40%</h3>
                </div>

                 {/* content 3 */}
                 <div className='border rounded-full py-8 px-6 border-slate-500 flex flex-col gap-7 justify-center items-center'>
                    <SiTailwindcss className='text-cyan-400 text-7xl' />
                    <h3 className='font-semibold text-orange-500'>50%</h3>
                </div>

                 {/* content 4 */}
                 <div className='border rounded-full py-8 px-6 border-slate-500 flex flex-col gap-7 justify-center items-center'>
                    <BsGit className='text-orange-600 text-7xl' />
                    <h3 className='font-semibold text-orange-500'>40%</h3>
                </div>
                 {/* content 5 */}
                 <div className='border rounded-full py-8 px-6 border-slate-500 flex flex-col gap-7 justify-center items-center'>
                    <BiLogoMongodb className='text-green-600 text-7xl' />
                    <h3 className='font-semibold text-orange-500'>40%</h3>
                </div>
            </div>
        </div>
    )
}