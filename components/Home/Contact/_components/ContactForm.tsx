import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-[#140c1c] rounded-lg p-4 sm:p-10">
      <h1 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold">
        🚀 Let&apos;s Work Together!
      </h1>
      <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
        iusto corporis culpa et obcaecati och?
      </p>

      {/* Input fields */}
      <form className="mt-8 block w-full overflow-hidden">
        {/* Name Inputs */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Fist Name */}
          <input
            type="text"
            placeholder="First name"
            className="flex-1 bg-black text-white placeholder:text-gray-600
                px-6 py-3 rounded-md border-[1.5px] border-gray-600 outline-none w-full"
          />
          {/* Last Name */}
          <input
            type="text"
            placeholder="Last name"
            className="flex-1 bg-black text-white placeholder:text-gray-600
                px-6 py-3 rounded-md border-[1.5px] border-gray-600 outline-none w-full"
          />
        </div>
        {/* Contact Inputs */}
        <div className="flex mt-5 flex-col md:flex-row items-center justify-between gap-4">
          {/* Email */}
          <input
            type="email"
            placeholder="Email  address"
            className="flex-1 bg-black text-white placeholder:text-gray-600
                px-6 py-3 rounded-md border-[1.5px] border-gray-600 outline-none w-full"
          />
          {/* Phone Number */}
          <input
            type="text"
            placeholder="Phone Number"
            className="flex-1 bg-black text-white placeholder:text-gray-600
                px-6 py-3 rounded-md border-[1.5px] border-gray-600 outline-none w-full"
          />
        </div>
        {/* Selection */}
        <div>
          <select
            defaultValue=""
            className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md
            border-[1.5px] border-gray-600 outline-none"
          >
            <option value="" disabled >
              Selecione uma Opção
            </option>
            <option value="frontend" disabled>
              FrontEnd Development
            </option>
            <option value="backend" disabled>
              BackEnd Development
            </option>
            <option value="fullstack" disabled>
              FullStack Development
            </option>
          </select>
        </div>
        {/*  Text Area */}
        <textarea
          rows={7}
          placeholder="Message"
          className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md
            border-[1.5px] border-gray-600 outline-none"
        />
        {/* Send Btn */}
        <div className="mt-4">
            <button className="px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-150 rounded-full">
                Send Message
            </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
