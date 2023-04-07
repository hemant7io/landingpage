import React from "react";
import Image from "next/image";
const Card = (props: card) => {
  const { image, heading, description, buy } = props;
  const buyhandler = () => {
    console.log("click");
  };
  return (
    <div>
      <div>
        <Image
          src={image}
          width={400}
          height={400}
          alt="image"
          className="rounded  px-4"
        />
      </div>
      <div>
        <h1>{heading}</h1>
        <p>{description}</p>
      </div>
      <button onClick={buyhandler}>Buy</button>
    </div>
  );
};

export default Card;

interface card {
  image: string;
  heading: string;
  description: string;
  buy: () => any;
}
