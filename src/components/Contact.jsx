import { useState } from "react";
import { Form } from "./index";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="w-[80%] flex flex-col justify-start gap-14 py-4 ">
      {/* heading and subheading */}
      <div className="flex flex-col w-full justify-center item-start">
        <div className="text-6xl font-bold flex gap-4 w-full">
          <h3>Contact</h3>
          <h3 className="text-orange-600">Me</h3>
        </div>

        {/* subheading */}
        <h3 className="text-2xl text-slate-500 font-extralight ">Let’s get in touch!</h3>
      </div>

      {/* content container*/}
      <div className="w-[70%]  flex flex-col items-center justify-between gap-8">
        <Form />
      </div>
    </div>
  );
}
