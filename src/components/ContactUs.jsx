import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-[#171721] rounded-lg w-[80%] md:w-[60%] lg:w-[50%] p-6">
      <span className="text-white text-[1.5rem] font-semibold ">Email Me</span>
      <form className="flex flex-col gap-6 mt-4" ref={form} onSubmit={sendEmail}>
        <div className="flex flex-col">
            {/* <label>Name</label> */}
            <input className="border-2 outline-none bg-transparent border-[#B1B2B3] p-2 focus:border-[#9C27B0] text-white rounded-lg" type="text" name="from_name" placeholder="Your Name"/>
        </div>

        <div className="flex flex-col">
            {/* <label>Email</label> */}
            <input className="border-2 outline-none bg-transparent border-[#B1B2B3] p-2 focus:border-[#9C27B0] text-white rounded-lg" type="email" name="user_email" placeholder="Your Email"/>
        </div>

        <div className="flex flex-col">
            {/* <label>Message</label> */}
            <textarea className="border-2 outline-none bg-transparent border-[#B1B2B3] p-2 focus:border-[#9C27B0] text-white rounded-lg h-[8rem]" name="message" placeholder="Message"/>
        </div>

        <input className="bg-[#9300FF] p-2 rounded-lg text-white text-[1.2rem] text-center font-semibold cursor-pointer hover:opacity-80" type="submit" value="Send" />
      </form>
    </div>
  );
};
