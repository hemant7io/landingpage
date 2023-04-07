import Image from "next/image";
import { Inter } from "next/font/google";
import laptop from "../assests/laptop.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="sm:mx-[8rem] pt-[8rem] sm:pt-0 " id="home">
      <main className="   min-h-[600px] flex justify-center sm:justify-between  sm:items-center flex-wrap sm:flex-nowrap  ">
        <div className="">
          <Image
            src={laptop}
            width={400}
            height={400}
            alt="laptop image"
            className="rounded  px-4"
          />
        </div>
        <div className=" w-screen  px-4 sm:w-[50%]  ">
          <h1 className=" text-[3rem] sm:text-[5rem]">Landing page</h1>
          <p className=" mt-4 text-[#eee] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            facilis nisi aspernatur debitis repellat dolorem. Impedit tenetur
            nesciunt, non id commodi corrupti voluptatem reprehenderit nemo,
            architecto dolorem quibusdam libero distinctio.
          </p>
        </div>
      </main>
    </div>
  );
}
