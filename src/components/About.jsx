
export default function About() {
    return (
        <div className="md:w-[80%] w-full flex flex-col justify-start md:gap-14 gap-8 py-4 ">
            {/* heading */}
            <div className="md:text-5xl text-4xl font-bold flex gap-4 w-full"><h3>About</h3><h3 className="text-orange-600">Me</h3></div>

            {/* content container*/}
            <div className="w-full flex flex-col items-center justify-between gap-8">

                {/* content head */}
                <h3 className="md:text-4xl text-3xl font-bold w-full">Passionate FullStack Developer from Kolkata, India</h3>

                {/* content text */}
                <h4 className="text-slate-400 md:text-xl text-lg font-bold w-full"> Hello, I'm Lokesh Ghosh, a recent graduate with a Bachelor's in Computer Application. I'm currently immersed in learning React and MongoDB to expand my skills as a FullStack Developer. My journey in web development is fueled by a curiosity to create seamless and innovative digital experiences.</h4>
            </div>
        </div>
    )
}