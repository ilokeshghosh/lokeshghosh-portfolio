import { SliderData } from './data';
import Slider from './Slider';
export default function Projects() {

    // console.log('hi there');
    return (
        <div className="w-[80%]  flex flex-col justify-start gap-2 py-4 ">
            {/* heading */}
            <div className="text-6xl font-bold flex gap-4 w-full"><h3>Featured</h3><h3 className="text-orange-600">Projects</h3></div>

            {/* content container*/}
            <div className="w-full flex flex-col items-start  justify-between gap-8">

                {/* image slider */}
                <Slider slides={SliderData} />

            </div>
        </div>
    )
}