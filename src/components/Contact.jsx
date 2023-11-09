export default function Contact(){
    return(
        <div className="w-[80%] flex flex-col justify-start gap-14 py-4 ">
            {/* heading */}
            <div className="text-6xl font-bold flex gap-4 w-full"><h3>Contact</h3><h3 className="text-orange-600">Me</h3></div>

            {/* content container*/}
            <div className="w-full flex flex-col items-center justify-between gap-8">

                {/* content head */}
                <h3 className="text-4xl font-bold w-full">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>

                {/* content text */}
                <h4 className="text-slate-400 text-xl font-bold w-full">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam earum dolores id quaerat sit consectetur eum dolorum neque vero nam.</h4>
            </div>
        </div>
    )
}