import { Fragment, useState } from "react"
import { SliderData } from "./data"
import {IoIosArrowBack,IoIosArrowForward} from '../../Logos/index.logos'
export default function Slider({ slides }) {
    console.log(slides)
    const [current, setCurrent] = useState(0)
    const length = slides.length
    console.log(length);
    const nextSlide = () => {
      
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className="w-[90%] relative">
            <IoIosArrowBack className='absolute text-4xl cursor-pointer z-10 text-slate-300  top-[60%] left-0' onClick={prevSlide} />
            <IoIosArrowForward className=' absolute text-4xl cursor-pointer z-10  top-[60%] text-slate-300 right-0' onClick={nextSlide} />
            {slides.map((slide, index) => {
                return (
                    <div key={index}>
                        {index === current && (
                            // slider content
                            <div className="w-full flex flex-col justify-center item-center  gap-2">
                                <h3 className="text-3xl font-semibold">{slide.title}</h3>
                                <h4 className="text-xl font-base text-slate-500">{slide.desc}</h4>
                                <img src={slide.image} alt='travel image' className='image w-full border border-slate-500 rounded-lg max-h-[50vh] h-auto' />
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    )
}

