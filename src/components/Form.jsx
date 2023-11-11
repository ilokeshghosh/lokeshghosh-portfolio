import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import conf from "../conf/conf";
import { IoMdCheckmarkCircleOutline } from "../Logos/index.logos";
export default function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      form.current.user_name.value &&
      form.current.user_email.value &&
      form.current.message.value
    ) {
      // send mail
      emailjs
        .sendForm(conf.serviceID, conf.templateID, form.current, conf.apiKey)
        .then(
          (result) => {
            // console.log("message send");
            // reset the input field
            form.current.user_name.value = "";
            form.current.user_email.value = "";
            form.current.message.value = "";

            // showing the success message
            document.querySelector(".message").classList.add("flex");
            document.querySelector(".message").classList.remove("hidden");
            setTimeout(() => {
              document.querySelector(".message").classList.remove("flex");
              document.querySelector(".message").classList.add("hidden");
            }, 2000);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      // console.log("empty field inserted");
    }
  };
  return (
    <form
      className=" w-[100%] flex flex-col justify-between items-center gap-14"
      ref={form}
      onSubmit={sendEmail}
    >
      {/* top section */}
      <div className="flex w-full items-center justify-between gap-5 ">
        {/* name */}
        <div className="flex flex-col relative w-1/2">
          <label className="text-orange-500 text-lg ">Name</label>
          <input
            className="text-slate-300 outline-none font-bold  w-full  border-b-2 focus:top-7 border-slate-500 bg-transparent"
            type="text"
            name="user_name"
          />
        </div>

        {/* email */}
        <div className="flex flex-col relative w-1/2">
          <label className="text-orange-500 text-lg ">Email</label>
          <input
            className="text-slate-300 outline-none font-bold  w-full  border-b-2 focus:top-7 border-slate-500 bg-transparent"
            type="email"
            name="user_email"
          />
        </div>
      </div>

      {/* bottom section */}
      <div className="flex w-full items-center justify-between gap-5">
        {/* message */}
        <div className="flex flex-col relative w-1/2">
          <label className="text-orange-500 text-lg ">Message</label>
          <textarea
            className="text-slate-300 outline-none font-bold  w-full  border-b-2 focus:top-7 border-slate-500 bg-transparent"
            rows={1}
            name="message"
          />
        </div>

        {/* submit button */}
        <input
          className="px-4 py-2 bg-orange-500 border-2 border-orange-500 hover:bg-transparent hover:text-white text-black font-bold text-lg w-1/2 rounded-lg "
          type="submit"
          value="Send"
        />
      </div>

      {/* message section */}
      <p className="bg-green-500 message hidden text-lg font-bold  items-center justify-center gap-3  text-slate-700 px-8 rounded-lg py-2">
        <IoMdCheckmarkCircleOutline className="text-white text-2xl" /> Message
        Sent Successfully
      </p>
    </form>
  );
}
