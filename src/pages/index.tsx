import Image from "next/image";
import { Inter } from "next/font/google";
import laptop from "../assests/laptop.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="mx-[8rem]  " id="home">
      <main className="h-[600px] flex justify-between items-center flex-wrap sm:flex-nowrap ">
        <Image
          src={laptop}
          width={400}
          height={400}
          alt="laptop image"
          className="rounded"
        />
        <div className="    w-[50%]  ">
          <h1 className="text-[5rem]">Landing page</h1>
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
