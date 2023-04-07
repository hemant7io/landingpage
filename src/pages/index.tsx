import Image from "next/image";
import { Inter } from "next/font/google";
import laptop from "../assests/laptop.jpg";
import Card from "../components/card";
import FormSection from "../components/formSection";
//nodejs import
import fs from "fs/promises";
import path from "path";
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
      <main
        className="h-[600px] flex justify-center sm:justify-between  sm:items-center flex-wrap sm:flex-nowrap  "
        id="home"
      >
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

      <section className="mt-[2rem] bg-[#eee]  rounded-md text-black pt-5">
        <h1 className="text-center text-[2rem] capitalize font-bold ">
          Client that love us
        </h1>
        <div className="flex justify-center items-center flex-wrap">
          {[1, 2, 3, 4, 5].map((index) => (
            <div key={index}>
              <div className="py-4 px-8 bg-black text-white w-max rounded-md m-4 cursor-pointer">
                company-{index}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="pb-4" id="contact">
        <h1 className="text-[2rem] text-center font-bold my-8 ">Contact us</h1>
        <FormSection />
      </section>
    </div>
  );
}

interface data {
  id: number;
  heading: string;
  description: string;
}
