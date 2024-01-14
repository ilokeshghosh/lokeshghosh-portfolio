import { Fragment, useState } from "react"
import { SliderData } from "./data"
import {IoIosArrowBack,IoIosArrowForward,VscLiveShare} from '../../Logos/index.logos'
import { Link } from "react-router-dom"
export default function Slider({ slides }) {
    const [current, setCurrent] = useState(0)
    const length = slides.length
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
        <div className="md:w-[90%]  w-full relative">
            <IoIosArrowBack className='absolute md:text-4xl text-3xl cursor-pointer z-10 text-slate-300  md:top-[60%] top-[70%] left-0' onClick={prevSlide} />
            <IoIosArrowForward className=' absolute md:text-4xl text-3xl cursor-pointer z-10 md:top-[60%] top-[70%] text-slate-300 right-0' onClick={nextSlide} />
            {slides.map((slide, index) => {
                return (
                    <div key={index}>
                        {index === current && (
                            // slider content
                            <div className="w-full flex flex-col justify-center item-center  gap-2 mt-1">
                                <div className="flex flex-wrap justify-center md:justify-start items-center gap-2">
                                <h3 className="md:text-3xl text-xl font-semibold selection:bg-transparent">{slide.title}</h3>
                                <Link className="text-orange-500 text-xl md:text-2xl" to={slide.url} target="_blank"><VscLiveShare/></Link>
                                </div>
                                <h4 className="md:text-xl text-lg md:text-start text-center font-base text-slate-500">{slide.desc}</h4>
                                <img src={slide.image} alt='travel image' className='image w-full border border-slate-500 rounded-lg max-h-[50vh] h-auto' />
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    )
}

