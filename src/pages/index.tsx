import Image from "next/image";
import { Inter } from "next/font/google";
import laptop from "../assests/laptop.jpg";
import fs from "fs/promises";
import path from "path";
import Card from "../components/card";
const inter = Inter({ subsets: ["latin"] });

export const getStaticProps = async () => {
  const filepath = path.join(process.cwd(), "src", "data", "data.json");
  const jsondata = await fs.readFile(filepath, "utf-8");
  const data = JSON.parse(jsondata);

  return {
    props: {
      data: data?.data,
    },
  };
};

export default function Home(props: any) {
  const { data } = props;

  return (
    <div className="sm:mx-[8rem] pt-[10rem]  sm:pt-0  " id="home">
      <main className="h-[600px] flex justify-center sm:justify-between  sm:items-center flex-wrap sm:flex-nowrap  ">
        <div className="">
          <Image
            src={laptop}
            width={400}
            height={400}
            alt="laptop image"
            className="rounded-md  "
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
      <section id="services">
        <h1 className="text-[2.5rem] my-4">Our Services</h1>
        <div className="flex flex-wrap justify-center sm:justify-between">
          {data?.map((item: data) => (
            <div key={item.id}>
              <Card
                image={laptop}
                heading={item.heading}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h1></h1>
        <div>{[1, 2, 3, 4, 5].map()}</div>
      </section>
    </div>
  );
}

interface data {
  id: number;
  heading: string;
  description: string;
}
