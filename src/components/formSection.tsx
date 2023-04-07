import React, { useState } from "react";

const FormSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const formhandler = (e: any) => {
    e.preventDefault();
    console.log(name, email, message);
  };
  return (
    <form
      onSubmit={formhandler}
      className="flex justify-center items-center flex-col  sm:w-[50%] sm:mx-auto shadow shadow-[#eee] rounded-md text-black"
    >
      <input
        type="text"
        placeholder="Enter your Name"
        className="px-4 py-2 rounded-md my-4 w-[80%]"
        value={name}
        onChange={(e) => setName(e?.target?.value)}
      />
      <input
        type="email"
        placeholder="Enter your Email"
        className="px-4 py-2 rounded-md my-4 w-[80%]"
        value={email}
        onChange={(e) => setEmail(e?.target?.value)}
      />
      <textarea
        rows={5}
        cols={30}
        placeholder="Enter your message"
        className="px-4 py-2 rounded-md my-4 w-[80%] text-black"
        value={message}
        onChange={(e) => setMessage(e?.target?.value)}
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
