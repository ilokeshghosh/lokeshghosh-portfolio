import { SliderData } from './data';
import Slider from './Slider';
export default function Projects() {

    // console.log('hi there');
    return (
        <div className="md:w-[80%] w-full  flex flex-col  justify-start md:gap-2 gap-10 py-4 ">
            {/* heading */}
            <div className="md:text-5xl text-4xl justify-center md:justify-start font-bold flex gap-4 w-full"><h3>Featured</h3><h3 className="text-orange-600">Projects</h3></div>

            {/* content container*/}
            <div className="w-full flex flex-col items-start  justify-between gap-8">

                {/* image slider */}
                <Slider slides={SliderData} />

            </div>
        </div>
    )
}