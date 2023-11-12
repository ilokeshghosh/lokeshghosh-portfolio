
export default function About() {
    return (
        <div className="w-[80%] flex flex-col justify-start gap-14 py-4 ">
            {/* heading */}
            <div className="text-6xl font-bold flex gap-4 w-full"><h3>About</h3><h3 className="text-orange-600">Me</h3></div>

            {/* content container*/}
            <div className="w-full flex flex-col items-center justify-between gap-8">

                {/* content head */}
                <h3 className="text-4xl font-bold w-full">Passionate FullStack Developer from Kolkata, India</h3>

                {/* content text */}
                <h4 className="text-slate-400 text-xl font-bold w-full"> Hello, I'm Lokesh Ghosh, a recent graduate with a Bachelor's in Computer Application. I'm currently immersed in learning React and MongoDB to expand my skills as a FullStack Developer. My journey in web development is fueled by a curiosity to create seamless and innovative digital experiences.</h4>
            </div>
        </div>
    )
}