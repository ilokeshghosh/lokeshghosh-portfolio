export default function Home() {
    return (
        <div className="md:w-[80%] w-full flex flex-col justify-start gap-14 py-4">
            {/* heading */}
            <div className="md:text-5xl text-4xl flex-wrap font-semibold flex flex-col gap-2 w-full"> <h3>Hello, I am <span className="text-orange-600">from Kolkata, India</span></h3>
                <h3>FullStack Software Developer</h3>
            </div>

            {/* content */}
            <p className="text-slate-300 md:text-xl text-lg  font-semibold "> Welcome to my portfolio! I'm Lokesh Ghosh, a FullStack Software Developer based in Kolkata, India. With a degree in Computer Application, I'm passionate about creating scalable applications using React and MongoDB. Let's build something amazing!</p>
        </div>
    )
}