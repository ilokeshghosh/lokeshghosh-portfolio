import { Fragment, useState } from "react"
import { SliderData } from "./data"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
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
        <div className="w-[60%]   relative">
            <FaArrowAltCircleLeft className='left-arrow absolute z-10 border top-1/2 left-0' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow absolute z-10 border top-1/2 right-0' onClick={nextSlide} />
            {SliderData.map((slide, index) => {
                return (
                    <Fragment key={index}>
                        {index === current && (
                            // slider content
                            <div className="w-full flex flex-col justify-center items-start gap-2">
                                <h3 className="text-3xl font-semibold ">test project title</h3>
                                <h4 className="text-xl font-base text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, aliquid! Minus eius, illo culpa </h4>
                                <img src={slide.image} alt='travel image' className='image w-full h-[400px]' />
                            </div>
                        )}
                    </Fragment>
                );
            })}
        </div>
    )
}

