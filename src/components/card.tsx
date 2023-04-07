import React from "react";
import Image from "next/image";
const Card = (props: card) => {
  const { image, heading, description, buy } = props;
  const buyhandler = () => {
    console.log("click");
  };

  return (
    <div className="text-white shadow-sm shadow-[#eee] my-4 p-4 rounded-md ">
      <div>
        <Image
          src={image}
          width={200}
          height={200}
          alt="image"
          className="rounded-md "
        />
      </div>
      <div>
        <h1 className="text-[2rem] font-bold">{heading}</h1>
        <p className="text-[#eee] text-[1.2rem] capitalize">{description}</p>
      </div>
      <button
        onClick={buyhandler}
        className="bg-[#091c87] mt-4 py-2 px-5 rounded-sm hover:text-black hover:bg-[#eee]"
      >
        Buy
      </button>
    </div>
  );
};

export default Card;

interface card {
  image: any;
  heading: string;
  description: string;
  buy?: () => any;
}
