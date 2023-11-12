import { useState } from "react";
import { Form } from "./index";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="md:w-[80%] w-full flex flex-col justify-start gap-14 py-4 ">
      {/* heading and subheading */}
      <div className="flex flex-col w-full gap-2 md:gap-0 justify-center items-center md:justify-start">
        <div className="md:text-5xl text-4xl  font-bold flex md:justify-start justify-center gap-4 w-full">
          <h3>Contact</h3>
          <h3 className="text-orange-600">Me</h3>
        </div>

        {/* subheading */}
        <h3 className="md:text-2xl text-center md:text-start w-full text-xl text-slate-500 font-extralight ">Let’s get in touch!</h3>
      </div>

      {/* content container*/}
      <div className="md:w-[70%] w-full  flex flex-col items-center justify-between gap-8">
        <Form />
      </div>
    </div>
  );
}
