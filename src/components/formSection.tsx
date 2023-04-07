import React, { useState } from "react";

const FormSection = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const formhandler = (e: any) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={formhandler}
      className="flex justify-center items-center flex-col  sm:w-[50%] sm:mx-auto shadow shadow-[#eee] rounded-md"
    >
      <input
        type="text"
        placeholder="Enter your Name"
        className="px-4 py-2 rounded-md my-4 w-[80%]"
      />
      <input
        type="email"
        placeholder="Enter your Email"
        className="px-4 py-2 rounded-md my-4 w-[80%]"
      />
      <textarea
        rows={5}
        cols={30}
        placeholder="Enter your message"
        className="px-4 py-2 rounded-md my-4 w-[80%]"
      />
      <button
        type="submit"
        className="px-4 py-2 rounded-md
       bg-blue-800"
      >
        Send
      </button>
    </form>
  );
};

export default FormSection;
