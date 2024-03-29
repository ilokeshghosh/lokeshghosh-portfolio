export default function Educations() {
  return (
    <div className="md:w-[80%] w-full flex flex-col justify-start gap-14 py-4 ">
      {/* heading */}
      <div className="flex-wrap justify-center md:justify-start  md:text-5xl text-4xl font-bold flex gap-4 w-full ">
        <h3>Education &</h3>
        <h3 className="text-orange-600">Experience</h3>
      </div>

      {/* content container*/}
      <div className="w-full flex flex-col items-start justify-between gap-4  px-4">
        {/* content 2 */}
        <div className="p-1 w-full flex flex-col items-start justify-center">
          <h4 className="md:text-xl text-lg text-orange-500">2023</h4>
          <h3 className="md:text-2xl text-xl font-semibold">BCA</h3>
          <h4 className="md:text-xl text-lg text-slate-500">
            Maulana Abul Kalam Azad University of Technology, West Bengal
          </h4>
        </div>
        {/* content 3 */}
        <div className="p-1 w-full flex flex-col items-start justify-center">
          <h4 className="md:text-xl text-lg text-slate-500">2020</h4>
          <h3 className="md:text-2xl text-xl font-semibold">
            HIGHER SECONDARY
          </h3>
          <h4 className="md:text-xl text-lg text-slate-500">
            lmet international school
          </h4>
        </div>
        {/* content 4 */}
        <div className="p-1 w-full flex flex-col items-start justify-center">
          <h4 className="md:text-xl text-lg text-slate-500">2018</h4>
          <h3 className="md:text-2xl text-xl font-semibold">SECONDARY</h3>
          <h4 className="md:text-xl text-lg text-slate-500">
            Vivekanada Academy
          </h4>
        </div>
      </div>
    </div>
  );
}
